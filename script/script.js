

var button = document.getElementsByClassName("buttonchoose");
var containerleft = document.getElementsByClassName("left_container")[0];
var cont = document.getElementsByClassName("cont");
var buttonback = document.getElementById('buttonback');



cont[cont.length-1].style.display = 'block';

for(let i = 0; i<button.length ; i++){
	button[i].addEventListener("click", function(){
    	onClick(i);
	});
}

buttonback.addEventListener("click", function(){
    onClick(-1);
});


let curchoose = -1;



function onClick(x) {
	let prev = curchoose;
  	curchoose=x;
  	containerleft.style.flex='70%'
  	
	if(curchoose==-1){
		containerleft.style.flex='20%';
		buttonback.style.opacity= '0';
		button[prev].style.backgroundColor = '#423144';
		cont[prev].style.display = 'none';
		cont[cont.length-1].style.display = 'block';
    	containerleft.style.backgroundImage='url(img/push.png)';
		
	}else{
		buttonback.style.display= 'inline-block';
		buttonback.style.opacity= '1.0';
		console.log("in");
		button[curchoose].style.backgroundColor = '#CF1B1B';
		if(prev==-1){
			window.setTimeout(function () {
				containerleft.style.backgroundImage='none';
				cont[cont.length-1].style.display = 'none';
				cont[curchoose].style.display='block';
	    		
			}, 1000);
		}
		else{
	  		
			cont[curchoose].style.display='block';
			button[prev].style.backgroundColor = '#423144';
			cont[prev].style.display='none';
  		}
	}
}


containerleft.addEventListener("mouseover",HoverFunc);
containerleft.addEventListener("mouseleave",HoverFuncB);

function HoverFunc(){

	if(curchoose==-1){
		console.log('a');
		containerleft.style.flex='50%';
	}
}

function HoverFuncB(){

	if(curchoose==-1){
		console.log('a');
		containerleft.style.flex='20%';
	}
}


