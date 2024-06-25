import React from 'react';
import Editor from '@monaco-editor/react';

function App() {
  const [code, setCode] = React.useState(`const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//Write some cool code
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);`);
  const [width, setWidth] = React.useState(300)
  const [height, setHeight] = React.useState(300)

  const run = () => {
    try {
      // eslint-disable-next-line
      eval(`(async () => {
        try{
          ${code}
        }
        catch(err){
          console.error(err)
        }
})()`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex flex-row w-screen h-screen bg-gray-950 relative">
      <Editor
        value={code}
        defaultLanguage='javascript'
        onChange={(value) => setCode(value ?? "")}
        width={"50%"}
        height={"100%"}
        theme="vs-dark"
      />
      <div className="relative w-1/2 h-full flex flex-col justify-center items-center">
        <canvas id='canvas' height={height} width={width} />
        <div className="absolute flex flex-row bottom-0 justify-evenly p-10 w-full">
          <div className="flex flex-col items-center text-white text-center">
            <label>Width</label>
            <input className='text-black appearance-none rounded-sm outline-none text-center' type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
          </div>
          <div className="flex flex-col items-center text-white text-center">
            <label>Height</label>
            <input className='text-black appearance-none rounded-sm outline-none text-center' type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
          </div>
          <button onClick={run} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Run</button>
        </div>
      </div>
    </div>
  );
}

export default App;
