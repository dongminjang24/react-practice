import React, { useEffect } from "react";
import { auth, apiKey } from "../../../Firebase";
import { HiPencil } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
const Header = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(false);
  const [userData, setUserData] = useState(null);
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // provider를 구글로 설정
        return (
          signInWithPopup(auth, provider)
            // popup을 이용한 signup
            .then((data) => {
              console.log(data.user); // console로 들어온 데이터 표시
            })
            .catch((err) => {
              console.log(err);
            })
        );
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }

  const onLogOutClick = () => {
    signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUserData(user);
        setSession(true);
      } else {
        // User is signed out
        setUserData(null);
        setSession(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  // let userData;
  // if (sessionStorage.getItem(_session_key) !== null) {
  //   userData = JSON.parse(sessionStorage.getItem(_session_key));
  // }
  // const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log();
  return (
    <div className="flex justify-between border-b-2 border-gray py-2 px-5 items-center">
      <div className="flex items-center">
        <img src="assets/img/shiba.avif" width={"80px"} alt="" />
        <p className="ml-3 text-xl font-bold text-[#A47C6D]">CoCo</p>
      </div>
      <div>빈곳</div>
      <div
        className={`flex items-center grid ${
          session ? "grid-cols-4" : "grid-cols-3"
        } gap-5 text-center`}
      >
        <p>제품</p>
        <p className="flex items-center gap-1">
          <span>장바구니</span>
          <span>
            <HiPencil size={"20"} />
          </span>
        </p>
        {session ? (
          <>
            <div className="flex items-center justify-center">
              <img
                className="rounded-md"
                width={"50px"}
                src={userData.photoURL}
                alt={userData.displayName}
              />
            </div>
            <button onClick={onLogOutClick}>로그아웃</button>
          </>
        ) : (
          <p onClick={handleGoogleLogin}>로그인</p>
        )}
      </div>
    </div>
  );
};

export default Header;
