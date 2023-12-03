import ReactDOM from "react-dom/client";
import { Link } from "./components/Link";

const element = (
  <>
    <h1>Nasza strona!</h1>
    <main>
      <Link text="Sprawdź strone kursu!" shouldOpenNewTab={true} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere labore
        blanditiis magnam eveniet rem ratione, voluptatum nulla inventore
        quaerat necessitatibus.
      </p>
      <Link text="https://zrozumiecreact.pl" shouldOpenNewTab={false} />
      {/* -> jak funkcja 'Link({text: "https://zrozumiecreact.pl"})', która otrzymuje jako propsy obiekt */}
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
