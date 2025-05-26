// src/data/vendors.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  // Дополнительные поля при необходимости:
  // category: string
  // weight?: number
  // imageUrl?: string
  // isAvailable: boolean
}

export interface Vendor {
  id: string;
  name: string;
  description: string;
  rating: number;
  products: Product[]; // Использует интерфейс Product
}

export const vendors: Vendor[] = [
  {
    id: 'v1',
    name: 'Фруктовый рай',
    description: 'Свежие сезонные фрукты прямо из сада',
    rating: 4.9,
    products: [
      {
        id: 'f1',
        name: 'Яблоки Голден',
        price: 89,
        description: 'Сочные сладкие яблоки местного урожая',
      },
      {
        id: 'f2',
        name: 'Персики',
        price: 199,
        description: 'Ароматные грузинские персики',
      },
      {
        id: 'f3',
        name: 'Манго',
        price: 249,
        description: 'Испанские спелые манго',
      },
      {
        id: 'f4',
        name: 'Виноград Кишмиш',
        price: 169,
        description: 'Без косточек, сладкий белый виноград',
      },
    ],
  },
  {
    id: 'v2',
    name: 'Овощной дворик',
    description: 'Органические овощи с фермы',
    rating: 4.7,
    products: [
      {
        id: 'veg1',
        name: 'Помидоры Черри',
        price: 149,
        description: 'Мелкие сладкие томаты в корзинке',
      },
      {
        id: 'veg2',
        name: 'Огурцы Корнишоны',
        price: 89,
        description: 'Хрустящие маринованные огурчики',
      },
      {
        id: 'veg3',
        name: 'Морковь Baby',
        price: 69,
        description: 'Молодая сладкая морковь',
      },
    ],
  },
  {
    id: 'v3',
    name: 'Ягодное лукошко',
    description: 'Свежие лесные и садовые ягоды',
    rating: 4.8,
    products: [
      {
        id: 'b1',
        name: 'Клубника',
        price: 299,
        description: 'Крупная сладкая клубника из Краснодара',
      },
      {
        id: 'b2',
        name: 'Черника',
        price: 399,
        description: 'Лесная черника в деревянных коробочках',
      },
      {
        id: 'b3',
        name: 'Малина',
        price: 349,
        description: 'Свежая малина с минимальной обработкой',
      },
    ],
  },
];
