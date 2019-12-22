function makeUL(array) {
    var list = document.createElement('ul');

    for (val of array) {
        var item = document.createElement('li');

        var link = val["link"];
        var text = val["content"];

        if ("date" in val) {
            text = val["date"] + " - " + text
        }

        if (link.startsWith("http")) {
            var a = document.createElement('a');
            var linkText = document.createTextNode(text);
            a.appendChild(linkText);
            a.href = link;
            item.append(a);
        }
        else
        {
            item.appendChild(document.createTextNode(text));
        }
        fontsize_string = "4vw";

        if (screen.width > 421){
            fontsize_string = "16px";
        }
        item.setAttribute("style","font-size:" + fontsize_string + ";margin-bottom:5px");

        list.appendChild(item);
    }
    return list;
}

function loadListData(data_name) {
    fetch("/" + data_name + ".api")
    .then(response => response.json())
    .then(function(response) {
        document.getElementById(data_name).appendChild(makeUL(response));
    })
}