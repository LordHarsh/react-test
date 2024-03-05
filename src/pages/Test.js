import { useState, useEffect } from "react";

const Test = (props) => {
  const name = props.name || "World";
  const [count, setCount] = useState(0);
  const [fact, setFact] = useState("");
  const handleClick = () => {
    console.log(count);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {("https://catfact.ninja/fact")
  //     .then((response) => response.text())
  //     .then((data) => console.log(data));  
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setFact(data);
      });
  }, [count]);

//   fetch("https://catfact.ninja/fact")
//     .then((response) => response.text())
//     .then((data) => console.log(data));

  return (
    <div className="text-cyan-100 p-12 font-extrabold justify-center">
      <div className="">HELLO, {name}</div>
      <div className="text-3xl">Count is {count}</div>
      <button
        onClick={handleClick}
        className="m-6 bg-slate-800 px-3 rounded-lg"
      >
        +
      </button>
      <br />
      {/* <button onClick={handleGetFact} className="m-6 bg-slate-800 p-3 rounded-lg">Get Fact</button> */}
      <div className="text-lg">{JSON.stringify(fact.fact)}</div>
      <div className="text-lg">{JSON.stringify(fact.length)}</div>
    </div>
  );
};

export default Test;
