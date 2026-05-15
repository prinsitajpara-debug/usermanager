import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "users.json");

// UPDATE USER
export async function PUT(request, { params }) {
  const { id } = await params;
  const userId = Number(id);

  const body = await request.json();

  const data = fs.readFileSync(filePath, "utf8");

  const users = JSON.parse(data);

  const updatedUsers = users.map((user) =>
    user.id === userId
      ? {
          ...user,
          name: body.name,
          email: body.email,
        }
      : user
  );

  fs.writeFileSync(
    filePath,
    JSON.stringify(updatedUsers, null, 2)
  );

  return NextResponse.json({
    message: "User updated",
  });
}

// DELETE USER
export async function DELETE(request, { params }) {
  const { id } = await params;
  const userId = Number(id);

  const data = fs.readFileSync(filePath, "utf8");

  const users = JSON.parse(data);

  const filteredUsers = users.filter(
    (user) => user.id !== userId
  );

  fs.writeFileSync(
    filePath,
    JSON.stringify(filteredUsers, null, 2)
  );

  return NextResponse.json({
    message: "User deleted",
  });
}