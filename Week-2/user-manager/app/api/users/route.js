import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "users.json");

// GET USERS
export async function GET() {
  const data = fs.readFileSync(filePath, "utf8");

  const users = JSON.parse(data);

  return NextResponse.json(users);
}

// ADD USER
export async function POST(request) {
  const body = await request.json();

  const data = fs.readFileSync(filePath, "utf8");

  const users = JSON.parse(data);

  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  };

  users.push(newUser);

  fs.writeFileSync(
    filePath,
    JSON.stringify(users, null, 2)
  );

  return NextResponse.json(newUser);
}