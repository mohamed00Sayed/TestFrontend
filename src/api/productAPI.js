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
const deleteProducts = async (url, data) => {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => 200)
    .catch((err) => 403);
};

const API = {
  fetchProducts,
  deleteProducts,
};

export default API;
