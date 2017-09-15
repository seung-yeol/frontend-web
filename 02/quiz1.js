
var sum = 0;
var mul = 0;

var quiz1 = function(){
  console.log("1~100 출력");
  for (var i = 1; i < 101; i++) {
    console.log(i);
  }
}

var quiz2 = function(){
  console.log("홀수만 출력");
  for (var i = 1; i < 101; i+=2) {
    console.log(i);
  }
}

var quiz3 = function(){
  console.log("구구단 출력");
  for (var i = 2; i < 10; i++) {
    for (var j = 2; j < 10; j++) {
      mul = i * j;
      console.log( i + " x " + j +" = " + mul);
    }
  }
}
