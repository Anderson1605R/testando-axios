const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    const posts = response.data;

    const ul = document.getElementById("ul");

    posts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.body;
      ul.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}
fetchData(url);
