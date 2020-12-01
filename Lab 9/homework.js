//work without button
// const select = document.querySelector('.selectColor');

// select.addEventListener('change', (event) => {
//         select.style.background = event.target.value
// });

const selectColor = document.querySelector('.selectColor');
const btnApplyColor = document.querySelector('.btnApplyColor');

// TASK: define function changeBodyColor()
// which takes 1 parameter: color and changes the body background color with the given one
// Note, that the function will be called as callback, by the addEventListener()

// ---> YOUR CODE HERE <---


function changeBodyColor(color){
    if (document.getElementById(selectColor).value = "red";){
    document.body.style.background  = "red" ;
}
}

// DO NOT CHANGE:
let selectedColor;
selectColor.addEventListener('change', function () {
	selectedColor = selectColor.value;
})

btnApplyColor.addEventListener('click', changeBodyColor(selectedColor) );