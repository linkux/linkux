var score_map = {"**" : "**  ", "*" : "*    "}

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
        score_element.textContent = score_str + "  -  "
        score_element.setAttribute("style","white-space: pre")
        item.appendChild(score_element);
        var b = document.createElement("b");
        b.textContent = vals[0];
        item.appendChild(b);
        item.appendChild(document.createTextNode(seperator + vals[1]))

        list.appendChild(item);
    }
    return list;
}

function loadScoredData(data_name, data_source, seperator = "") {
    document.getElementById(data_name).appendChild(makeUL(data_source, seperator));
}