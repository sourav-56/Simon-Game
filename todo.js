let inp = document.querySelector("input")
let submit = document.querySelector(".submit")
let ul = document.querySelector("ul");


submit.addEventListener("click", function () {
    let item = document.createElement("li")
    item.innerText = inp.value


    let del = document.createElement("button")
    del.innerText = "delete"
    del.classList.add("delete")
    item.appendChild(del);


    ul.append(item)
    console.log(inp.value)
    inp.value = ""
})

ul.addEventListener("onclick", function(event){
    if(event.target.nodeName==='BUTTON'){
       let delitem= event.target.parentNode
delitem.remove();
console.log('deleted')    }


})

let input = document.querySelector("input");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".submit").click();
    }
});