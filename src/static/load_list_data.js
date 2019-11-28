function makeUL(array) {
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');

        var key = Array.from(Object.keys(array[i]))[0];
        var val = array[i][key];

        if (key.startsWith("http")) {
            var a = document.createElement('a');
            var linkText = document.createTextNode(val);
            a.appendChild(linkText);
            //a.title = array[1];
            a.href = key;
            item.append(a);
        }
        else
        {
            item.appendChild(document.createTextNode(val));
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

function loadListData(data_name, data_source) {
    document.getElementById(data_name).appendChild(makeUL(data_source));
}