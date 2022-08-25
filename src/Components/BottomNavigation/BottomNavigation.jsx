import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const BottomNavigation = () => {
  const [active, setactive] = useState("all");
  const navigate = useNavigate();
  return (
    <div className="btn-group fixed inset-x-0 bottom-10 flex justify-center ">
      <button
        onClick={() => {
          setactive("all");
          navigate("/", { replace: true });
        }}
        className={`btn ${active === "all" ? "btn-active" : " "}`}
      >
        All Cars
      </button>
      <button
        onClick={() => {
          setactive("in");
          navigate("/carsin", { replace: true });
        }}
        className={`btn ${active === "in" ? "btn-active" : " "}`}
      >
        Cars in
      </button>
      <button
        onClick={() => {
          setactive("out");
          navigate("/carsout", { replace: true });
        }}
        className={`btn ${active === "out" ? "btn-active" : " "}`}
      >
        Cars out
      </button>
    </div>
  );
};

export default BottomNavigation;
