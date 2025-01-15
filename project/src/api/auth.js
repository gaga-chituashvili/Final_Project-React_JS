export async function authHandler(action, user) {
  const response = await fetch(
    `https://imdb-top-100-movies.p.rapidapi.com/${action}`,
    {
      method: "POST",

      body:JSON.stringify(user),

      headers: {
        "x-rapidapi-key": "2b68a7c7aamsh4e9bc19bfe15d62p1bbc33jsnf60319b38b47",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    }
  );

  const result = response.json();
  if (response.ok) {
    return result;
  }
  throw new Error(result.msg || "error messagge");
}
