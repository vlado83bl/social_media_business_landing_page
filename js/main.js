
function openMenu() {
  var element = document.getElementsByClassName("navbar-collapse")[0];
  var element1 = document.getElementsByClassName("navbar-expand-lg")[0];
  if (element) {
      element.classList.remove("show");
      element.classList.toggle("openMenu");
   }

   element1.classList.toggle("shadowMenu");
}

function resMenu() {
  var element = document.getElementsByClassName("sub-menu")[0];
  if (element) {
      element.classList.toggle("resMenu");
   }
}

//tooltip
$(function () {
   $('[data-toggle="tooltip"]').tooltip()
 })




//  $(document).on('click', 'a[href^="#"]', function (event) {
//    event.preventDefault();

//    $('html, body').animate({
//        scrollTop: $($.attr(this, 'href')).offset().top - 100 //Add this
//    }, 300);
// });