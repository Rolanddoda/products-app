import { defineApi } from "@/api/lib";
import type { Product } from "./types";

const products = defineApi("/products");

export const getProducts = () => products.get<Product[]>();
export const getProduct = (id: number) => products.get<Product>(id);
