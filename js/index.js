

let div = document.querySelector(".text");
div.innerHTML = '<p class"text"> hello </p> ';
console.log(div);







let a =document.createElement("a");
a.textContent="<a href=”https://google.com” target=”_blank”> google link </a>";
a.classList.add("link");
document.body.appendChild(a);
document.body.insertAdjacentElement( "beforebegin", a);