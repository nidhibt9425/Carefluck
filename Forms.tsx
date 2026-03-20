import React, { useState } from "react";

const Forms: React.FC = () => {
  const [form, setForm] = useState({ name: "", notes: "" });

  const handleSubmit = () => {
    if (!form.name) return alert("Name required");
    alert("Form submitted");
  };

  return (
    <div>
      <h2>Care Form</h2>
      <input
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <textarea
        placeholder="Notes"
        onChange={e => setForm({ ...form, notes: e.target.value })}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Forms;