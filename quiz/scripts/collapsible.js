// sets initial state for all collapsible elements

function collapse(element) {
  element.classList.remove("active");
  element.innerHTML = "Show Solution";
  let content = element.nextElementSibling;
  content.style.maxHeight = null;
}

var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.innerHTML = this.innerHTML == "Show Solution" ? "Hide Solution" : "Show Solution";
    let content = this.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  });
}