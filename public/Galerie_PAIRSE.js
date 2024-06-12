// JavaScript source code
var imgnum = 0;
var imageliste = [
	"PAIRSE1.png",
	"PAIRSE2.png",
	"PAIRSE3.png",
	"PAIRSE4.png",

	"PAIRSE5.png",
	"PAIRSE6.png",
	"PAIRSE7.png",
	"PAIRSE8.png",

	"PAIRSE9.png",
	"PAIRSE10.png",
	"PAIRSE11.png",
	"PAIRSE12.png"
]
function imagesuiv() {
	if (imgnum == imageliste.length - 1) {
		alert("VOUS ETES AU BOUT DE LA GALERIE DES PROJETS");
		imgnum -= 1
	}
	imgnum += 1
	document.getElementById("galerie").src = imageliste[imgnum]
	var p = document.getElementById("para");
	p.innerHTML = imgnum+1;
} function imageprece() {
	if (imgnum == 0) {
		alert("VOUS ETES AU BOUT DE LA GALERIE DES PROJETS");
		imgnum += 1
	}
	imgnum -= 1
	document.getElementById("galerie").src = imageliste[imgnum];
	var p = document.getElementById("para");
	p.innerHTML = imgnum+1;
}