"use client";
import React from "react";
import Link from "next/link";

const GithubLink = "https://github.com/Rahul577503";

const Footer: React.FC = () => {
  const linkHoverStyle = {
    color: "#333",
  };

  return (
    <footer
      style={{
        color: "#333",
        fontWeight:'bold',
        padding: "20px",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Agis Institute</p>
      <p style={linkHoverStyle}>
        Developed By{" "}
        <Link href={GithubLink}
          style={{ textDecoration: "none", color: "inherit" }}
          onMouseEnter=
          {(e) => {
            e.currentTarget.style.textDecoration = "underline";
          }}
          onMouseLeave=
          {(e) => {
            e.currentTarget.style.textDecoration = "none";
          }}>
          Rahul
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
