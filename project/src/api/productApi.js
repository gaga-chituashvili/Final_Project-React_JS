export async function productApi() {
    const response = await fetch(
      `https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens`,
      {
        method: "GET",
        headers: {
          'x-rapidapi-key': 'a83fb42ac5msh07884380873ea56p1b5f45jsn82a92177eaf5',
          'x-rapidapi-host': 'kohls.p.rapidapi.com'
        }
      }
    );
  
    const result = response.json();
    if (response.ok) {
      return result;
    }
    throw new Error("fetch error");
  
  }
  


