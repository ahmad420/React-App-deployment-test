import "./App.css";

function App() {
  function handleClick() {
    alert("Hello, React!");
  }
  return (
    <div className="hello-button-container ">
      <button className="hello-button" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
}

export default App;
