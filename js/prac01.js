// $(document).ready(function (){
// });

// prototype 이라는 js 기본문법에 $를 사용하는 것이 있음.
// 제이쿼리 $와 구분하기 위해 사용
if(typeof jQuery == "function"){
    jQuery(function (){
        console.log('document ready')

        // Input CheckBox or Radio Box
        let btnALL = $(".btnALL");
        let btnA = $(".btnA");
        let btnB = $(".btnB");

        btnALL.on('click',function (){
            let obj = {checked:true};
            $("input[name='alphabet']").attr(obj).prop(obj);
        });

        btnA.on('click',function (){
            let checkBoxState = $("#A").is(":checked");
            checkBoxState = checkBoxState === true ? false : true;
            let obj = {checked:checkBoxState};
            //$("input[name='alphabet']").eq(1).attr(obj).prop(obj);
            $("#A").attr(obj).prop(obj);
        });

        btnB.on('click',function (){
            let checkBoxState = $("#B").is(":checked");
            checkBoxState = checkBoxState === true ? false : true;
            let obj = {checked:checkBoxState};
            //$("input[name='alphabet']").eq(2).attr(obj).prop(obj);
            $("#B").attr(obj).prop(obj);
        });

        // button 클릭 시 '2'으로 select 변경되도록
        let btnSelect = $(".btnSelect");
        btnSelect.on('click', function(){
            let obj = {selected:true};
            $("#SelectList").val("2").prop(obj);
        });

        // select 변경 시 아래 컨텐츠 보여주기
        let selectList2 = $("#SelectList2");
        selectList2.on('change', function (){
            let selectList2Value = selectList2.val();
            $("#SelectList2Text").val(selectList2Value);
        });

        // check box all click control
        $("input[name='numAll']").on('change', function (){
            let checkBoxState = $("input[name='numAll']").is(":checked");
            let obj = {checked:checkBoxState};
            let checkBox = $("input[name='num']").attr(obj).prop(obj);
        });
        $("input[name='num']").on('change', function (){
            let checkBoxAllCnt =  $("input[name='num']").length;
            let checkBoxCheckedCnt = $("input[name='num']:checked").length;
            let obj = checkBoxAllCnt === checkBoxCheckedCnt ? {checked:true} : {checked:false};
            $("#numAll").attr(obj).prop(obj);
        });

        // 컨텐츠 show & close
        $("#hide").on('click',function(){
            $("p").hide();
        });
        $("#show").on('click',function(){
            $("p").show();
        });

        // loading 방법1
        $("#loadingStart").on('click',function(){
            $(".loading").css({display:'block'});
            setTimeout(function (){
                $(".loading").css({display:'none'});
            },2000);
        });
        $("#loadingStop").on('click',function(){
            $(".loading").css({display:'none'});
        });

        // 포지션 그려보기
        $("#btnFullLoding").on('click',function(){
            $(".fullLoding").css({display:'block'});
            $(".fullLoding").slideUp().slideDown();
        });
        $("#btnSmallLoding").on('click',function(){
            $(".smallLoding").css({display:'block'});
        });
    });
}
