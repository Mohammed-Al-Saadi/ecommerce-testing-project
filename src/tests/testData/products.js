// Sample products used to test different filtering criteria,
// including products with missing optional fields.

const products = [
  {
    name: "Apple Juice",
    price: 3.5,
    category: "Drinks",
    contents: "Apple",
    producer: "Farm A",
  },
  {
    name: "Whole Milk",
    price: 2.0,
    category: "Dairy",
    contents: "Milk",
    producer: "Farm B",
  },
  {
    name: "Apple Pie",
    price: 5.0,
    category: "Bakery",
    contents: "Apple, flour",
    producer: "Farm A",
  },
  {
    name: "Fresh Bread",
    price: 2.5,
    category: "",
    contents: "",
    producer: "Farm C",
  },
];

export default products;