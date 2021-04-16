function App() {
  return (
    <div className="App">
      <p>only this paragraph will get the style :)</p>
      <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    </div>
  );
}

export default App;
