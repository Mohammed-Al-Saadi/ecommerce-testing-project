// Shared product data for filtering, reduction, chunking, and nested-path tests.

const products = [
  {
    id: 1001,
    name: "Apple Juice",
    price: 3.5,
    producer: {
      name: "Farm A",
    },
    details: {
      category: "Drinks",
      contents: "Apple",
      weight: "1L",
    },
    stock: {
      quantity: 15,
      unit: "bottles",
    },
  },
  {
    id: 1002,
    name: "Whole Milk",
    price: 2.0,
    producer: {
      name: "Farm B",
    },
    details: {
      category: "Dairy",
      contents: "Milk",
      weight: "1L",
    },
    stock: {
      quantity: 25,
      unit: "cartons",
    },
  },
  {
    id: 1003,
    name: "Apple Pie",
    price: 5.0,
    producer: {
      name: "Farm A",
    },
    details: {
      category: "Bakery",
      contents: "Apple, flour",
      weight: "800g",
    },
    stock: {
      quantity: 6,
      unit: "pies",
    },
  },
  {
    id: 1004,
    name: "Fresh Bread",
    price: 2.5,
    producer: {
      name: "Farm C",
    },
    details: {
      category: "",
      contents: "",
    },
    stock: {
      quantity: 8,
      unit: "loaves",
    },
  },
];

export default products;