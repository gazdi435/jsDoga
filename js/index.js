function csinal(){
    var trElem = document.createElement("tr");
    for (let index = 0; index < 8; index++) {
        tdElem = document.createElement("td");
        tdElem.innerHTML = "asd";
        trElem.appendChild(tdElem);
    }
    document.getElementById("asztal").appendChild(trElem);
}