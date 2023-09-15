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
  {
    id: 4,
    Name: "Cleanser Concentrate",
    content: "Clarifying face wash",
    ProdImg:
      "/Product-Page/Images/Cleanser-Concentrate/glossier-cleanser-concentrate-carousel-01.avif",
    actor: "/Product-Page/Images/Cleanser-Concentrate/hover.avif",
    price: 19,
    type: "Cleanser",
  },
  {
    id: 5,
    Name: "Priming Moisturizer",
    content: "Buildable hydrating creme",
    ProdImg:
      "/Product-Page/Images/Priming-mosturiser/glossier-priming-moisturizer-carousel-01.avif",
    actor: "/Product-Page/Images/Priming-mosturiser/hover.avif",
    price: 24,
    type: "Moisturizer",
  },
  {
    id: 6,
    Name: "Priming Moisturizer Balance",
    content: "Oil-Control Gel Cream",
    ProdImg:
      "/Product-Page/Images/primaring-mosturizer-balance/glossier-priming-moisturizer-balance-carousel-01_4b6e0d57-d05e-46fc-8610-ab6201468c2c.avif",
    actor: "/Product-Page/Images/primaring-mosturizer-balance/hover.avif",
    price: 25,
    type: "Moisturizer",
  },
  {
    id: 7,
    Name: "Priming Moisturizer Rich",
    content: "Luxurious face cream",
    ProdImg:
      "/Product-Page/Images/priming-mosturizer-rich/glossier-priming-moisturizer-rich-carousel-01.avif",
    actor: "/Product-Page/Images/priming-mosturizer-rich/hover.avif",
    price: 35,
    type: "Moisturizer",
  },
  {
    id: 8,
    Name: "Invisible Shield",
    content: "Daily sunscreen +",
    ProdImg:
      "/Product-Page/Images/invisible-shileld/glossier-invisible-shield-carousel-01_f6471fa7-9197-4c39-8cec-00ab11b7691b.avif",
    actor: "/Product-Page/Images/invisible-shileld/hover.avif",
    price: 25,
    type: "sunscreen",
  },
  {
    id: 9,
    Name: "After Baume",
    content: "Moisture barrier recovery cream",
    ProdImg:
      "/Product-Page/Images/after-baume/glossier-after-baume-carousel-01_23fe78f1-1917-42e6-9448-b7f44e65acfc.avif",
    actor: "/Product-Page/Images/after-baume/hover.avif",
    price: 28,
    type: "Moisturizer",
  },
  {
    id: 10,
    Name: " Futuredew",
    content: "oil-serum hybrid",
    ProdImg: "/Product-Page/Images/Milky-Jelly/glossier-mjc-carousel-01.avif",
    actor: "/Product-Page/Images/Milky-Jelly/hover.avif",
    price: 41,
  },
  {
    id: 11,
    Name: "Balm Dotcom Trio",
    content: "Choose three balms",
    ProdImg:
      "/Product-Page/Images/Balm-dotcom-trio/glossier-bdctrio-carousel-01.avif",
    actor:
      "/Product-Page/Images/Balm-dotcom-trio/glossier-bdctrio-carousel-02.avif",
    price: 36,
    type: "balm",
  },
  {
    id: 12,
    Name: "Solution",
    content: "Choose three balms",
    ProdImg: "/Product-Page/Images/Solution/glossier-solution-carousel-01.avif",
    actor: "/Product-Page/Images/Solution/hover.avif",
    price: 26,
    type: "treatment",
  },
  {
    id: 13,
    Name: "Super Glow",
    content: "Vitamin c + magnesium serum",
    ProdImg:
      "/Product-Page/Images/Balm-dotcom/glossier-bdc-wildfig-carousel-01.avif",
    actor: "/Product-Page/Images/Milkey-jelly-cleanser/hover.avif",
    price: 29,
    type: "treatment",
  },
];

let container = document.querySelector("#container");

function DisplyData(data) {
  data.forEach((element) => {
    //Card :-
    let card = document.createElement("div");
    card.classList.add("card");

    //Imag Container :-
    let ImgCont = document.createElement("div");
    ImgCont.classList.add("Img-cont");

    //Image :-
    let img = document.createElement("img");
    img.classList.add("img-product");
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
    name.classList.add("Name-Price");
    let pName = document.createElement("p");
    pName.classList.add("pName");
    pName.innerText = element.Name;
    let pPrice = document.createElement("p");
    pPrice.classList.add("pPrice");
    pPrice.innerText = `$${element.price}`;

    //Description:-
    let des = document.createElement("p");
    des.classList.add("description");
    des.innerText = element.content;

    //Button :-
    let btn = document.createElement("button");
    btn.classList.add("Add-btn");
    btn.innerText = "Add To Bag";
    btn.addEventListener("click", () => {
      let data = JSON.parse(localStorage.getItem("cart")) || [];
      data.push(element);
      localStorage.setItem("cart", JSON.stringify(data));
    });

    ImgCont.append(img);
    name.append(pName, pPrice);
    info.append(name, des, btn);
    card.append(ImgCont, name, info);

    container.append(card);
  });
}

//Type :-
document.getElementById("all-products").addEventListener("click", function () {
  container.innerHTML = null;
  DisplyData(data);
});

//Type:- Cleanser :-

document.getElementById("cleanser").addEventListener("click", function () {
  container.innerHTML = null;
  let filterData = data.filter((element) => {
    return element.type === "Cleanser";
  });
  DisplyData(filterData);
});

//Type :- Balms :-

document.getElementById("balms").addEventListener("click", function () {
  container.innerHTML = null;
  let filterData = data.filter((element) => {
    return element.type === "balm";
  });
  DisplyData(filterData);
});

//Type :- Treatment:-

document.getElementById("treatment").addEventListener("click", function () {
  container.innerHTML = null;
  let filterData = data.filter((element) => {
    return element.type === "treatment";
  });
  DisplyData(filterData);
});

//Type :- sunscreen :-

document.getElementById("sunscreen").addEventListener("click", function () {
  container.innerHTML = null;
  let filterData = data.filter((element) => {
    return element.type === "sunscreen";
  });
  DisplyData(filterData);
});

//Type :- Moistrizer

document.getElementById("Moisturizer").addEventListener("click", function () {
  container.innerHTML = null;
  let filterData = data.filter((element) => {
    return element.type === "Moisturizer";
  });
  DisplyData(filterData);
});

DisplyData(data);
