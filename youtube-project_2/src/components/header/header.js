import React from "react";
import SearchBtn from "../../icon/searchBtn";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("videos/" + String(e.target.search.value));
  };
  return (
    <div className="flex items-center h-[56px] justify-between">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="pt-[18px] pr-[16px] pb-[18px] pl-[16px]"
      >
        <img
          className="h-[40px] w-auto"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="flex items-center ml-[32px]">
        <form
          onSubmit={(e) => {
            handleSearch(e);
          }}
        >
          <input
            placeholder="Serach..."
            name={"search"}
            className="border max-w-[540px] max-h-[40px] min-w-[240px]"
            type="text"
          />
          <button>
            <SearchBtn></SearchBtn>
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
