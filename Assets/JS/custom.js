/*jshint esnext: true */
/* navigation */
$("#toggler").click(()=>{
  $("#toggler img:first-child").toggleClass("hidden");
  $("#toggler img:last-child").toggleClass("hidden");
  $("#menu").toggleClass("-translate-y-[calc(100%+43px)]");
});



/* dropdown */
let list = $('.dropdown-list');
let img = $('.dropdown-img');
let dropdown = $('.dropdown-toggler');
dropdown.click(function(e) {
  e.preventDefault();
  list.slideToggle(500);
  img.toggleClass("rotate-180");
  dropdown.toggleClass("border-b");
  dropdown.toggleClass("pb-2");
});
