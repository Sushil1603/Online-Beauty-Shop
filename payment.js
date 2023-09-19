document.getElementById("plus").addEventListener("click", openForm);
function openForm(){
    var form = document.createElement("form");
    var close_img = document.createElement("img");
    close_img.setAttribute("id", "close_id")
    close_img.setAttribute("src", "https://adn-static1.nykaa.com/media/wysiwyg/Payments/Clear.svg");
    close_img.style.width = "30px";
    close_img.setAttribute("onclick" , "closeForm()");

    var head = document.createElement("h2");
    head.textContent = "New Address";

    var div = document.createElement("div");
    div.append(close_img,head);
    div.setAttribute("id", "close&head");
    div.style.display = "flex";

    var head2 = document.createElement("h2");
    head2.textContent = "Address";

    var in4 = document.createElement("input");  //address
    in4.setAttribute("placeholder", "House No / Flat No");
    in4.setAttribute("type", "text");
    in4.setAttribute("id", "in4");
   
    var in5 = document.createElement("input");  //pincode 
    in5.setAttribute("placeholder", "pincode");
    in5.setAttribute("type", "number");
    in5.setAttribute("id", "in5");

    var in6 = document.createElement("input");  //road name
    in6.setAttribute("placeholder", "Road Nmae / Area / City ");
    in6.setAttribute("id", "in6");
    in6.setAttribute("type", "textarea");
    
    var head3 = document.createElement("h2");
    head3.textContent = "Contact";
    var in1 = document.createElement("input");  //name
    in1.setAttribute("placeholder", "Name");
    in1.setAttribute("type", "text");
    in1.setAttribute("id", "in1");

    var in2 = document.createElement("input"); //email
    in2.setAttribute("id", "in2");
    in2.setAttribute("placeholder", "email");
    in2.setAttribute("type", "email");

    var in3 = document.createElement("input");  //phone no
    in3.setAttribute("placeholder", "Phone no");
    in3.setAttribute("type", "number");
    in3.setAttribute("id", "in3");
   
    var btt = document.createElement("button");//button
    btt.textContent = "Ship to this Address";

    form.append(div,head2,in5,in4,in6,head3,in1,in2,in3,btt);
    document.querySelector("#left_box").append(form);

    // store in local store

   document.querySelector("form").addEventListener("submit", address_add);
}

function closeForm()
{
    console.log("Close");
    var form_closing = document.querySelector("form");
    form_closing.style.display = "none";

}

var Addpage = [];
    

function address_add(){
event.preventDefault();



var name = document.querySelector("#in1").value ;
var email = document.querySelector("#in2").value ;
var phone_no = document.querySelector("#in3").value ;
var address = document.querySelector("#in4").value ;
var pincode = document.querySelector("#in5").value ;
var road_no = document.querySelector("#in6").value ;

if(name === "" || email === "" || phone_no === "" || address === "" || pincode === "" || road_no === "")
    {
        Swal.fire({
            title: 'Oopps!!!🤯 please fill all the details..',
            confirmButtonColor: 'black',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else
    {
        var page = {name:name, email:email, phone_no:phone_no, address:address, pincode:pincode, road_no:road_no};
Addpage.push(page);
localStorage.setItem("Address-data", JSON.stringify(Addpage));
console.log(Addpage);


var DisplayForm = JSON.parse(localStorage.getItem("Address-data")) || [];
     DisplayForm.map(function(elem){

        var Disname = document.createElement("h4");
        Disname.textContent =  elem.name;
        Disname.setAttribute("class", "add");

        var Disadd = document.createElement("p");
        Disadd.setAttribute("class", "add");
        Disadd.textContent = address;

        var DisRoad = document.createElement("p");
        DisRoad.textContent = road_no;
        DisRoad.setAttribute("class", "add");

        var DisNo = document.createElement("p");
        DisNo.textContent = phone_no;
        DisNo.setAttribute("class", "add");

        var DisEmail= document.createElement("p")
        DisEmail.textContent = email;
        DisEmail.setAttribute("class", "add");

        console.log(Disname)
        document.querySelector("#add_display").append(Disname,Disadd,DisRoad,DisNo,DisEmail);


        });
        
    }

}

var dataFromCart = JSON.parse(localStorage.getItem("cartProductArr")) || [];
// span will append number of products       
var NumberofItems = dataFromCart.length;
document.querySelector("#Items").innerHTML = NumberofItems;


var totalPrice = 0;
dataFromCart.forEach(function(product) {
    totalPrice += (+product.price);
  });
localStorage.setItem("finalPrice", totalPrice);
document.querySelector("#Grand_total").innerHTML = "$ " + totalPrice;
  

