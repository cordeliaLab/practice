if( typeof jQuery == 'function' ){
    jQuery(function($){
        //1번 메뉴
        // $(".btn_a").on('mouseover', function(){
        // 	console.log('mouseover');
        //  $(".detail").removeClass('display_none');
        // });
        // $(".btn_a").on('mouseout', function(){
        // 	console.log('mouseout');
        //  $(".detail").addClass('display_none');
        // });


        $(".btn_a").on('mouseenter', function(){
            // 방법1
            // $(".detail1").removeClass('display_none');
            // 방법2
            // $(this).next('.detail').removeClass('display_none');
            // 방법3
            // let menu_no = $(this).data('menu-no') - 1;
            // $(`.detail`).eq(menu_no).removeClass('display_none');
            // 방법4
            let menuNo = $(this).data("menu-no");
            // let 선택자_1 = ".detail_"+menuNo;
            // let 선택자_2 = `.detail_${menuNo}`;
            $(`.detail_${menuNo}`).removeClass('display_none');
            // let 속성값가져오기 = $(this).attr('menu-test-no');
        });

        $("nav > ul > li").on('mouseleave', function(){
            // 방법1,2
            // $(".detail").addClass('display_none');
            // 방법3
            // let menu_no = $(this).data('menu-no') - 1;
            // $(`.detail:eq(${menu_no})`).addClass('display_none');
            // 방법4
            // let menuNo = $(this).data('menu-no');
            // $(`.detail_${menuNo}`).addClass('display_none');

            let menuNo = $(this).children('.btn_a').data('menu-no');
            $(`.detail_${menuNo}`).addClass('display_none');
        });
    });
}