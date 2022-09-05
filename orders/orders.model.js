const orders = [
  {
    date: "2002-09-12",
    subtotal: 93.3,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old Read shoe",
          price: 32.3,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
