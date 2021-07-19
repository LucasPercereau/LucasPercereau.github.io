window.onload = function(){ 
    // Get the modal
    var modal = document.getElementById("myModal");

    //Get img modal and caption
    var modalImg = document.getElementById("imgModal");
    var captionText = document.getElementById("caption");

    //Get all img and set function
    for (var x = 1; x < 37; x++) {
        img = document.getElementById("img" + x);

        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }
   
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
};

