
function createCard(src,text) {
    let div = document.createElement("div");
    div.classList.add("wraper");
    let img = document.createElement("img");
    img.src = src;
    img.alt = "images";
    img.style.width="700px";

    let h2 = document.createElement("h2");
    h2.document = text;
    h2.classList.add("title");
    h2.style.color="red";
    h2.style.fontSize="30px";


    div.appendChild(img);
    div.appendChild(h2);

    return div;

}

let card = createCard("https://www.google.com/url?sa=i&url=https%3A%2F%2Fimpressionistarts.com%2Ftop-10-paintings-of-all-time&psig=AOvVaw2qdohNYVrMVI-VZkwAgFLO&ust=1714124543440000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDT2tWJ3YUDFQAAAAAdAAAAABBT", "example text");
picture.appendChild(card);














// let div = document.querySelector(".text");
// div.innerHTML = '<p class"text"> hello </p> ';
// console.log(div);







// let a =document.createElement("a");
// a.textContent="<a href=”https://google.com” target=”_blank”> google link </a>";
// a.classList.add("link");
// document.body.appendChild(a);
// document.body.insertAdjacentElement( "beforebegin", a);