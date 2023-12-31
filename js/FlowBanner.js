// 셀럽픽섹션
$(window).on('load', function() {
    setFlowBanner();
})

function setFlowBanner() {
    const $wrap = $('.flow_CELEBRITY');
    const $list = $('.flow_CELEBRITY .list');
    let wrapWidth = $wrap.width();
    let listWidth = $list.width();
    const speed = 50; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct()

    //배너 실행 함수
    function flowBannerAct() {
        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil(wrapWidth * 2 / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $clone.clone();
                $wrap.append($clone);
            }
        }
        $wrap.find('.list').css({
            'animation': `${listWidth / speed}s linear infinite flowRolling`
        });
    }

    // 마우스가 요소 위로 진입했을 때 일시정지
    $wrap.on('mouseenter', function () {
        $wrap.find('.list').css('animation-play-state', 'paused');
    });

    // 마우스가 요소에서 빠져나갈 때 재생
    $wrap.on('mouseleave', function () {
        $wrap.find('.list').css('animation-play-state', 'running');
    });
}


// 메인섹션3이미지전환효과
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

