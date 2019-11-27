var score_map = {"**" : "**  ", "*" : "*    "}

function makeUL(array) {
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');

        var vals = array[i].split(";")
        var score_str = vals[2]
        if (score_str in score_map) {
            score_str = score_map[score_str];
        }
        item.appendChild(document.createTextNode(score_str + "  -   "));
        var b = document.createElement("b");
        b.textContent = vals[0];
        item.appendChild(b);
        item.appendChild(document.createTextNode(", by " + vals[1]))

        list.appendChild(item);
    }
    return list;
}

document.getElementById('books_data').appendChild(makeUL(books));