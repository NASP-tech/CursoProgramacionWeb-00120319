/**
 * const sButtonFun = () => {
    console.log("Me clickeaste wey! ")
}
 * */

//Para guardalos debo crear una variable 

const switchButton = document.querySelector("#switch-button");
const topButton = document.querySelector("#top-button");

const oClickSB = function () {
    console.log("Click a SB")
}

switchButton.addEventListener("click", onClickSB);