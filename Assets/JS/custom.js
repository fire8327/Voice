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

/* filters */
$("#filters").click(()=>{
  $("#filt1").toggleClass("hidden");
  $("#filt2").toggleClass("hidden");
  $("#more_filters").slideToggle(500);
});

/* files */
let m = [];
$("#file").change(()=>{
  for (let i = 0; i < $("#file")[0].files.length; i++) {
    let j = $("#file")[0].files[i].name;
    m.push(j);
    let str = m.join(", ");
    $("#files").html(`Выбранные файлы: ${str}`);  
    $("#files").removeClass("hidden");
  }
  m = []; 
});

/* registratiion */
$("#sign").click(()=>{
  $("#reg").show(500);
  $("#overlay_reg").show(500);
  $("body").toggleClass("overflow-hidden");
});
$("#close_reg, #overlay_reg").click(()=>{
  $("#reg").hide(500);
  $("#overlay_reg").hide(500);
  $("body").toggleClass("overflow-hidden");
});

