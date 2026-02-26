// Task 9: Product API Fetch using Promises (.then, .catch, .finally)

export function fetchProducts(): Promise<any> {
  // using a placeholder URL; in a real app you'd use a real API
  return fetch("https://fakestoreapi.com/products")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network error");
      }
      return res.json();
    })
    .then((data) => {
      console.log("fetched products", data);
      return data;
    })
    .catch((err) => {
      console.error("fetch error", err);
      throw err;
    })
    .finally(() => {
      console.log("fetch attempt finished");
    });
}

fetchProducts().catch(() => {});