import React from "react";
import { auth } from "../../../Firebase";
import { HiPencil } from "react-icons/hi";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
const Header = () => {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const mutation = useMutation(
      () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
      },
      {
        onSuccess: (data) => {
          setUserData(data.user);
          console.log(data);
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  }

  return (
    <div className="flex justify-between border-b-2 border-gray py-2 px-5 items-center">
      <div className="flex items-center">
        <img src="assets/img/shiba.avif" width={"80px"} alt="" />
        <p className="ml-3 text-xl font-bold text-[#A47C6D]">CoCo</p>
      </div>
      <div>빈곳</div>
      <div className="flex grid grid-cols-3 gap-5 text-center">
        <p>제품</p>
        <p className="flex items-center gap-1">
          <span>장바구니</span>
          <span>
            <HiPencil size={"20"} />
          </span>
        </p>
        <p onClick={handleGoogleLogin}>로그인</p>
      </div>
    </div>
  );
};

export default Header;
