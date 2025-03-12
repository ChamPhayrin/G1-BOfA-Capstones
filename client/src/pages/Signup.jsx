import React from "react";
import Register from "../components/Register";

export default function Signup() {
  return (
    <main>
      <Register
        register_url={"/register"}
        title={<h1 style={{ textAlign: "center" }}>Register</h1>}
      />
    </main>
  );
}
