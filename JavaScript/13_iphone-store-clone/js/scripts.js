const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    const button = e.target;
    const id = button.getAttribute("id");
    button.querySelector(".color").classList.add("selected"); //mudamos a seleção das cores

    image.classList.add("changing");
    image.setAttribute("src", `ass/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing"); /*toggle remove a classe changing, exibi na forma real sem opacidade*/ 
    }, 200);
  });
});

