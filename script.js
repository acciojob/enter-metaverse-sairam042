let para = document.getElementById("status");
let button = document.getElementById("enterBtn");

button.addEventListener("click",function(){
	const h1Tag = document.createElement("h1");
	h1Tag.textContent = 'Entered Metaverse';
	para.parentNode.replaceChild(h1Tag,para);
});
