import ReactDOM from "react-dom/client";

const element = (
  <div>
    <h1>Nasza strona!</h1>
    <main>
      <a
        href="http://zrozumiecreact.pl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Strona kursu
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, saepe
        cum doloremque fugit id ad ea sed harum vel. Nam odio quos tenetur aut
        aperiam dolores hic. Dolores, vel eum!
      </p>
      <a
        href="http://zrozumiecreact.pl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Strona kursu
      </a>
    </main>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
