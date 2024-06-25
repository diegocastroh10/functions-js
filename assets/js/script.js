let ele = document.getElementById("ele1");
ele.style.backgroundColor = 'green';

ele.addEventListener("click", function pintar(color){
    let elemento = document.querySelector("div");
    elemento.style.backgroundColor = color;
    ele.style.backgroundColor = 'yellow';
});
