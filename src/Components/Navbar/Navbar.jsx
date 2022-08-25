import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content fixed inset-x-0 top-0 flex justify-center">
      <a
        href="https://harpreetsingh.vercel.app/"
        target="_blank"
        className="btn btn-ghost normal-case text-xl"
      >
        Harpreet Singh
      </a>
    </div>
  );
};

export default React.memo(Navbar);
