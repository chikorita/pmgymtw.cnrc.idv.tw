// JavaScript Document

var clientWidth=window.innerWidth
	,number;

number=Math.floor(clientWidth/50);

while(number!=0){
	document.write('<div class="cssImg"><div class="imgHalfAClassB"></div><div class="imgHalfBClassB"></div></div>');
	number-=1;
	}