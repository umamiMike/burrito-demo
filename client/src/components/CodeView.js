import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useContext } from 'react';
import AppContext from '../AppContext';

function CodeView() {
  const ctx = useContext(AppContext);
  return (
    <div className="code">
      <SyntaxHighlighter language="javascript" style={gruvboxDark}>
        {JSON.stringify(ctx.stateValue.cart, null, '\t')}
      </SyntaxHighlighter>
    </div>
  );
}

export { CodeView };
