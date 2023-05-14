import React from 'react';
import Editor from 'react-simple-code-editor';
//@ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';

function App() {
  const [code, setCode] = React.useState(`const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//Write some cool code
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
`);
  const [visible, setVisible] = React.useState(true)
  const [width, setWidth] = React.useState(300)
  const [height, setHeight] = React.useState(300)

  React.useEffect(() => {
    try {
      // eslint-disable-next-line
      eval(`(async () => {
  ${code}
})()`)
    } catch (err) {
      console.error(err)
    }
  }, [code, visible])

  return (
    <div className="flex flex-row w-screen h-screen bg-gray-950 relative">
      <div className={"absolute flex flex-row w-screen h-screen justify-center items-center bg-gray-950" + (visible ? "" : " hidden")} style={{
        zIndex: 999
      }}>
        <div className="flex flex-col w-1/3 h-1/2 bg-gray-800 rounded-lg text-white p-5">
          <div className="text-3xl text-center">Enter canvas size</div>
          <div className="flex flex-row mt-7"><div className="text-lg">Height:&nbsp;</div><input type="number" className="outline-none grow bg-gray-700 text-white pl-3 rounded-lg" onChange={(e) => setHeight(parseInt(e.target.value))} /></div>
          <div className="flex flex-row mt-7"><div className="text-lg">Width:&nbsp;</div><input type="number" className="outline-none grow bg-gray-700 text-white pl-3 rounded-lg" onChange={(e) => setWidth(parseInt(e.target.value))} /></div>
          <div className="grow flex flex-row justify-center items-center">
            <div className="bg-green-700 rounded-lg p-3 cursor-pointer" onClick={() => setVisible(!visible)}>
              Create Canvas
            </div>
          </div>
        </div>
      </div>
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          width: "50%",
          height: "100%",
          color: "#ffffff"
        }}
      />
      <div className="w-1/2 h-full flex flex-row justify-center items-center">
        <canvas height={height} width={width} />
      </div>
    </div>
  );
}

export default App;
