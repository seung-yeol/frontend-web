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

for(var count=0; count < 5; count++){
    console.log(count);
}

var obj = {a:1,b:2};
//foreach랑 비슷한데 느려서 비권장
for(var prop in obj){
    console.log(prop, obj[prop]);
}
for (variable of iterable) {

}
for (var variable in object) {
  if (object.hasOwnProperty(variable)) {

  }
}
