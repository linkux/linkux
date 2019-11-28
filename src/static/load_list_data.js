function makeUL(array) {
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');

        item.appendChild(document.createTextNode(array[i]));
        //item.setAttribute("style","max-width:100px");
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