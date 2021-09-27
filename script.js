const jokes = document.getElementById("jokes");
const btn = document.getElementById("jokesbtn");

btn.addEventListener("click", getJokes);
getJokes();
async function getJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  jokes.innerText = data.joke;
}
