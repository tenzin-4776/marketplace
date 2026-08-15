import { useEffect, useState } from "react";
import { checkHealth } from "./services/api";

function App() {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    async function connectToServer() {
      try {
        const data = await checkHealth();
        setStatus(data.message);
      } catch (error) {
        console.error(error);
        setStatus("Unable to connect to server");
      }
    }

    connectToServer();
  }, []);

  return (
    <main>
      <h1>Marketplace</h1>
      <p>{status}</p>
    </main>
  );
}

export default App;