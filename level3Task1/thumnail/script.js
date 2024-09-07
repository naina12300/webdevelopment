var modal = document.getElementById("modal");
var modalImg = document.getElementById("Image");
var captionText = document.getElementById("caption");
var thumbnails = document.getElementsByClassName("thumbnail");

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src.replace("_thumbnail", "");
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}
