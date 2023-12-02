import ReactDOM from "react-dom/client";

const linkElement = (
  <a href="http://zrozumiecreact.pl" target="_blank" rel="noopener noreferrer">
    Strona kursu
  </a>
);

const element = (
  <>
    <h1>Nasza strona!</h1>
    <main>
      {linkElement}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, saepe
        cum doloremque fugit id ad ea sed harum vel. Nam odio quos tenetur aut
        aperiam dolores hic. Dolores, vel eum!
      </p>
      {linkElement}
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
