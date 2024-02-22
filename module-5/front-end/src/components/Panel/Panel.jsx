import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Panel.module.css";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  useEffect(() => {
    console.log("Pierwszy render!");
  }, []);

  return isLoading ? (
    <p>Ładowanie...</p>
  ) : (
    <>
      <section className={styles.section}>
        <List data={data}></List>
      </section>
    </>
  );
}
