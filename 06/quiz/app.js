var $body = $(document.body); //자주 사용하기에 캐시되게 변수에 넣어준다
var $top = '';

$top = $('<div>') //div 를 만들고
        .addClass('top') //top className을 주고
        .hide() //처음에는 숨겨둔다
        .click(function () {  // 클릭이 이벤트 할당
          console.log('ff');
          $(window).scrollTop(0);
          // $body.animate({scrollTop: 0}); //animation효과로 scollTop=0으로 이동 요거 잘되던건데 갑자기 맛탱이 감
        })
        .appendTo($body); // body에 top을 넣는다

//윈도우의 스크롤위치로 위로가기 버튼을 보여줘야기에 핸들러 작성
$(window).scroll(function () {

  var y = $(this).scrollTop();

  if (y >= 100) {
    $top.fadeIn();
  }
  else {
    $top.fadeOut();
  }
});


//상관없는건데
var a = false || 1; //하면 a = 1되고
var a = true || 1;  //하면 a = true됨     앞에게 있거나 참이면 앞에거  없거나 false이면 뒤에거
