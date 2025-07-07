var input = document.getElementById("count");
var value = 0;

document.getElementsByClassName("click")[0].addEventListener("click", function () {
    value++;
    input.value = value;
});
document.getElementsByClassName("reset")[0].addEventListener("click", function () {
    value=0;
    input.value = value;
});
