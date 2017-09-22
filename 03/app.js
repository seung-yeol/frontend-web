// var log = document.getElementById('log');
//
//
// // console.log(log);
// // log.innerHTML = '안녕';
//
// //
// var log = document.querySelectorAll('#log a')
//
// console.log(log);
//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// document.body.appendChild(div);
//
// window.onload = function(){
//   alert("load")
// };
//
// window.addEventListener('load', function(){
//   alert("mamamamamam");
// });
//
// var log = document.getElementById('log');
//
//
// var nonAnonymous = function(event){
//   console.log('log!!');
//
// }
// // log.addEventListener('click',function(){
// //   console.log('log click');
// // })
// log.addEventListener('click', nonAnonymous);

// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("Dom요소가 모두 로딩이 되었습니다");
// });

var divs = document.querySelectorAll('#wrap div');

function changeBg(event){
  console.log('changeBg');
  event.currentTarget.style.backgroundColor = 'blue';
}

for (var i = 0 ; i < divs.length ; i++) {
  console.log('뭔데');
  divs[i].addEventListener('click',changeBg)
}
