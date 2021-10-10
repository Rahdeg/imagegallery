const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (var i = 1; i <= 5; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', "images/pic"+ i +".jpg");
thumbBar.appendChild(newImage);
newImage.onclick=function (e) {
	displayedImage.src=e.target.src;
}
}


/* Wiring up the Darken/Lighten button */
btn.onclick=function () {
	let btnClass=btn.getAttribute("class");
if (btnClass==="dark") {
	btn.setAttribute("class","light");
	btn.textContent="lighten";
	overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}else{
	btn.setAttribute("class","dark");
	btn.textContent="Darken";
	overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
}