import React, { useState } from "react";
import Users from "./components/Users";
import Forms from "./components/Forms";

const App: React.FC = () => {
  const [tab, setTab] = useState<"users" | "forms">("users");

  return (
    <div style={{ padding: 20 }}>
      <h1>Care Dashboard</h1>
      <button onClick={() => setTab("users")}>Users</button>
      <button onClick={() => setTab("forms")}>Care Forms</button>

      {tab === "users" ? <Users /> : <Forms />}
    </div>
  );
};

export default App;