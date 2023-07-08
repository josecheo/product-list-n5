import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(
  process.cwd(),
  "src",
  "app",
  "api",
  "products",
  "data.json"
);
const jsonData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

export async function GET() {
  return NextResponse.json(jsonData);
}

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { id, amount } = requestBody;

    const productIndex = jsonData.products.findIndex(
      (product) => product.id === id
    );

    jsonData.products[productIndex].amount -= amount;

    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));

    return NextResponse.json(
      { message: `el producto ${id}` },
      { status: 200 }
    );  
  } catch (error) {
    return NextResponse.error("Error al actualizar los datos");
  }
}
