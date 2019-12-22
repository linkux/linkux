var score_map = {"**" : "**  ", "*" : "*    "}

function makeNote() {
    note = document.createElement('label');
    note.textContent = "(More stars is better)";

    note.setAttribute("style","font-size:3.5vw");
    if (screen.width > 421){
        note.setAttribute("style","font-size:14px");
    }

    return note;
}

function makeUL(array, seperator) {
    var list = document.createElement('ul');

    for (val of array) {
        var item = document.createElement('li');

        var score_str = val["score"]
        if (score_str in score_map) {
            score_str = score_map[score_str];
        }

        score_element = document.createElement('label');
        score_element.textContent = score_str + "  -  ";
        score_element.setAttribute("style","white-space: pre;font-family:Unispace");
        item.appendChild(score_element);

        var b = document.createElement("b");
        b.textContent = val["content"];
        //if "author" in

        item.appendChild(b);
        if ("author" in val) {
            item.appendChild(document.createTextNode(seperator + val["author"]));
        }

        attribute_string = "font-size:4vw;margin-bottom:35px";

        if (screen.width > 421){
            attribute_string = "font-size:16px;margin-bottom:8px";
        }
        item.setAttribute("style",attribute_string);

        list.appendChild(item);
    }
    return list;
}

function loadScoredData(data_name, seperator = "") {
    document.getElementById(data_name).appendChild(makeNote());
    fetch("/" + data_name + ".api")
    .then(response => response.json())
    .then(function(response) {
        document.getElementById(data_name).appendChild(makeUL(response, seperator));
    })
}