function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
      alert("Please enter a task!");
      return;
    }
  
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
  
    document.getElementById("taskInput").value = "";
  
    li.onclick = function() {
      this.classList.toggle("completed");
    };
  
    li.ondblclick = function() {
      this.remove();
    };
  }
  
  function clearTasks() {
    var ul = document.getElementById("taskList");
    ul.innerHTML = "";
  }
  
  function togglePriority() {
    var taskList = document.getElementById("taskList");
    var lis = taskList.getElementsByTagName("li");
  
    for (var i = 0; i < lis.length; i++) {
      lis[i].onclick = function() {
        this.classList.toggle("priority");
        taskList.prepend(this); // Move the task to the top
      };
    }
  }
  