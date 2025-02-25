// // navのドロップダウンメニュー
// $(function () {
//   $(".nav .menu .menu-first span").click(function () {
//     $(this).next().slideToggle();
//   });

//   $(".nav .menu .menu-second").click(function () {
//     $(this).slideToggle();
//   });
// });

//ハンバーガーメニュー
$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".header .nav").toggleClass("active");
    $(".header .mask").toggleClass("active");
  });

  $(".nav a").click(function () {
    $(".hamburger").removeClass("active");
    $(".header .nav").removeClass("active");
    $(".header .mask").removeClass("active");
  });

  $(".mask").click(function () {
    $(".hamburger").removeClass("active");
    $(".header .nav").removeClass("active");
    $(".header .mask").removeClass("active");
  });

  $(".nav .menu .menu-first").click(function () {
    $(this).toggleClass("active");
    $(".nav .menu .menu-first span").next().slideToggle();
  });

  $(".nav .menu .menu-second").click(function () {
    $(this).prev().toggleClass("active");
    $(this).slideToggle();
  });
});
