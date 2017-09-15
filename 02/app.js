var str = 'hello world';
// var는 자동타입을 변환해줌
console.log(str);

var count = 5;

// 함수를 변수에 넣을 수도 있음.
var log = function(str){
  console.log(str);
}

function log2 (str){
  console.log(str);
}
log(3);
log2(4)

var image = {}; //객체생성.
console.log(3+2);

var isMan = true;
if(isMan){
    console.log('난 남자');
}
// else if ()  {
//
// }
else {
    console.log('난 여자');
}

for(var count=0; count < 2; count++){
    console.log(count);
}

var obj = {a:1,b:2};
//foreach랑 비슷한데 느려서 비권장
for(var prop in obj){
    console.log(prop, obj[prop]);
}


//클래스 생성방법.
var person = {
  "name" : "오승열",
  age : 24, //생략도 가능. 중간에 연산자 같은거 안들어가면
  "area" : "jeju",
  "hobby" :["movie","walk"],
  cry: function(){
    console.log("ㅜㅜ");
  }
};
//객체사용
person.cry();


//가변길이 전달 인자. arguments
function sum(){
  var size = 0;
  for(var i=0; i < arguments.length; i++){
      size += arguments[i];
  }

  console.log(size);
}
sum(1,2,3,4,5,6,7);

parseInt("09", 10); //십진수 항상 두번째 인자 주는 습관


function test(){
    console.log("test()");
}
var id = setTimeout(test, 1000); //1초후 1번실행
var id = setInterval(test, 1000); //1초마다 계속 실행

//clearTimeout(id) ;
//clearInterval(id); 해제방법.
