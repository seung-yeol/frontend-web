console.log('ajax.js');

var btn = document.getElementById('btn');

btn.addEventListener('click', load);

//모듈화
function ajax(url, callback, data, x) {
  try {
    x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    x.open(data ? 'POST' : 'GET', url, 1);
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data)
  } catch (e) {
    window.console && console.log(e);
  }
};

function done(responseText){
  console.log('done', responseText);
}

function load(){
  console.log('load');

  ajax('dummy.json', done)
  // var req = new XMLHttpRequest();
  //
  // req.open('GET', 'dummy.json', true);
  //
  // //console.log(req);
  //
  // req.onreadystatechange = function(){
  //   if (req.readyState === 4) {
  //     if (req.status === 200) {
  //       console.log(req.responseText);
  //     }
  //   }
  // }
  // req.send();
}
