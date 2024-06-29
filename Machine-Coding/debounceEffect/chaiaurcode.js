const baseUrl = "https://randomuser.me/api/?result=1";

document
  .getElementById("user-input")
  .addEventListener("input", debounceEffect(fetchRandomUser, 500));

function displayUser(user) {
  const userCard = document.getElementById("user-card");
  userCard.style.display = "block";
  userCard.innerHTML = `
    <image src="${user.picture.large}"/>
    <p>${user.email}</p>
  `;
}

function fetchRandomUser() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.length > 0) {
    console.log("call");
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => displayUser(data.results[0]))
      .catch((err) => console.log(`Error while fething ${err}`));
  }
}
// debounce methode return function only
function debounceEffect(func, delay) {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}
