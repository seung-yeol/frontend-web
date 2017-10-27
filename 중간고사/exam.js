var trending = 0;
var issue = 1;

var tab = document.querySelector('.nav');
var tabs = tab.querySelectorAll('li');
var active = tab.querySelector('.active');
var listDiv = document.getElementById('list');
var listParent = document.createElement('div');
var listAdder = document.querySelector('.btn');
var loading = document.querySelector('.glyphicon');

var urlHeader = "http://1boon.kakao.com/ch/";
var urlFooter = ".json?pagesize=10&callback=done&page=";
var pageNum = 1;
var tabNum = 0;

function load(){
  //로드시 로딩중!
  loading.classList.add('glyphicon-refresh');
  loading.innerHTML = ' 로딩중';

  if ( tabNum === trending) {
    getJSON( urlCreate('trending'), done)
  }
  else if ( tabNum === issue) {
    getJSON( urlCreate('issue'), done)
  }
  else {
    getJSON( urlCreate('enter'), done)
  }
}

load();

function urlCreate(str){
  return urlHeader + str + urlFooter + pageNum;
}
//트렌딩, 이슈, 엔터 탭설정.
for (var i = 0; i < tabs.length; i++) {
  const tabI = i;

  //탭 클릭시 active클래스 이동.
  tabs[i].addEventListener('click', function(){
    if ( this.classList.contains('active')) {
      return;
    }
    pageNum = 1;
    tabNum = tabI;

    listParent.innerHTML = '';
    load();

    this.classList.remove( 'inactive');
    this.classList.add( 'active');
    active.classList.remove( 'active');
    active.classList.add( 'inactive');

    tmp = active;
    active = this;
  } );
}

//더보기 클릭시 리스트추가
listAdder.addEventListener('click', function(){
  pageNum++;
  load();
});

//jsonp모듈에서 읽어온 데이터처리.
function done(result){
  //리스트에 넣고 띄워줌
  for (var i = 0; i < result.data.length; i++) {
    var title = result.data[i].title;
    var img = result.data[i].coverImage;
    var path = result.data[i].path;
    var totalView = result.data[i].totalView;
    var listChild = document.createElement('div');

    listChild.classList.add('listChild');
    listChild.innerHTML += '<h5>'+ title +'</h5>'
    listChild.innerHTML += '<a href = http://1boon.kakao.com/'+path+'><img id = "img" src ='+ img +' ></a>'
    listChild.innerHTML += '<h6> 조회수 : '+ totalView +'</h6>'

    //마지막 리스트 로딩완료시 로딩중 지우기!
    if (i === result.data.length-1) {
      listChild.addEventListener('DOMContentLoaded', listLoaded(), false);
    }

    listParent.appendChild(listChild);
    listDiv.appendChild(listParent);
  }
}

var listLoaded = function (){
  console.log('로딩완료');
  //로딩이 너무 빨리 끝나버려서 일부러 더 길게 했습니다.
  setTimeout( function(){
    loading.classList.remove('glyphicon-refresh');
    loading.innerHTML = '';
  }, 500);
}
