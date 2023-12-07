import { ButtonStrong } from "./components/ButtonStrong";

function App() {
  const buttonEl = (
    <button
      onClick={() => {
        alert("Klik!");
      }}
    >
      Pokaż spoiler
    </button>
  );

  return (
    <>
      <h1>Gwiezdne Wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h3>Fabuła</h3>
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyc pole siłowe.</p>
      {buttonEl}
      {/* Tutaj przekazujemy propsy z tagiem "onCLick" i jego wartością "() => alert..." */}
      <ButtonStrong onClick={() => alert("GRUBY klik!")}>
        Pokaż GRUBY spoiler
      </ButtonStrong>
      <ButtonStrong onClick={() => alert("inny GRUBY klik!")}>
        Pokaż inny GRUBY spoiler
      </ButtonStrong>
      <p>Vader okazuje się być ojcem Luka.</p>
    </>
  );
}

export default App;
