const fetchProducts = (url)=> {
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

const API = {
  fetchProducts
}

export default API;
