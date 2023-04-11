/*jshint esnext: true */
/* navigation */
$("#toggler").click(()=>{
  $("#toggler img:first-child").toggleClass("hidden");
  $("#toggler img:last-child").toggleClass("hidden");
  $("#menu").toggleClass("-translate-y-[calc(100%+43px)]");
  $("#nav").toggleClass("border-b");
  $("#nav").toggleClass("pb-px");
});



/* dropdown */

$(".dropdown").each((i,el) => { 
  let list =  $(el).find('.dropdown-list');
  let img = $(el).find('.dropdown-img');
  let dropdown = $(el).find('.dropdown-toggler');
  dropdown.click(() => {
    list.slideToggle(500);
    img.toggleClass("rotate-180");
    dropdown.toggleClass("border-b");
    dropdown.toggleClass("pb-2");
  });
});
