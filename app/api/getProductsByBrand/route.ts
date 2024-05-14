import { Product } from "@/types/product";

async function getNikeProducts(type: string) {
  // In case of type: https://www.nike.com/mx/w?q=pants
  // In case of no type defined: https://www.nike.com/mx/w

  const response = await fetch(`https://www.nike.com/mx/w?q=${type}`);
  const data = await response.json();
  console.log(data);
  return data;
}

// Export GET handler
export async function GET(req: any, res: any) {
  console.log(req.params);

  return;

  const { brand } = req.params;
  const products = await getNikeProducts(brand);
  res.json(products);
}
