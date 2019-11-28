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

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');

        var vals = array[i].split(";")
        var score_str = vals[2]
        if (score_str in score_map) {
            score_str = score_map[score_str];
        }

        score_element = document.createElement('label');
        score_element.textContent = score_str + "  -  ";
        score_element.setAttribute("style","white-space: pre;font-family:Unispace");
        item.appendChild(score_element);

        var b = document.createElement("b");
        b.textContent = vals[0];

        item.appendChild(b);
        item.appendChild(document.createTextNode(seperator + vals[1]));

        attribute_string = "font-size:4vw;margin-bottom:35px";

        if (screen.width > 421){
            attribute_string = "font-size:16px;margin-bottom:8px";
        }
        item.setAttribute("style",attribute_string);

        list.appendChild(item);
    }
    return list;
}

function loadScoredData(data_name, data_source, seperator = "") {
    document.getElementById(data_name).appendChild(makeNote());
    document.getElementById(data_name).appendChild(makeUL(data_source, seperator));
}