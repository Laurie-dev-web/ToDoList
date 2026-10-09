const buttonTag = document.querySelector("button");

buttonTag.addEventListener("click", function () {
  const inputTag = document.querySelector("input");
  console.log(inputTag.value);

  const newlistUL = document.querySelector("ul");
  const newlistLI = document.createElement("li");
  newlistUL.appendChild(newlistLI);

  newlistLI.innerText = inputTag.value;

  inputTag.value = "";
});
