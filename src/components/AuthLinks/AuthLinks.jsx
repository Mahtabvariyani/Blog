import React from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";

function AuthLinks() {
  const status = "authenticated";
  console.log("status:", status);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login">Log In</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  );
}

export default AuthLinks;
