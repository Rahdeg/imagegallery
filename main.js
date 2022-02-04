let overlay= document.querySelector(".overlay");
let midpictures= document.querySelector(".midpix");
let displayedImage= document.querySelector(".displayimages");
let btn= document.querySelector("button");

// loping through image
for (let i = 1; i <= 5; i++) {
	let imgs= document.createElement("img");
	imgs.setAttribute("src", "images/pic" + i + ".jpg");
	midpictures.appendChild(imgs);
	imgs.onclick=(e)=>{
		displayedImage.src=e.target.src;	
	}
}

// lighten and darken

btn.onclick=()=>{
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
