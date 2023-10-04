import "./App.css";

function App() {
  // fragment tags
  // return <>App</>;
  // return <div>App</div>;

  // elements must be wrapped in an eclosing tag
  // return (<div>App</div><p>as</p>);

  // return (
  //   <>
  //     <div>App</div>
  //     <p>asasfa</p>
  //     <h1>asasfa</h1>
  //   </>

  // );
  return (
    <div className="app">
      <span>Seleccion un color:</span>
      <input type="text" placeholder="#FF0000" />
    </div>
  );
}

export default App;
