creditPopUP = document.getElementById("creditsPopUp");
creditPopUP.addEventListener("click", popUP);
close1 = document.getElementById("close");
close1.addEventListener("click", closePop);

function popUP() {
  popup.style.display = "block";
  popup.style.display = "flex";
}

function closePop() {
  popup.style.display = "none";
}


