import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Panel.module.css";

export function Panel() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  function handleLoadClick() {
    fetch("http://localhost:3000/words")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }

  return (
    <>
      <Button onClick={handleLoadClick}>Załaduj dane</Button>
      <section className={styles.section}>
        <List data={data}></List>
      </section>
    </>
  );
}
