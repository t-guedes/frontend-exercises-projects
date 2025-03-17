// 1- Instalação
console.log(axios);

// 2- Primeiro request
const getData = async () => {
  try {
    // axios mudou para postsFech ⬇️
    const response = await postsFech.get(
      // omitimos todo começo "https://jsonplaceholder.typicode.com/users" ➡️ /users ➡️ porque estamos utilizando o custom
      "/users",
      // 4- Definindo headers
      {
        headers: {
          "Content-Type": "application/json",
          custom: "header",
        },
      }
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

getData();

// 3- Imprimindo dados na tela
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();

  console.log(data);

  data.forEach((user) => {
    const div = document.createElement("div");
    const nameElement = document.createElement("h2");
    nameElement.textContent = user.name;
    div.appendChild(nameElement);

    const emailElement = document.createElement("p");
    emailElement.textContent = user.email;
    div.appendChild(emailElement);

    const usernameElement = document.createElement("p");
    usernameElement.textContent = user.username;
    div.appendChild(usernameElement);

    const cityElement = document.createElement("h5");
    cityElement.textContent = user.address.city;
    div.appendChild(cityElement);

    container.appendChild(div);
  });
};

printData();

// 5- POST
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // axios mudou para postsFech ⬇️
//   // omitimos todo começo "https://jsonplaceholder.typicode.com/posts" ➡️ /post ➡️ porque estamos utilizando o custom
//   postsFech.post("/posts", {
//     title: titleInput.value,
//     body: bodyInput.value,
//     userId: 1,
//   });
// });

// //   axios.post("https://jsonplaceholder.typicode.com/posts", {
// //     body: JSON.stringify({
// //       title: titleInput.value,
// //       body: bodyInput.value,
// //       userId: 1,
// //     }),
// //   });
// // });

// 6- global instance = criei um arquivo

// 7- custom instance = criei um arquivo

// 8 - interceptor = criei um arquivo


