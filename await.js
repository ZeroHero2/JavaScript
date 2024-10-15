function fetchData() {
  fetch("https://cat-fact.herokuapp.com")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
// Con async
async function fetchData() {
  try {
    let response = await fetch("https://cat-fact.herokuapp.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }  
}
