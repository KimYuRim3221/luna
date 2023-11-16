//마우스커서
$(document).ready(function(){
    
        $(document).mousemove(function(e){
            var mouseX = e.pageX;
            var mouseY = e.pageY;
    
            $('.cursor').css({
                left: mouseX + "px",
                top : mouseY + "px"
            })
        })
    })

// gnb
const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
        header.classList.add('active');
  } else {
        header.classList.remove('active');
  }
});

//서브메뉴
$(function(){
        $(".submenu").hide()
        $(".nav").mouseenter(function(){
            $(".submenu").stop().slideDown()
        });
        $(".nav").mouseleave(function(){
            $(".submenu").stop().slideUp()
        });
    });

// 섹션3이미지전환효과
$(function(){
    $("#button1").click(function(){

            $(".img1").fadeIn().siblings().fadeOut();
    });	
    $("#button2").click(function(){

            $(".img2").fadeIn().siblings().fadeOut();
    });	
    $("#button3").click(function(){

            $(".img3").fadeIn().siblings().fadeOut();
    });	
    $("#button4").click(function(){

            $(".img4").fadeIn().siblings().fadeOut();
    });	
});



        
// 팝업창

$(function(){
    $("#popup_wrap").hide()
    // 팝업창을 숨겨라(display:none)
    $("#popup_open").click(function(){
        $("#popup_wrap").fadeIn(0)
        // 팝업오픈창을 클릭하면 팝업을 나타내라
    });
    $("#close_popup").click(function(){
        $("#popup_wrap").fadeOut(0)
        // 닫기버튼을 클릭하면 팝업을 닫아라
    });
});

// 기본명령 구조! 
//시작 :  $(function(){명령입력자리});
//function : ~해라
//명령입력자리 기본구조 : $("명령할대상").명령어()