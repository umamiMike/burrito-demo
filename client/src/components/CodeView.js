import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { useContext } from 'react';
import AppContext from '../AppContext';

function CodeView() {
  const ctx = useContext(AppContext);
  return (
    <div className="code">
      <SyntaxHighlighter language="javascript" style={gruvboxDark}>
        {JSON.stringify(state.cart, null, '\t')}
      </SyntaxHighlighter>
    </div>
  );
}

export { CodeView };
