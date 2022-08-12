myID = document.getElementById("navBar2");
var myScrollFunc = function () {
var y = window.scrollY;
if (y >= 100) {
    myID.style.display = "flex";
    myID.style.transition = "all 10s";

} 

else {
    myID.style.display = "none";
}
};

window.addEventListener("scroll", myScrollFunc);

var listIcon = document.getElementById("list");
var listIcon2 = document.getElementById("list2");
var XIcon = document.getElementById("xMenu");
var menuBody = document.getElementById("navBarForPhones");

menuBody.style.display = "none";

listIcon.addEventListener("click", ()=>{
    menuBody.style.display = "flex";

});

listIcon2.addEventListener("click", ()=>{
    menuBody.style.display = "flex";
});

XIcon.addEventListener("click", ()=> {
    menuBody.style.display = "none";
});


