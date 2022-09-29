if(typeof jQuery == "function"){
    // 한 페이지에 레이어팝업을 하나만 띄우기 위해서
    // html 에 하나만 넣어 두는 것
    // 만약 여러개 띄워야 한다면 
    // 띄울 때마다 html이 추가되어야 함
    jQuery(function () {
        if($(".popup_wrap4").length === 0) {
            LayerPopUp.initHtml();
        }
    });

    // ajax 실행 시, 끝날 시 
    // $(document).ajaxStart(function () {
    //     LodingImg.start();
    // })
    // $(document).ajaxStop(function () {
    //     LodingImg.stop();
    // })
}
// loading 방법2
// 이 방법 선택 시 html 안에 소스는 불필요함. loadingHtml 안에서 써줌
LodingImg = {
    loadingHtml: function () {
        return "<div class=\"loading display_none\">로딩 중.....</div>";
    },
    start: function (targetSelector) {
        // $(".loading").css({display:'block'});

        // 로딩 보여줄 곳 선택
        let el_target = $(targetSelector);
        // 로딩 보여줄 곳 안에 로딩 html 넣기
        el_target.append(this.loadingHtml());
        // 부모의 position 을 찾기
        let target_pos = el_target.css('position');
        // 부모의 포지션이 기본 값이면
        if (target_pos === 'static') {
            // 부모를 relative 로 변경 해서 팝업이 잘 나오도록 함
            // 참고로 fixed 값은 화면기준이고 absolute는 부모의 영향을 받음
            el_target.css({position: 'relative'});
        }
        // display_none 클래스를 삭제 해서 로딩 노출
        $(".loading").removeClass('display_none');
    },
    stop: function (targetSelector) {
        // $(".loading").css({display:'none'});

        let load = $(".loading");
        // display_none 클래스를 추가해서 안보여줌
        load.addClass('display_none');
        // 삭제
        load.remove();
    }
}

// layer pupup
LayerPopUp = {
    /**
     * 레이어팝업 html 만들어서 body에 넣을꺼임
     */
    initHtml : function () {
        let LayerHtml= "" + "<div class=\"popup_wrap4 display_none\">"
            + "<div class=\"popup_active4\"></div>"
            + "<button id=\"close_btn4\">닫기</button></div>";
        $("body").append(LayerHtml);
        $("#close_btn4").on('click', function (e) {
            $(".popup_wrap4").addClass("display_none");
            e.preventDefault();
        })
    },
    alert : function (inHtml) {
        $(".popup_active4").html(inHtml);
        $(".popup_wrap4").removeClass('display_none');
    },
}