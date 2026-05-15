"use client";

import { useState } from "react";

export default function UserCard({
  user,
  deleteUser,
  editUser,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = () => {
    editUser(user.id, {
      id: user.id,
      name,
      email,
    });

    setIsEditing(false);
  };

  return (
    <div className="border p-4 rounded shadow">
      {isEditing ? (
        <div className="space-y-2">
          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="border p-2 w-full"
          />

          <input
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="border p-2 w-full"
          />

          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-3 py-1 mr-2"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold">
            {user.name}
          </h2>

          <p>{user.email}</p>

          <div className="mt-3">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-3 py-1 mr-2"
            >
              Edit
            </button>

            <button
              onClick={() => deleteUser(user.id)}
              className="bg-red-500 text-white px-3 py-1"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}