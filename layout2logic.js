var count=1;
var nodes=document.querySelectorAll("#docs");
var last=nodes[nodes.length-1];

function addDoc() {
    count++;
    var btn=document.createElement("button");
    btn.classList.add("btnl1");
    btn.innerHTML=("Document"+" "+count);
    last.appendChild(btn);
  }

document.querySelector("#btnl2").addEventListener("click", addDoc);



document.querySelector("#btnr3").addEventListener("click", remDoc);