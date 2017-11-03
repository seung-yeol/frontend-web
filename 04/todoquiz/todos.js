//start...

var work = document.getElementById("work");
var list = document.getElementById("list");

work.addEventListener('keydown', function (event){
  if (event.keyCode == 13) {
      console.log('과연');
      var str = work.value;
      if (str === "") {
        return;
      }
      else {
        var listChild = document.createElement("li");
        var deleteBtn = document.createElement("button");
        num++;

        listChild.innerHTML =
            "<input type='checkbox' class='toggle-checked'>"+
            "<span class='text'>"+ str +"</span>";
        listChild.appendChild(deleteBtn);

        deleteBtn.classList.add("delete")
        deleteBtn.innerHTML = "x";
        deleteBtn.addEventListener("click", function(){
          listChild.remove();

        });

        list.appendChild(listChild);

        work.value = "";
      }
  }
})
