export const CodeView = (st) => {
  return (
    <div className="code">
      <pre>
        <code>{JSON.stringify(st, null, "\t")}</code>
      </pre>
    </div>
  );
};
