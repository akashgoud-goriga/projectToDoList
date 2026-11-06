console.log("hi");
let img = document.querySelector("img");
let btn =document.querySelector("button");
let change=true;
btn.addEventListener("click",()=>{
    if(change){
        img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRAt0COrz6jz0V02fWYzlg9c6Fj0Ce-wXL_e6hr_wiA&s=10");
        change=false;
    }
    else{
        img.setAttribute("src","https://www.shutterstock.com/image-photo/example-concept-magnifying-glass-highlighting-260nw-2710018265.jpg");
        change=true;
    }
})