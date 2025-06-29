let input=document.querySelector(".num");
let count=parseInt(input.value);
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    switch(this.textContent){
      case "+":
        count++;
        input.value=count;
        break;
      case "-":
        count--;
        input.value=count;
        break;
      case "Reset":
        count=0;
        input.value=count;
        break;
      default  : console.log("Unkown");

    }
  })
}
