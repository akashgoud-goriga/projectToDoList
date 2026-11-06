console.log("hi");
let box =document.querySelector(".box");
let btn =document.querySelector(" button");
let names =["Akash","Aryan","Aditya","Pandu","Modi","jaishanker"];
btn.addEventListener("click",()=>{
    let random =Math.floor(Math.random()*names.length);
    console.log(random);
    let h1=document.createElement("h1");
    h1.textContent=names[random];
    box.appendChild(h1);
    h1.style.color=randomcolour();
    let [x,y]=position();
    h1.style.top =`${x}%`;
    h1.style.left =`${y}%`;
})
let randomcolour =()=>{
    let r =Math.floor(Math.random()*256);
    let g =Math.floor(Math.random()*256);
    let b =Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
let position =()=>{
    let x =Math.floor(Math.random()*100);
    let y =Math.floor(Math.random()*100);
    return [x,y];
}