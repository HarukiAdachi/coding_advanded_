
    const swiper = new Swiper('.swiper', {
    slidesPerView:2,
    spaceBetween:0,
      loop: true,
    
      autoplay: {
      delay: 3000,
      },

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints:{
        780:{
          slidesPerView:2,
        },
        0:{
          slidesPerView:1,
        }
      }
  });
    
    $(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const wScroll = $(window).scrollTop();
            $(".block").each(function () {
                const bPosition = $(this).offset().top;
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("fadeIn");
            }
        });
    });
});


$(function() {
  var scrollPos;//topからのスクロール位置
  $('.open-btn1').click(function() { //ボタンをクリックしたら

    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $('.p-sp-nav-bg').toggleClass('bg-active');//背景にbg-activeクラスを付与
    $('#sp-g-nav').toggleClass('panel-active');//ナビにpanel-activeクラスを付与
    
    if($(this).hasClass('active')){//もしボタンにactiveクラスが付いていれば
      scrollPos = $(window).scrollTop();//topからのスクロール位置を取得
      $('body').addClass('fixed').css({ top: -scrollPos });//背景固定
      
    }else{//もしボタンにactiveクラスが無ければ
      $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
      $(window).scrollTop(scrollPos);//元の位置までスクロール
    }
  });
  $('.sp-nav-close').click(function() { //背景をクリックしたら
    $('.open-btn1').removeClass('active');//ボタンからactiveクラスを剥奪
    $('#sp-g-nav').removeClass('panel-active');//ナビからpanel-activeクラスを剥奪
    $('.p-sp-nav-bg').removeClass('bg-active');//背景からbg-activeクラスを剥奪
    $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
    $(window).scrollTop(scrollPos);//元の位置までスクロール
  });    
  $(window).keyup(function(e){//キーをクリックして
    if(e.key === "Escape"){//ESCキーだったら
      $('.open-btn1').removeClass('active');//ボタンからactiveクラスを剥奪
      $('#sp-g-nav').removeClass('panel-active');//ナビからpanel-activeクラスを剥奪
      $('.p-sp-nav-bg').removeClass('bg-active');//背景からbg-activeクラスを剥奪
      $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
      $(window).scrollTop(scrollPos);//元の位置までスクロール
    }
  });
});
