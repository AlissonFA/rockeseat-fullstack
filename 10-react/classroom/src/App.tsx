import "./global.css";

import { useEffect, useState } from "react";

import { Button } from "./components/button";
import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
  const [count, setCount] = useState(0);

  const message = useMessage({ name: "Alisson", age: 18 });

  useEffect(() => {
    console.log("Oi!");
  }, []);

  return (
    <div className={styles.container}>
      <Button
        name="Adicionar"
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <span>{count}</span>
      <Button
        name="Remover"
        onClick={() => {
          setCount(count - 1);
        }}
      />
    </div>
  );
}
