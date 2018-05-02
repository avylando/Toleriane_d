/* common */
$(document).ready(function() {
  	// #slide 1, slide 8
    $('input[type="range"]').change(function () {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      var val2 = val * 0.8;
      var val3 = val * 0.01;
      $(this).css('background-image',
          '-webkit-gradient(linear, left top, right top, '
        + 'color-stop(' + val3 + ', #88accb), '
        + 'color-stop(' + val2 + ', #b5d8ee), '
              + 'color-stop(' + val + ', #fff)'
              + ')'
      );

      var value = $(this).val();
      switch(value) {
          case '10': $('.sld1 .range-plus').css('top', '485px').fadeIn(); break;
          case '20': $('.sld1 .range-plus').css('top', '354px').fadeIn(); break;
          case '30': $('.sld1 .range-plus').css('top', '222px').fadeIn(); break;
          case '40': $('.sld1 .range-plus').css('top', '90px').fadeIn(); break;
      }
    });

  // slide 1
  $('.sld1 .range-plus').click(function () {
      $('.sld1 .range-plus').fadeOut(500);
      $('input[type="range"]').fadeOut(500);
      $('.sld1 .scale').fadeOut(500);
  $(".sld1 .t1").fadeOut(500);
  $(".sld1 .t2").fadeIn(500);
      $(".sld1 .logo2").fadeIn(500);
      $(".sld1 .bottle1").fadeIn(500);
  });

  if($('.mask').length>0) {
    $(".mask").mask("8 (999) 999-99-99");
  }
  //$('input, select').styler();
  var ff;
  $('input[type=text]').focus(function() {
    if($(this).attr('data-place')==$(this).val()) {
      $(this).val('');
    }
    $(this).addClass('ac');
  });
  $('input[type=text]').blur(function() {
    if($(this).val()=='') {
      $(this).val($(this).attr('data-place'));
    }
    $(this).removeClass('ac');
  });
  $('textarea').focus(function() {
    if($(this).attr('data-place')==$(this).val()) {
      $(this).val('');
    }
    $(this).addClass('ac');
  });
  $('textarea').blur(function() {
    ff=$(this).attr('data-place');
    if($(this).val().length==0) {
      $(this).val(ff);
    }
    $(this).removeClass('ac');
  });
  $(window).load(function() {
    $('input[type=text]').each(function() {
      $(this).attr('data-place',$(this).val());
    });
    $('textarea').each(function() {
      $(this).attr('data-place',$(this).val());
    });
    $('.sld3').addClass('ac');
    
  });
  var options = {
      useEasing : false, 
      useGrouping : true, 
      separator : '', 
      decimal : '', 
      prefix : '', 
      suffix : '' 
  };
  var options2 = {
      useEasing : false, 
      useGrouping : true, 
      separator : '', 
      decimal : '.', 
      prefix : '', 
      suffix : '' 
  };
  $('.close2,.bg-modal').click(function() {
    $('.modal').fadeOut(300);
    setTimeout(function() {
      $('.modal.m1 .modal-con1').removeClass('ac');
    }, 300);
  });
  $('.lj1').click(function(e) {
    e.preventDefault();
    $('.modal.m1').fadeIn(300);
    setTimeout(function() {
      $('.modal.m1 .modal-con1').addClass('ac');
    }, 300);
  });
  $('.lj2').click(function(e) {
    e.preventDefault();
    $('.modal.m2').fadeIn(300);
  });
  $('.lnk1').click(function(e) {
    e.preventDefault();
    $('.mp1').fadeIn(300);
    setTimeout(function() {
      $('.mp1').addClass('ac');
      new CountUp("y1", 31, 4, 0, 1, options).start();
      new CountUp("y2", 49, 4, 0, 1, options).start();
      new CountUp("y3", 35, 2, 0, 1, options).start();
    }, 300);
  });
  $('.sld2 .mp1 .close1').click(function() {
    $(this).parent().fadeOut(300);
    setTimeout(function() {
      $('.mp1').removeClass('ac');
      $('#y1').text('31');
      $('#y2').text('49');
      $('#y3').text('35');
    }, 300);
  });
  $('.pp1,.pp2').click(function() { //#p4 added
    $('.modal.m3').fadeIn(300);
  });
  $('.lnk2').click(function() {
    $('.mp1').fadeIn(300);
    setTimeout(function() {
      $('.mp1').addClass('ac');
      new CountUp("c1", 6.2, 2.7, 1, 1, options2).start();
      new CountUp("c2", 2.3, 1.7, 1, 1, options2).start();
      new CountUp("c3", 3.3, 0.6, 1, 1, options2).start();
      new CountUp("c4", 2.9, 0.4, 1, 1, options2).start();
      new CountUp("c5", 1.4, 0.1, 1, 1, options2).start();
    }, 300);
  });
  $('.sld3 .mp1 .close1').click(function() {
    $(this).parent().fadeOut(300);
    setTimeout(function() {
      $('.mp1').removeClass('ac');
      $('#c1').text('6.2');
      $('#c2').text('2.3');
      $('#c3').text('3.3');
      $('#c4').text('2.9');
      $('#c5').text('1.4');
    }, 300);
  });
  $('.lnk3').click(function() {
    $('.mp1').fadeIn(300);
    setTimeout(function() {
      $('.mp1').addClass('ac');
    }, 300);
  });
  $('.sld7 .mp1 .close1').click(function() {
    $(this).parent().fadeOut(300);
    setTimeout(function() {
      $('.mp1').removeClass('ac');
    }, 300);
  });
  $('.line-sp1').click(function() {
    $(this).toggleClass('ac');
    $('.con-st1').toggleClass('ac');
  });
  var f1=0;
  $('.ef1').click(function() {
    if(f1==0) {
      f1=1;
      $(this).addClass('ac');
      $('.ef-hd1').addClass('ac');
    }
    else {
      f1=0;
      $(this).removeClass('ac');
      $('.ef-hd1').removeClass('ac');
    }
  });
  $('.open1').click(function() {
    $('.mp-n1').fadeIn(300);
  });
  $('.close-mp-n1').click(function() {
    $('.mp-n1').fadeOut(300);
  });

// page4
  var Al = '-=138'
  var Ar = '-=121'

  var Bl = '-=101'
  var Bc = '-=102'
  var Br = '-=88'
  var slideNow = 'A'

  $('#jsAl2').animate({width: Al}, 700);
  $('#jsAr2').animate({width: Ar}, 700);
  $('#jsNumA1').parent().animate({left: Al}, 700);
  $('#jsNumA2').parent().animate({left: Ar}, 700);

  changeNum($('#jsNumA1'), 37 , 10, 700);
  changeNum($('#jsNumA2'), 8  , 10, 700);

  $('.menubutton4').on('click', function() {
    if ( $(this).hasClass('mb_inactive4') ){
      $('.menubutton4').toggleClass('mb_inactive4');
      $('#showB4, #showA4').fadeToggle(150);

      slideNow = (slideNow==='A')? 'B':'A';

      if(slideNow ==='A'){
        $('#jsAl2').stop().width('261px');
        $('#jsAr2').stop().width('142px');
        $('#jsNumA1').parent().stop().css('left', '261px');
        $('#jsNumA2').parent().stop().css('left', '526px');
        $('#jsNumA1').text('78')
        $('#jsNumA2').text('42')

        setTimeout( function() {
          $('#jsAl2').animate({width: Al}, 700);
          $('#jsAr2').animate({width: Ar}, 700);

          $('#jsNumA1').parent().animate({left: Al}, 700);
          $('#jsNumA2').parent().animate({left: Ar}, 700);

          changeNum($('#jsNumA1'), 37 , 8, 600);
          changeNum($('#jsNumA2'), 8  , 8, 600);
        }, 100);
      } else {
        $('#jsBl2').stop().width('140px');
        $('#jsBc2').stop().width('127px');
        $('#jsBr2').stop().width('106px');
        $('#jsNumB1').parent().stop().css('left', '140px');
        $('#jsNumB2').parent().stop().css('left', '376px');
        $('#jsNumB3').parent().stop().css('left', '603px');
        $('#jsNumB1').text('4.6')
        $('#jsNumB2').text('4.1')
        $('#jsNumB3').text('3.8')

        setTimeout( function() {
          $('#jsBl2').animate({width: Bl}, 700);
          $('#jsBc2').animate({width: Bc}, 700);
          $('#jsBr2').animate({width: Br}, 700);

          $('#jsNumB1').parent().animate({left: Bl}, 700);
          $('#jsNumB2').parent().animate({left: Bc}, 700);
          $('#jsNumB3').parent().animate({left: Br}, 700);

          changeNum($('#jsNumB1'), 1.3, 8, 600, 1);
          changeNum($('#jsNumB2'), 0.9, 8, 600, 1);
          changeNum($('#jsNumB3'), 0.7, 8, 600, 1);
        }, 100);
      };
    };
  })

  $('#p4').click(function() {
    $('.modal.m3').fadeIn();
  });

  // slide 4

  $('#plus4').on('click', function() {
    $('.sld4 .modal-1').fadeIn();
    $('.bluediv').width(0);
    $('#up_left > strong > h2 > span, #up_right > strong > h2 > span').text('0%')

    setTimeout( function(){
      $('#jsl1').animate({width: '135px'}, 675, 'linear', function(){
        $('#jsl2').animate({width: '9px'}, 45, 'linear')
      })
      $('#jsr1').animate({width: '93px'}, 720, 'linear')
    }, 100)

    changeNum($('#up_left  > strong > h2 > span'), 53, 11, 720, 0, '%')
    changeNum($('#up_right > strong > h2 > span'), 33, 11, 720, 0, '%')
  });

  // slide 6

  $('.sld6 .adv .item-1').addClass('item-anim');
  setTimeout(function() {
    $('.sld6 .adv .item-2').addClass('item-anim');
  }, 1000);
  setTimeout(function() {
    $('.sld6 .adv .item-3').addClass('item-anim');
  }, 2000);

  // slide 7

  $('.sld7 .s1 .plus-gel').click(function (){
    $('.sld7 .s1').fadeOut(500);
    $('.sld7 .s2').fadeIn(500);

    setTimeout(function() {
      $('.sld7 .s2 .gel-content .price-1').addClass('price-anim');
      $('.sld7 .s2 .gel-content .price-2').addClass('price-anim');
    }, 500);
    
  });

  $('.sld7 .s2 .minus').click(function (){
    $('.sld7 .s1').fadeIn(500);
    $('.sld7 .s2').fadeOut(500);
  });

});

function changeNum(jqObj, targetNum, frameCount, timeOfAnim, afterZero) {
  
  var frames = frameCount || 10;
  var time = timeOfAnim || 300;
  var fix = afterZero || 0;


  var origNum = parseInt(jqObj.text(), 10);
  var step = (targetNum-origNum)/(frames);

  var slices = [origNum];
  var currentSlice = origNum;

  for (var i=0, len=frames; i<(frames-1); i++){
    currentSlice+=step;
    slices.push(currentSlice.toFixed(fix));
  }
  slices.push(targetNum);

  var n = 0
  var timer = setInterval(function() {
    if (n===slices.length){
      clearInterval(timer)
    } else {
      jqObj.text(slices[n++]);
    }
  }, time/frames)
}

$(function() {
  // Функция написана 21.04.2017
  (function() {
    var btn1 = $("._q__btn_1"),
      btn2 = $("._q__btn_2"),
      btn3 = $("._q__btn_3"),
      btn4 = $("._q__btn_4"),
      btn5 = $("._q__btn_5");

    var rect1 = $("._q_1"),
      rect2 = $("._q_2"),
      rect3 = $("._q_3"),
      rect4 = $("._q_4"),
      rect5 = $("._q_5");

    var img1 = $("._q__btn_1 > ._q_btn_img"),
      img2 = $("._q__btn_2 > ._q_btn_img"),
      img3 = $("._q__btn_3 > ._q_btn_img"),
      img4 = $("._q__btn_4 > ._q_btn_img"),
      img5 = $("._q__btn_5 > ._q_btn_img");

    var trgl1 = $("._q__btn_1 > ._q_oc"),
      trgl2 = $("._q__btn_2 > ._q_oc"),
      trgl3 = $("._q__btn_3 > ._q_oc"),
      trgl4 = $("._q__btn_4 > ._q_oc"),
      trgl5 = $("._q__btn_5 > ._q_oc");

    btn1.on("click", function() {
      rect1.css("display", "block");
      rect2.css("display", "none");
      rect3.css("display", "none");
      rect4.css("display", "none");
      rect5.css("display", "none");

      img1.css("display", "none");
      img2.css("display", "block");
      img3.css("display", "block");
      img4.css("display", "block");
      img5.css("display", "block");

      trgl1.css("display", "block");
      trgl2.css("display", "none");
      trgl3.css("display", "none");
      trgl4.css("display", "none");
      trgl5.css("display", "none");
    });

    btn2.on("click", function() {
      rect1.css("display", "none");
      rect2.css("display", "block");
      rect3.css("display", "none");
      rect4.css("display", "none");
      rect5.css("display", "none");

      img1.css("display", "block");
      img2.css("display", "none");
      img3.css("display", "block");
      img4.css("display", "block");
      img5.css("display", "block");

      trgl1.css("display", "none");
      trgl2.css("display", "block");
      trgl3.css("display", "none");
      trgl4.css("display", "none");
      trgl5.css("display", "none");
    });

    btn3.on("click", function() {
      rect1.css("display", "none");
      rect2.css("display", "none");
      rect3.css("display", "block");
      rect4.css("display", "none");
      rect5.css("display", "none");

      img1.css("display", "block");
      img2.css("display", "block");
      img3.css("display", "none");
      img4.css("display", "block");
      img5.css("display", "block");

      trgl1.css("display", "none");
      trgl2.css("display", "none");
      trgl3.css("display", "block");
      trgl4.css("display", "none");
      trgl5.css("display", "none");
    });

    btn4.on("click", function() {
      rect1.css("display", "none");
      rect2.css("display", "none");
      rect3.css("display", "none");
      rect4.css("display", "block");
      rect5.css("display", "none");

      img1.css("display", "block");
      img2.css("display", "block");
      img3.css("display", "block");
      img4.css("display", "none");
      img5.css("display", "block");

      trgl1.css("display", "none");
      trgl2.css("display", "none");
      trgl3.css("display", "none");
      trgl4.css("display", "block");
      trgl5.css("display", "none");
    });

    btn5.on("click", function() {
      rect1.css("display", "none");
      rect2.css("display", "none");
      rect3.css("display", "none");
      rect4.css("display", "none");
      rect5.css("display", "block");

      img1.css("display", "block");
      img2.css("display", "block");
      img3.css("display", "block");
      img4.css("display", "block");
      img5.css("display", "none");

      trgl1.css("display", "none");
      trgl2.css("display", "none");
      trgl3.css("display", "none");
      trgl4.css("display", "none");
      trgl5.css("display", "block");
    });

    $("._w_btn_pop").on("click", function() {
      $("._w_popap").fadeIn(300);
      $("._w_back_pop").fadeIn(300);
    });

    $("._w_popap > ._w_cls").on("click", function() {
      $("._w_popap").fadeOut(300);
      $("._w_back_pop").fadeOut(300);
    });

    $("._w_back_pop").on("click", function() {
      $("._w_popap").fadeOut(300);
      $("._w_back_pop").fadeOut(300);
    });

    $("._w_btn").on("click", function() {
      $("._w_main").css("display", "none");
      $("._w_minus_btn").css("display", "none");
      $("._w_btn").css("display", "none");

      $("._w_pp1").text("КЛИНИЧЕСКИ ДОКАЗАННАЯ ЭФФЕКТИВНОСТЬ");
      $("._w_pp2").text("ПРИ ДЕРМАТОЗАХ В ПЕРИОРБИТАЛЬНОЙ ОБЛАСТИ");

      $("._w_add").css("display", "block");
      setTimeout(function() {
        $("._w_gr1 > .gr2").animate({"height": "13px"}, 1000);
        $("._w_gr2 > .gr4").animate({"height": "104px"}, 1000);
        setTimeout(function() {
          $("._w_gr1 > .gr2 > span").css("opacity", 1);
          $("._w_gr2 > .gr4 > span").css("opacity", 1);
        }, 300);
      }, 300);
    });

    $("._w_close_btn").on("click", function() {
      $("._w_main").css("display", "flex");
      $("._w_minus_btn").css("display", "block");
      $("._w_btn").css("display", "block");

      $("._w_pp1").text("РЕКОМЕНДАЦИИ ПРИ РАЗЛИЧНЫХ ДЕРМАТОЗАХ ЛИЦА*");
      $("._w_pp2").text("");

      $("._w_add").css("display", "none");
      $("._w_gr1 > .gr2").css("height", "159px");
      $("._w_gr2 > .gr4").css("height", "185px");

      $("._w_gr1 > .gr2 > span").css("opacity", 0);
      $("._w_gr2 > .gr4 > span").css("opacity", 0);
    });

    $("._e_btn").on("click", function() {
      $("._e_bg").fadeIn(300);
      $("._e_popap").fadeIn(300);
    });

    $("._e_bg").on("click", function() {
      $("._e_bg").fadeOut(300);
      $("._e_popap").fadeOut(300);
    });

    $("._e_cls_pop").on("click", function() {
      $("._e_bg").fadeOut(300);
      $("._e_popap").fadeOut(300);
    });
  })();
});