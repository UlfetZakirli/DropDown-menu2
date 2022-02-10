var hamburger_menu=document.querySelector(".hamburger_menu");
var dd_wrap=document.querySelector(".dd_wrap");
var a_parent=document.querySelectorAll(".a_parent");

hamburger_menu.addEventListener("click",function(){
    dd_wrap.classList.toggle("active");
    a_parent.forEach(function(a_item){
        a_item.classList.remove("active")
    })
})

a_parent.forEach(function(a_item){
    a_item.addEventListener("click",function(){
        a_parent.forEach(function(a_item){
            a_item.classList.remove("active")
        })
        a_item.classList.add("active");
    })
})