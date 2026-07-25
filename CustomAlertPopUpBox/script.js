const clcickButton = document.querySelector(".btn");
const popUpBox = document.querySelector(".pop_Up_Box");
const cancelbtn1 = document.querySelector(".btn1");
const cancelbtn2 = document.querySelector(".btn2");
const deletePopUp = document.querySelector(".delete_pop_up");
const deleteBtn = document.querySelector(".deleteBtn");
const crossup = document.querySelector('.cross-up');

clcickButton.addEventListener("click", active);

cancelbtn1.addEventListener("click", cancel);
cancelbtn2.addEventListener("click", deleteAccount);
deleteBtn.addEventListener("click", success);
crossup.addEventListener("click", cancelcross);
function active() {
    popUpBox.classList.add("pop_Up_Box_op1");
}
function cancel() {
    popUpBox.classList.remove("pop_Up_Box_op1");
}
function deleteAccount() {
    deletePopUp.classList.add("delete_pop_uppo");
}
function success() {
    popUpBox.classList.remove("pop_Up_Box_op1");
    deletePopUp.classList.remove("delete_pop_uppo");
    clcickButton.innerHTML = "Accout Deleted";

}
function cancelcross() {
    deletePopUp.classList.remove("delete_pop_uppo");

}
