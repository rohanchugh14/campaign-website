fetch('icons.html')
.then(res => res.text())
.then(text => {
    console.log(text);
    let oldelem = document.querySelector("script#replace_with_icons");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
}).catch(e => {
    console.log(e);
})