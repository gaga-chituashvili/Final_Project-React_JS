export async function detailsApi() {
    const response = await fetch(
      `https://kohls.p.rapidapi.com/products/detail?webID=4201989`,
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
  

