// Requisição
postsFech.interceptors.request.use(
  function (config) {
    console.log("Ainda da requisição...");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//Resposta
postsFech.interceptors.response.use(
  function (response) {
    console.log("Ainda da resposta...");
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
