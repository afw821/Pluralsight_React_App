import React, { Component } from "react";

function Header() {
  return (
    <nav>
      <a href="/">Home</a> | <a href="/about">About</a> |{" "}
      <a href="/courses">Courses</a>
    </nav>
  );
}

export default Header;
