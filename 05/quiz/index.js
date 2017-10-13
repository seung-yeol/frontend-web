var back = document.getElementById('back');
var more = document.getElementById('more');

var url = "http://movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=3&callback=done&pageNo=";
var str = "";
var pageNum = 1;

function done(result){
  console.log('done:', result)

  for (var i = 0; i < result.data.length; i++) {
    console.log(result.data[i].titleKo);

    str += '<h2>'+ result.data[i].titleKo+'</h2>'
    str += '<img src ='+ result.data[i].photo.fullname+' width="100">'

  }
  back.innerHTML = str;
}

more.addEventListener('click', function(){
  pageNum++;
  console.log(pageNum);

  var next = url +""+ pageNum;
  getJSON(next, done)
});

var getJSON = (function(){
  var unique = 0;
  return function(url, callback, context) {
    // INIT
    var name = "_jsonp_" + unique++;
    if (url.match(/\?/)) url += "&callback="+name;
    else url += "?callback="+name;

    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Setup handler
    window[name] = function(data){
      callback.call((context || window), data);
      document.getElementsByTagName('head')[0].removeChild(script);
      script = null;
      delete window[name];
    };

    // Load JSON
    document.getElementsByTagName('head')[0].appendChild(script);
  };
})();

getJSON(url, done)
