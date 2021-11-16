

var button = document.getElementsByClassName("buttonchoose");
var containerleft = document.getElementsByClassName("left_container")[0];
var cont = document.getElementsByClassName("cont");
var buttonback = document.getElementById('buttonback');
console.log(button);





for(let i = 0; i<button.length ; i++){
	button[i].addEventListener("click", function(){
    	onClick(i);
	});
}

buttonback.addEventListener("click", function(){
    onClick(-1);
});


let curchoose = -1;

for(let i = 0; i<button.length ; i++){
  	if(curchoose==i){
		button[i].style.backgroundColor = '#CF1B1B';
		containerleft.style.flex='70%'
		cont[i].style.display='block';
  	}else{
  		console.log("a");
  		button[i].style.backgroundColor = '#423144';
  		cont[i].style.display='none';
  			
  	}
}


function onClick(x) {
  	curchoose=x;
  	for(let i = 0; i<button.length ; i++){
  		if(curchoose==i){
			button[i].style.backgroundColor = '#CF1B1B';
			containerleft.style.flex='70%'
			cont[i].style.display='block';
  		}else{
  			button[i].style.backgroundColor = '#423144';
  			cont[i].style.display='none';
  			
  		}
	}
	if(curchoose==-1){
		containerleft.style.flex='20%'
		buttonback.style.opacity= '0';
		cont[cont.length-1].style.display = 'block';
	}else{
		buttonback.style.display= 'inline-block';
		buttonback.style.opacity= '1.0';
		console.log("in");
		cont[cont.length-1].style.display = 'none';

	}
}