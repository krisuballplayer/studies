function check() {
    var check = document.getElementById("muu");
    var teksti = document.getElementById("muu2");

    if(check.checked == true) {
        teksti.style.display="block";
    } else {
        teksti.style.display="none";
    }

  }