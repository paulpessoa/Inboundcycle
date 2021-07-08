//show current year
const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

//show "thanks popup"
const myForm = document.getElementById("book-form");
myForm.addEventListener ("submit", (e) => {
    e.preventDefault();
    $("#BlockUIConfirm").fadeIn();
});

//close / hide "thanks popup"
function Submit() {
    $("#BlockUIConfirm").fadeOut();
}
