const url = "https://api.chucknorris.io/jokes/random";

// handle this end with promises

const displyJokes = document.getElementById("display-joke");
const button = document.getElementById("getJoke");

let latestRequest = 0;

button.addEventListener("click", getRandomJoke);

function getRandomJoke() {
  //   const curentRequest = ++latestRequest;
  latestRequest++;

  const curentRequest = latestRequest;

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error Status : ${res}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(`Current ${curentRequest}`);
      console.log(`Latest ${latestRequest}`);
      if (curentRequest === latestRequest) {
        displyJokes.innerHTML = `${data.value}`;
      }
    })
    .catch((err) => {
      console.error(`Error fething the  data : ${err}`);
      displyJokes.innerHTML = `Something went wrong`;
    });
}

// handle Race condition
