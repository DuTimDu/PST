// JavaScript source code
var imgnum = 0;
var imageliste = [
	"PAIRSE1.png",
	"PAIRSE2.jpg",
	"PAIRSE3.jpg",
	"PAIRSE4.jpg",

	"PAIRSE5.jpg",
	"PAIRSE6.jpg",
	"PAIRSE7.jpg",
	"PAIRSE8.jpg",

	"PAIRSE9.jpg",
	"PAIRSE10.jpg",
	"PAIRSE11.jpg",
	"PAIRSE12.jpg"
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