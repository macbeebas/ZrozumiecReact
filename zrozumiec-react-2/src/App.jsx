function App() {
  const buttonEl = (
    <button
      onClick={() => {
        alert("Klik!");
      }}
      onMouseEnter={() => {
        console.log("on mouse enter");
      }}
    >
      Pokaż spoiler
    </button>
  );

  // document.querySelector("button").addEventListener("click", () => {
  //   alert("Klik");
  // });

  return (
    <>
      <h1>Gwiezdne Wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h3>Fabuła</h3>
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyc pole siłowe.</p>
      {buttonEl}
      <p>Vader okazuje się być ojcem Luka.</p>
    </>
  );
}

export default App;
