// ドロワー
jQuery('.c-drawer-icon').on('click', function (e) {
    // aタグをクリックしてもページ遷移が起きないようにする
    e.preventDefault();

    // アイコンの処理
    jQuery(".c-drawer-icon").toggleClass("c-drawer-icon--open");
    // コンテントの処理
    jQuery(".c-drawer-content").toggleClass("c-drawer-content--open");
    // 背景色の処理
    jQuery('.c-drawer-background').toggleClass('c-drawer-background--open');
    return false;
});
jQuery('.c-drawer-content__link').on('click', function () {
    // アイコンの処理
    jQuery(".c-drawer-icon").removeClass("c-drawer-icon--open");
    // コンテントの処理
    jQuery(".c-drawer-content").removeClass("c-drawer-content--open");
    // 背景色の処理
    jQuery('.c-drawer-background').removeClass('c-drawer-background--open');
});

// ページ内遷移
jQuery('a[href^="#"]').on('click', function () {
    var id = jQuery(this).attr('href');
    var position = jQuery(id).offset().top;
    jQuery('html,body').animate({
        // padding-top分引く
        scrollTop: position 
    },
        300);
});



//ヘッダーの高さ分だけコンテンツを下げる
$(function () {
    var height = $("#js-header").height();
    $("body").css("margin-top", height);
});

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    initialSlide: 3,
    loop: true,
    spaceBetween: 60,
    slideToClickedSlide: true,
    centeredSlides: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});


// スクロール時のイベント
$(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $('.u-fadeIn').each(function () {
        // スクロールした距離
        let scroll = $(window).scrollTop();
        // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();
        // fadeinクラスの要素が画面下にきてから200px通過した
        // したタイミングで要素を表示
        if (scroll > target - windowHeight + 200) {
            $(this).css('opacity', '1');
            $(this).css('transform', 'translateY(0)');
        }
    });
});