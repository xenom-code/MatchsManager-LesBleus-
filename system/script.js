function store() {
    window.localStorage.myitems = document.querySelector('#myUL').innerHTML;
}
function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      document.querySelector('#myUL').innerHTML = '<li>Ana , yacine , kiram sghir , kho lotfi</li>';
    }
    else {
      document.querySelector('#myUL').innerHTML = storedValues;
    }
}

getValues();

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
	store();
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
	store();
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please Enter A Team !");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  store();
}

/*(function(){
  
  var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#item'),
	  li = list.querySelectorAll('li');
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(item.value !== ""){
      list.innerHTML += '<li><span>' + item.value + '</span><span class="removeBtn">&times;</span>' + '</li>';
      store();
      item.value = "";
    }
  },false)
  
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
		t.classList.remove('checked');
	}else{
		t.classList.add('checked');
	}
    store();
  },false)
  
  li.forEach((el) => {
	  
  })
  
  var removeBtn = document.querySelectorAll('.removebtn');
  
  removeBtn.forEach((el) => {
	  el.onclick = function(){
		  li[el].removeChild(el);
	  }
	  store();
  })
  
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }
  
  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '<li><span>Ana , yacine , kiram sghir , kho lotfi</span><span class="removeBtn">&times;</span></li>';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();*/