import { useState } from "react";
import Project1 from "./Components/Project1/Project1";
import Project2 from "./Components/Project2/Project2";

export default function App() {
  return (
    <>
      <details>
        <summary>Project 1: Profile</summary>
        <Project1 />
      </details>
      <details>
        <summary>Project 2: Pizza</summary>
        <Project2 />
      </details>
    </>
  );
}
