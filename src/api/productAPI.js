const fetchProducts = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

/*handle mass delete*/
const deleteProducts = (url, products) => {
  const dvds = [];
  const books = [];
  const furnitures = [];
  const ids = [];

  products.forEach((product) => {
    if (product?.weight !== null) {
      books.push(product.sku);
      ids.push(product.sku);
    }
    if (product?.size !== null) {
      dvds.push(product.sku);
      ids.push(product.sku);
    }
    if (product?.dimensions !== null) {
      furnitures.push(product.sku);
      ids.push(product.sku);
    }
  });

  const data = {
    books,
    dvds,
    furnitures,
  };

  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => ids);
};

const API = {
  fetchProducts,
  deleteProducts,
};

export default API;
