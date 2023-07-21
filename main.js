
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", getItem)

function getItem(){
   
    // p etiketini oluşturduk
    const pItem = document.createElement("p");
    // p etiketine input içerisindeki değeri atadık
    pItem.innerHTML = todoInput.value;
    //p etiketini totoList in içerisine atadık
    todoList.appendChild(pItem)
    // ekeleme işlemi gerçekleştikten sonra input değerini sıfırladık
    todoInput.value = "";
    // p etiketine toggle özelliği ekledik
    pItem.addEventListener("click", ()=>{
        pItem.classList.toggle("done");
        pItem.classList.add("delete-item")
    })
    // çift tıklayarak elemanı silme işlemi
    pItem.addEventListener("dblclick", () => {
        todoList.removeChild(pItem);
    });

}

