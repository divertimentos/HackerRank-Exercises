const button = document.getElementById('btn');
button.innerHTML = 0;
button.addEventListener("click", () => {
  console.log("Foi o clique")
  button.innerHTML++;
})