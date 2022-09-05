const products = [
  {
    id: "redshoe",
    description: "red shoe",
    price: 42.32,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 32.32,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductsById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const matchedProdct = getProductsById(id);
  if (matchedProdct) {
    const newProductReview = {
      rating,
      comment,
    };

    matchedProdct.reviews.push(newProductReview);

    return newProductReview;
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addNewProduct,
  addNewProductReview,
};
