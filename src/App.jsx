import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl rounded-3xl px-3 py-3 bg-white">
          <button
            onClick={() => setColor("red")}
            className="shadow-lg  outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="shadow-lg  outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="shadow-lg  outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("olive")}
            className="shadow-lg  outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("gray")}
            className="shadow-lg outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="shadow-lg outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("pink")}
            className="shadow-lg  outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("purple")}
            className="shadow-lg  outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("lavender")}
            className="shadow-lg  outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("white")}
            className="shadow-lg  outline-none px-4 py-2 rounded-2xl border-solid "
            style={{ backgroundColor: "white" }}
          >
            White
          </button>

          <button
            onClick={() => setColor("black")}
            className="shadow-lg  outline-none px-4 py-2 rounded-2xl text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
