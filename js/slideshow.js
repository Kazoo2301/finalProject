
function changeImage(n, id) {
  if (id == 'one'){
	showImage(slideIndex += n, id);
  }
  else{
	console.log('here')
	showImage2(slideIndex2 += n, id);
  }
}

function showImage(n, id) {
  var i;
  var x = document.getElementsByClassName(id);
  if(n == x.length){
	slideIndex = 0
  }
  if(n < 0){
	slideIndex = x.length - 2
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  console.log(slideIndex)
  x[slideIndex].style.display = "block";
  if(slideIndex + 1 == x.length){
	slideIndex = 0
	x[slideIndex].style.display = "block";
  }
  else{
	x[slideIndex += 1].style.display = "block";
  }
  console.log(slideIndex)
  console.log("end")
}

function showImage2(n, id) {
	var i;
	var x = document.getElementsByClassName(id);
	if(n == x.length){
	  slideIndex2 = 0
	}
	if(n < 0){
	  slideIndex2 = x.length - 2
	}
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	console.log(slideIndex2)
	x[slideIndex2].style.display = "block";
	if(slideIndex2 + 1 == x.length){
	  slideIndex2 = 0
	  x[slideIndex2].style.display = "block";
	}
	else{
	  x[slideIndex2 += 1].style.display = "block";
	}
	console.log(slideIndex2)
	console.log("end")
  }


var slideIndex = -1;
var slideIndex2 = -1;
changeImage(1, 'one');
console.log("gap")
changeImage(1, 'leftover');