let btn = document.querySelector("button")
let input= document.querySelector("input")
let ul = document.querySelector("ul")

btn.addEventListener ("click", function(){
    let item= document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button")
    delBtn.innerText =  "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
   
    input.value= "";

    let delBtns = document.querySelectorAll(".delete")
    for (delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par= this.parentElement;
        console.log(par);
        par.remove();
    })
}

});


let delBtns = document.querySelectorAll(".delete")
for (delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par= this.parentElement;
        console.log(par);
        par.remove();
    })
}