"use client";

import { useState } from "react";

export default function AddUserForm({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    addUser(newUser);

    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 space-y-3"
    >
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />

      <button
        className="bg-blue-500 text-white px-4 py-2"
      >
        Add User
      </button>
    </form>
  );
}