// 1- Instalação
console.log(axios);

// 2- Primeiro request
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
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
