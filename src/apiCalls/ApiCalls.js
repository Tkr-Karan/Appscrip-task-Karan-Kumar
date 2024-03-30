export const GetAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
