var video = document.getElementById("myVideo");

video.addEventListener("pause", function (e) {
  e.preventDefault();
  video.play();
});

let data = [
  {
    id: 1,
    Name: "Futuredew",
    content: "Oil serum hybrid",
    ProdImg:
      "/Product-Page/Images/futureDue/glossier-futuredew-carousel-01.avif",
    actor: "/Product-Page/Images/futureDue/futuredew-2.avif",
    price: 26,
    type: "treatment",
  },
  {
    id: 2,
    Name: "Balm-Dotcom",
    content: "Oil serum hybrid",
    ProdImg:
      "/Product-Page/Images/Balm-dotcom/glossier-bdc-wildfig-carousel-01.avif",
    actor: "/Product-Page/Images/Balm-dotcom/Hover.avif",
    price: 26,
    type: "balm",
  },
  {
    id: 3,
    Name: "Milkey Jelly Cleanser",
    content: "Universal Salve",
    ProdImg:
      "/Product-Page/Images/Milkey-jelly-cleanser/glossier-mjc-futuredew-carousel-01.avif",
    actor: "/Product-Page/Images/Milkey-jelly-cleanser/hover.avif",
    price: 14,
    type: "Cleanser",
  },
];

let container = document.querySelector("#container");

function DisplyData(data) {
  data.forEach((element) => {
    //Card :-
    let cardi = document.createElement("div");
    cardi.classList.add("card-div");

    //Imag Container :-
    let ImgCont = document.createElement("div");
    ImgCont.classList.add("Img-cont");

    //Image :-
    let img = document.createElement("img");
    img.classList.add("img-product-details");
    img.src = element.ProdImg;
    // Add event listener to change the image on hover
    img.addEventListener("mouseover", () => {
      img.src = element.actor;
    });
    img.addEventListener("mouseleave", () => {
      img.src = element.ProdImg;
    });

    //info:-
    let info = document.createElement("div");

    //Name Price :-
    let name = document.createElement("div");
    name.classList.add("Name-Price-details");
    let pName = document.createElement("p");
    pName.classList.add("pName-details");
    pName.innerText = element.Name;
    let pPrice = document.createElement("p");
    pPrice.classList.add("pPrice-details");
    pPrice.innerText = `$${element.price}`;

    //Description:-
    let des = document.createElement("p");
    des.classList.add("description-details");
    des.innerText = element.content;

    //Button :-
    let btn = document.createElement("button");
    btn.classList.add("Add-btn-details");
    btn.innerText = "Add To Bag";
    btn.addEventListener("click", () => {
      let data = JSON.parse(localStorage.getItem("cart")) || [];
      data.push(element);
      localStorage.setItem("cart", JSON.stringify(data));
    });

    ImgCont.append(img);
    name.append(pName, pPrice);
    info.append(name, des, btn);
    cardi.append(ImgCont, name, info);

    container.append(cardi);
  });
}

DisplyData(data);
