var global = { liItemCount: 0 };

function createLiItem(itemText) {
    var li = document.createElement('li');
    li.textContent = itemText;
    var liId = "item" + global.liItemCount;
    li.setAttribute("id", liId);
    li.setAttribute("class","listItem");
    var button = document.createElement("button");
    button.setAttribute("class","remove");
    li.appendChild(button);
    global.liItemCount += 1;
    return li;
}


$(function () {
    $("form").submit(function (event) {
        var liItem = createLiItem($("#todoItem").val());
        $("#todoList").append(liItem);
        $("#todoItem").val("");
        event.preventDefault();
    });
});