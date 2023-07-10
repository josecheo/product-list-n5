import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import data from "./data.json";
const dataFilePath = path.join(
  process.cwd(),
  "src",
  "app",
  "api",
  "products",
  "data.json"
);

// const jsonData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

const jsonData = { ...data };

export async function GET() {
  return NextResponse.json({ data: jsonData, status: 200 });
}

export async function POST(request) {
  try {
    const requestBody = await request.json();
    requestBody.forEach((element) => {
      const { productId, quantity } = element;
      const productIndex = jsonData.products.findIndex(
        (product) => product.id === productId
      );
      jsonData.products[productIndex].amount -= quantity;
      // fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    });

    return NextResponse.json({ message: `el producto ` }, { status: 200 });
  } catch (error) {
    return NextResponse.error("Error al actualizar los datos");
  }
}
