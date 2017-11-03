// $('div').css('background-color','blue');
$('div').addClass('blue');

//둘다 같은거
console.log($('img').attr('src'));
// console.log(document.querySelector('img').src);


$('div').html('<h2>dddd</h2>')

console.log($('input').val());


//jquery는 자기자신 리턴되는 메서드가 있음.
//html메서드 같은건 jquery객체를 리턴하지 않아 jquery메서드 이어서 사용못함.
$('ul').addClass('yellow').html('<h2> sdsd </h2>');

//appendTo는 뒤쪽에 붙고
//prependTo는 앞쪽에 붙음
//두가지 방법 사용가능.
$('<div>', {
    text : '난 div 요소',
    addClass : 'border',
    css : {
        "background-color":"#fff"
    }
}).appendTo( $('#box') );

$('<div>').appendTo( $('#box') )
        .text("난 div 요소")
        .addClass("border")
        .css("background-color","#fff");


$('div').animate({
  left:200
}, 1000);

$('#btn').on('click',function() {
  console.log('ㅇㅇ');
  $('div').animate({
    left:500
  }, 1000);
})
//같음
// $('#btn').click(function() {
//
// })




$( "#dataTable tbody tr" ).on( "click", function() {
  console.log( $( this ).text() );
});

// delegate tbody안의 tr을 클릭했을때.
$( "#dataTable tbody" ).on( "click", "tr", function() {
  console.log( $( this ).text() );
});




$('#login').on('click',function(event){
  window.open('http://daum.net','top','width=400px, height=400px');
})

$('span').on('click',function(){
  console.log(1);
})
$('#login').on('click',function(event){
  window.open($(event.currentTarget).attr('href'),'top','width=400px, height=400px');
  event.preventDefault();  // 이렇게 하면 위위의 다음으로 가는게 안됨
  event.stopPropagation(); // 이렇게하면 바로위의 로그 1이 안뜸
  //return false 하면 둘다 실행되는거랑 같은 효과
})
