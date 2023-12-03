import ReactDOM from "react-dom/client";

import { Link } from "./components/Link";

const linkElement = (
  <a href="http://zrozumiecreact.pl" target="_blank" rel="noopener noreferrer">
    Sprawdź już teraz!
  </a>
);

const element = (
  <>
    <h1>Nasza strona!</h1>
    <main>
      <Link />
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
