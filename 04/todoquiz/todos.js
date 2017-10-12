//start...

var work = document.getElementById("work");
var list = document.getElementById("list");


work.addEventListener('keydown', function (event){
  if (event.keyCode == 13) {
      console.log('과연');
      var str = work.value;

      var listChild = document.createElement("li");
      var deleteBtn = document.createElement("button");

      listChild.innerHTML =
          "<input type='checkbox' class='toggle-checked'>"+
          "<span class='text'>"+ str +"</span>";
      listChild.appendChild(deleteBtn);

      deleteBtn.style.float = "right";
      deleteBtn.style.background = "none";
      deleteBtn.style.position = "relative";
      deleteBtn.style.border = "none";
      deleteBtn.style.fontSize = "1em";
      deleteBtn.style.fontWeight = "bold";
      deleteBtn.innerHTML = "x";
      deleteBtn.addEventListener("click", function(){
        listChild.remove();
      });

      list.appendChild(listChild);

      work.value = "";
  }

})
