const text = document.querySelector("#inpBox");
const ul = document.querySelector("ul");
const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

btn.addEventListener("click", () => {
    let value = text.value;
    text.value = "";
    text.focus();

    const li = document.createElement("li");
    const spn = document.createElement("span");
    const delBtn = document.createElement("button");

    spn.textContent = value;
    delBtn.textContent = "Delete";
    li.appendChild(spn)
    li.appendChild(delBtn);
    ul.appendChild(li);

    delBtn.addEventListener("click", () => {
        ul.removeChild(li)
    })

});


