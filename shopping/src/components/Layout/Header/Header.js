import React from "react";
import { HiPencil } from "react-icons/hi";
import { useAuthContext } from "../../../context/userContext";
const Header = () => {
  const { userData, onLogOutClick, handleGoogleLogin } = useAuthContext();
  return (
    <div className="flex justify-between border-b-2 border-gray py-2 px-5 items-center">
      <div className="flex items-center">
        <img src="assets/img/shiba.avif" width={"80px"} alt="" />
        <p className="ml-3 text-xl font-bold text-[#A47C6D]">CoCo</p>
      </div>
      <div>빈곳</div>
      <div
        className={`flex items-center grid ${
          userData ? "grid-cols-4" : "grid-cols-3"
        } gap-5 text-center`}
      >
        <p>제품</p>

        {userData ? (
          <>
            <p className="flex items-center gap-1">
              <span>장바구니</span>
              {userData.isAdmin ? (
                <span>
                  <HiPencil size={"20"} />
                </span>
              ) : null}
            </p>
            <div className="flex items-center justify-center">
              <img
                className="rounded-md"
                width={"50px"}
                src={userData.photoURL}
                alt={userData.displayName}
              />
            </div>
            <p onClick={onLogOutClick}>로그아웃</p>
          </>
        ) : (
          <p onClick={handleGoogleLogin}>로그인</p>
        )}
      </div>
    </div>
  );
};

export default Header;
