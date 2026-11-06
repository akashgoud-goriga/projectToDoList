let inpt = document.querySelector("#inp");
let addbtn =document.querySelector("#inp-btn");
let tasklist =document.querySelector(".task-list");

let renderui=()=>{
    taskarr.forEach((val,index)=>{
        tasklist.innerHTML+=`
                <div class="li">
                    <p style="text-decoration:${(val.iscompleted)?"line-through":"none"}"; > ${val.task}</p>
                    <div class="btns">
                        <button onclick="complete(${index})" id="comp">Completed</button>
                        <button onclick="deletebtn(${index})" id="del">Delete</button>
                    </div>
                </div>`;
    inpt.value="";

    })
}
let deletebtn =(index)=>{
    console.log(index);
    taskarr.splice(index,1);
    console.log(taskarr);
    tasklist.innerHTML="";
    renderui();
    

}
let Completed=(index)=>{


}



let taskarr =[]
addbtn.addEventListener("click",()=>{
    let inputValue = inpt.value;
    if(inputValue.trim()===""){
        alert("Please provide a Task");
        return
    }
    taskarr.push({
        task:inputValue,
        iscompleted:false,
    });
    console.log(taskarr);
    tasklist.innerHTML="",
    renderui();
    
})
let complete=(index)=>{
    taskarr[index].iscompleted=!taskarr[index].iscompleted;
    tasklist.innerHTML="";
    renderui();
}