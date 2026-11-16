fetch("https://api.crocera.art")
.then(response => response.json())
.then(data =>{
    const list = document.querySelector("#link-list")

    data.links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = link.url;
        a.target = "_blank"
        a.className = "btn"
        a.textContent = link.name

        li.appendChild(a)
        list.appendChild(li)
    });
})
.catch(erro => console.error("falha ", erro))
