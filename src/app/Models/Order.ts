import { Manga } from "./Manga";

export interface Order {
    id: number;
    userId: number;
    orderNumber: string;
    totalPrice: number;
    mangaList: Manga[];
  }