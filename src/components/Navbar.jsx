import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  return (
    <>
      <div className="topnav">
        <Link to="/">
          <a href="#home" className="active">
            Recipe
          </a>
        </Link>
        <Link to={`/category/indian`} className="link">
          <a href="#">Indian</a>
        </Link>
        <Link to={`/category/chinese`} className="link">
          <a href="#">Chinese</a>
        </Link>
        <Link to={`/category/thai`} className="link">
          <a href="#">Thai</a>
        </Link>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Dish Name.."
          />
        </form>
      </div>

      <div style={{ paddingLeft: "16px" }}></div>
    </>
  );
};

export default Navbar;
