function App() {
  function logMouseLeave() {
    console.log("on mouse leave");
  }

  const buttonEl = (
    <button
      onClick={() => {
        alert("Klik!");
      }}
      onMouseEnter={function () {
        console.log("on mouse enter");
      }}
      onMouseOut={logMouseLeave}
    >
      Pokaż spoiler
    </button>
  );

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Fabuła</h2>
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
      {buttonEl}
      <p>Vader okazuje się być ojcem Luka.</p>
    </>
  );
}

export default App;
