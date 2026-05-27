import "./global.css";

import { Button } from "./components/button";
import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
  const { show } = useMessage({ name: "Alisson", age: 18 });

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={() => show("Mensagem personalizada")} />
      <span>0</span>
      <Button name="Remover" />
    </div>
  );
}
