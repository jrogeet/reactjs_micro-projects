import Project1 from "./Components/Project1/Project1";
import Project2 from "./Components/Project2/Project2";
import Project3 from "./Components/Project3/Project3";
import Project4 from "./Components/Project4/Project4";
import Project5 from "./Components/Project5/Project5";
import Project6 from "./Components/Project6/Project6";
import Project7 from "./Components/Project7/Project7";
import "./App.css";

export default function App() {
  return (
    <div className="app">
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
      </details>
      <details>
        <summary>Project 4: Counter</summary>
        <Project4 />
      </details>
      <details>
        <summary>Project 5: Counter v2</summary>
        <Project5 />
      </details>
      <details>
        <summary>Project 6: Accordion v1</summary>
        <Project6 />
      </details>
      <details>
        <summary>Project 7: Accordion v2</summary>
        <Project7 />
      </details>
    </div>
  );
}
