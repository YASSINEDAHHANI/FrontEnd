import { Manga } from "./Manga";

export interface Order {
    id: number;
    userId: number;
    mangaList: Manga[];
    totalPrice: number;
    orderNumber: string;
  }