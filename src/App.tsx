import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  const [code, setCode] = React.useState('hi');

  return (
    <div className="flex flex-row w-screen h-screen bg-gray-950">
      <textarea
        className="absolute inset-0 resize-none bg-transparent p-2 font-mono text-transparent caret-white outline-none"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          margin: "8px",
          marginLeft: "32.5px"
        }}
      />
      <SyntaxHighlighter
        language="javascript"
        wrapLines={true}
        style={coldarkDark}
        showLineNumbers={true}
        customStyle={{
          margin: 0,
          width: "50%",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default App;
