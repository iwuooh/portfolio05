$(function(){
  //script 입력영역

  /*script 영역 아코디언 만들기 예*/
  $("dd:not(:first)").css("display","none");
  $("dl dt").click(function(){
    if($("+dd",this).css("display") == "none"){//dt바로 뒤에오는 dd를 선택
     $("dd").slideUp("slow");// animation 종료후 display가 none이됨. 열려있는 첫번쨰 dd를 닫아줌.
     $("+dd",this).slideDown("slow");
    }
  });

});
