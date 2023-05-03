/*jshint esnext: true */
/* navigation */
$("#toggler").click(()=>{
  $("#toggler img:first-child").toggleClass("hidden");
  $("#toggler img:last-child").toggleClass("hidden");
  $("#menu").toggleClass("-translate-y-[calc(100%+43px)]");
  $("#nav").toggleClass("border-b");
  $("#nav").toggleClass("pb-px");
});


/* dropdowns */
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
$(".funds").each((i,el) => { 
  let list =  $(el).find('.funds-list');
  let img = $(el).find('.funds-img');
  let funds = $(el).find('.funds-toggler');
  funds.click(() => {
    list.slideToggle(500);
    img.toggleClass("rotate-180");
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
$(".uploading").each((i,el) => { 
  let uploading_file = $(el).find(".file");
  let p_files = $(el).find(".files");
  uploading_file.change(()=>{
    for (let i = 0; i < uploading_file[0].files.length; i++) {
      let j = uploading_file[0].files[i].name;
      m.push(j);
      let str = m.join(", ");
      p_files.html(`Выбранные файлы: ${str}`);  
      p_files.removeClass("hidden");
    }
    m = []; 
  });
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


/* tabs */
$( function() {
  $( "#tabs-work").tabs();  
  $( "#tabs-profile").tabs();
} );


/* counter */
$(".counter").each((i,el) => { 
  let plus = $(el).find(".counter-up");
  let minus = $(el).find(".counter-down");
  let text = $(el).find(".counter-text");
  let val = text.val();
  plus.click (function(){
    val++;
    text.val(val);
  });
  minus.click (function(){
    if(val!=0){
      val--;
      text.val(val);
    }
  });
});