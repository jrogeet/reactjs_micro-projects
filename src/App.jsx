import Project1 from "./Components/Project1/Project1";
import Project2 from "./Components/Project2/Project2";
import Project3 from "./Components/Project3/Project3";
import Project4 from "./Components/Project4/Project4";
import Project5 from "./Components/Project5/Project5";

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
      <details>
        <summary>Project 3: Steps</summary>
        <Project3 />
        <Project3 />
      </details>
      <details>
        <summary>Project 4: Counter</summary>
        <Project4 />
      </details>
      <details>
        <summary>Project 5: Counter v2</summary>
        <Project5 />
      </details>
    </>
  );
}
