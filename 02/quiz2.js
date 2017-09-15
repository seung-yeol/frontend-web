var sum = 0;

function start(){
  var who = prompt("더할값 적어줘요");

  if (who == null) {
    sumPrint();
  }
  sum += parseInt(who,10);
}

var id = setInterval(start, 100);

var sumPrint = function(){
  prompt(sum)
  clearInterval(id);
}
