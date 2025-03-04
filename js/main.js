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

//fadein
$(function () {
  $(".fadein").on("inview", function () {
    $(this).addClass("inview");
  });
});

// プロダクトのタブ切り替え
$(function () {
  $(".tab-list .tab-all").addClass("active");
  $(".products-list all").addClass("active");

  $(".tab-all").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.all").addClass("active");
  });

  $(".tab-sofa").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.sofa").addClass("active");
  });

  $(".tab-desk").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.desk").addClass("active");
  });

  $(".tab-chair").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.chair").addClass("active");
  });

  $(".tab-dining").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.dining").addClass("active");
  });
});
