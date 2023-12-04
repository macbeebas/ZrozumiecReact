import ReactDOM from "react-dom/client";
import { Link } from "./components/Link";
import { HeadingItalic } from "./components/HeadingItalic";

const element = (
  <>
    <HeadingItalic text="Nasza super strona" />
    <main>
      <Link text="Sprawdź strone kursu!" shouldOpenNewTab={true} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere labore
        blanditiis magnam eveniet rem ratione, voluptatum nulla inventore
        quaerat necessitatibus.
      </p>
      <Link shouldOpenNewTab={false} />
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
