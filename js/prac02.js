if(typeof jQuery == "function"){
    jQuery(function () {
        // popup
        $(".layer_btn").on('click', function(e){
            //방법1
            $(".layer_pop_wrap").toggleClass('display_none');
            //방법2
            // $(".layer_pop_wrap").css({display:'block'});
            e.preventDefault();
        });
        // popup2
        $(".layer_btn2").on('click', function(e){
            $(".popup_bg").toggleClass('display_none');
            e.preventDefault();
        });
        $("#close_btn2").on('click', function(e){
            $(".popup_bg").toggleClass('display_none');
            e.preventDefault();
        });
        // popup3
        $(".layer_btn3").on('click', function(e){
            // $(".popup_bg3").toggleClass('display_none');
            $(".popup_wrap3").toggleClass('display_none');
            e.preventDefault();
        });
        $("#close_btn3").on('click', function(e){
            $(".popup_wrap3").toggleClass('display_none');
            e.preventDefault();
        });

        $(".layer_btn4").on('click', function(e){
            LayerPopUp.alert("<h3>제목</h3><p>내용이요</p>");
            e.preventDefault();
        });
    });
}