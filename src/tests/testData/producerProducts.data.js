const producerProducts = [
  {
    id: 1001,
    name: "Organic Oat Bread",
    price: 4.9,
    producer: {
      id: 201,
      name: "Tampere Bakery",
      email: "orders@tamperebakery.fi",
    },
    details: {
      category: "Bakery",
      contents: "Oats, wheat flour, water, salt, yeast",
      weight: "500g",
    },
    stock: {
      quantity: 35,
      unit: "loaves",
    },
    description: "Freshly baked organic oat bread",
  },
  {
    id: 1002,
    name: "Strawberry Jam",
    price: 5.5,
    producer: {
      id: 201,
      name: "Tampere Bakery",
      email: "orders@tamperebakery.fi",
    },
    details: {
      category: "Preserves",
      contents: "Strawberries, sugar, lemon juice",
      weight: "300g",
    },
    stock: {
      quantity: 20,
      unit: "jars",
    },
    description: "Homemade strawberry jam",
  },
  {
    id: 1003,
    name: "Fresh Apple Juice",
    price: 3.8,
    producer: {
      id: 201,
      name: "Tampere Bakery",
      email: "orders@tamperebakery.fi",
    },
    details: {
      category: "Drinks",
      contents: "Finnish apples",
      weight: "1L",
    },
    stock: {
      quantity: 15,
      unit: "bottles",
    },
    description: "Cold-pressed apple juice",
  },
  {
    id: 1004,
    name: "Rye Crackers",
    price: 3.2,
    producer: {
      id: 201,
      name: "Tampere Bakery",
      email: "orders@tamperebakery.fi",
    },
    details: {
      category: "Bakery",
      contents: "Rye flour, water, salt",
    },
    stock: {
      quantity: 0,
      unit: "packages",
    },
    description: null,
  },
  {
    id: 1005,
    name: "Seasonal Berry Pie",
    price: 12.9,
    producer: {
      id: 201,
      name: "Tampere Bakery",
      email: "orders@tamperebakery.fi",
    },
    details: {
      category: "",
      contents: "",
    },
    stock: {
      quantity: 8,
      unit: "pies",
    },
    description: "Homemade pie with seasonal berries",
  },
];

export default producerProducts;
