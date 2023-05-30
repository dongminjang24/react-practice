import React from "react";
import { auth, apiKey } from "../../../Firebase";
import { HiPencil } from "react-icons/hi";
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
const Header = () => {
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    setPersistence(auth, browserSessionPersistence);
    // provider를 구글로 설정
    signInWithPopup(auth, provider)
      // popup을 이용한 signup
      .then((data) => {
        console.log(data.user); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  let userData;
  if (sessionStorage.getItem(_session_key) !== null) {
    userData = JSON.parse(sessionStorage.getItem(_session_key));
  }
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  return (
    <div className="flex justify-between border-b-2 border-gray py-2 px-5 items-center">
      <div className="flex items-center">
        <img src="assets/img/shiba.avif" width={"80px"} alt="" />
        <p className="ml-3 text-xl font-bold text-[#A47C6D]">CoCo</p>
      </div>
      <div>빈곳</div>
      <div className="flex items-center grid grid-cols-3 gap-5 text-center">
        <p>제품</p>
        <p className="flex items-center gap-1">
          <span>장바구니</span>
          <span>
            <HiPencil size={"20"} />
          </span>
        </p>
        {is_session ? (
          <img
            className="rounded-md"
            width={"50px"}
            src={userData.photoURL}
            alt={userData.displayName}
          />
        ) : (
          <p onClick={handleGoogleLogin}>로그인</p>
        )}
      </div>
    </div>
  );
};

export default Header;
