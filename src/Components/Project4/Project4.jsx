import { useState } from "react";

function getModifiedDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toDateString();
}

function Project4() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function addStep() {
    setStep((s) => s + 1);
  }

  function subStep() {
    setStep((s) => s - 1);
  }

  function subCount() {
    setCount((c) => c - step);
  }

  function addCount() {
    setCount((c) => c + step);
  }

  return (
    <>
      <div>
        <button onClick={() => subStep()}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => addStep()}>+</button>
      </div>
      <div>
        <button onClick={() => subCount()}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => addCount()}>+</button>
      </div>
      <p>
        {count < 0
          ? `${Math.abs(count)} days ago was `
          : count > 0
          ? `${count} days from today is`
          : "Today is"}
        {getModifiedDate(count)}
      </p>
    </>
  );
}

export default Project4;
