"use client";

import { useEffect, useState } from "react";

import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";

export default function Home() {
  const [users, setUsers] = useState([]);

  // FETCH USERS
  const fetchUsers = async () => {
    const response = await fetch("/api/users");

    if (!response.ok) return;

    const data = await response.json();

    setUsers(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ADD USER
  const addUser = async (user) => {
    const response = await fetch("/api/users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    });

    if (!response.ok) return;

    await fetchUsers();
  };

  // DELETE USER
  const deleteUser = async (id) => {
    const confirmDelete = confirm(
      "Are you sure?"
    );

    if (!confirmDelete) return;

    const response = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) return;

    await fetchUsers();
  };

  // EDIT USER
  const editUser = async (id, updatedUser) => {
    const response = await fetch(`/api/users/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: updatedUser.name,
        email: updatedUser.email,
      }),
    });

    if (!response.ok) return;

    await fetchUsers();
  };

  return (
    <main className="max-w-3xl mx-auto p-5">
      <h1 className="text-4xl font-bold mb-5">
        User Manager
      </h1>

      <AddUserForm addUser={addUser} />

      <UserList
        users={users}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </main>
  );
}