function opencom() {
  document.getElementById("comment-form-id").style.width = "250px";
  document.getElementById("comment-form-id").style.height = "200px";
  document.getElementById("comment-form-id").style.padding = "10px";  
}

function closecom() {
  document.getElementById("comment-form-id").style.width = "0";
  document.getElementById("comment-form-id").style.height = "0";
  document.getElementById("comment-form-id").style.padding = "0px";
}

window.onscroll = function() {stick2()};

var konten = document.getElementById("konten");
var stickhed = document.getElementById("stikhed");
var sticky = stickhed.offsetTop;

/*function stick() {
	if (window.pageYOffset > sticky) {
    stikhed.classList.add("sticky");
    konten.classList.add("growtop");
  } else {
    stikhed.classList.remove("sticky");
    konten.classList.remove("growtop");
  }
}*/

var sidenav = document.getElementById("sidenav");
var dummy = document.getElementById("dummyid");
var sticky2 = sidenav.offsetTop;

function stick2() {
  if (window.pageYOffset > sticky2) {
    sidenav.classList.add("sticky2");
    dummyid.classList.add("dummy");
  } else {
    sidenav.classList.remove("sticky2");
    dummyid.classList.remove("dummy");
  }
}

function muncul1() {
  document.getElementById("jawaban1").innerHTML = "Perhatikan bahwa banyaknya bilangan pada S=4 4 3 3 2 adalah 5. Jelas bahwa n=5≥1. Tampak pula bahwa S tidak memuat bilangan yang lebih dari 4 dan tidak semua bilangannya 0, serta tidak ada bilangan negatif. S sudah terurut berupa bilangan monoton turun sehingga langkah selanjutnya adalah sebagai berikut.<br>S=4 4 3 3 2<br>(Eksekusi 4 dan kurangi 4 bilangan disampingnya dengan 1)<br>S1=3 2 2 1<br>(Eksekusi 3 dan kurangi 3 bilangan disampingnya dengan 1)<br>S2=1 1 0<br>(Eksekusi 1 dan kurangi 1 bilangan disampingnya dengan 1)<br>S3=0 0<br>Tampak bahwa S3 hanya memuat bilangan 0 sehingga S3 grafik. Jadi, S juga grafik.";
}

function muncul2() {
  document.getElementById("jawaban2").innerHTML = "Perhatikan bahwa banyaknya bilangan pada S=6 4 4 3 3 2 1 1 adalah 8. Jelas bahwa n=8≥1. Tampak pula bahwa S tidak memuat bilangan yang lebih dari 7 dan tidak semua bilangannya 0, serta tidak ada bilangan negatif. S sudah terurut berupa bilangan monoton turun sehingga langkah selanjutnya adalah sebagai berikut.<br>S=6 4 4 3 3 2 1 1<br>(Eksekusi 6 dan kurangi 6 bilangan disampingnya dengan 1)<br>S1′=3 3 2 2 1 0 1⇒S1=3 3 2 2 1 1 0<br>(Eksekusi 3 dan kurangi 3 bilangan disampingnya dengan 1)<br>S2=2 1 1 1 1 0<br>(Eksekusi 2 dan kurangi 2 bilangan disampingnya dengan 1)<br>S3′=0 0 1 1 0⇒S3=1 1 0 0 0<br>(Eksekusi 1 dan kurangi 1 bilangan disampingnya dengan 1)<br>S4=0 0 0 0<br>Tampak bahwa S4 hanya memuat bilangan 0 sehingga S4 grafik. Jadi, S juga grafik.";
}

function muncul3() {
  document.getElementById("jawaban3").innerHTML = "Perhatikan bahwa banyaknya bilangan pada S=5 4 3 2 1 0 adalah 6. Jelas bahwa n=6≥1. Tampak pula bahwa S tidak memuat bilangan yang lebih dari 5 dan tidak semua bilangannya 0, serta tidak ada bilangan negatif. S sudah terurut berupa bilangan monoton turun sehingga langkah selanjutnya adalah sebagai berikut.<br>S=5 4 3 2 1 0<br>(Eksekusi 5 dan kurangi 5 bilangan disampingnya dengan 1)<br>S1=3 2 1 0 −1<br>Tampak bahwa S1 memuat bilangan negatif sehingga S1 bukan grafik. Jadi, S juga bukan grafik.";
}

function muncul4() {
  document.getElementById("jawaban4").innerHTML = "Menurut akibat lema jabat tangan, jumlah semua derajat suatu graf adalah genap, tetapi graf 3-beraturan dengan 7 titik memiliki jumlah derajat 3×7=21, padahal 21 adalah bilangan ganjil. Jadi, tidak mungkin ada graf 3-beraturan dengan 7 titik. (Terbukti)";
}

function muncul5() {
  document.getElementById("jawaban5").innerHTML = "Tidak ada. Misalkan titik graf itu adalah a,b,c, dan d. Katakanlah d merupakan titik berderajat 4. Graf yang terbentuk bukan graf sederhana karena hanya ada 3 sisi yang ditarik dari d ke titik lain (a,b,c) sehingga 1 sisi lainnya pastilah akan menjadi bagian dari sisi rangkap atau loop di titik itu.";
}

function tutup1() {
  document.getElementById("jawaban1").innerHTML = "";
}

function tutup2() {
  document.getElementById("jawaban2").innerHTML = "";
}

function tutup3() {
  document.getElementById("jawaban3").innerHTML = "";
}

function tutup4() {
  document.getElementById("jawaban4").innerHTML = "";
}

function tutup5() {
  document.getElementById("jawaban5").innerHTML = "";
}

function submit() {
  var name = document.getElementById("myForm").elements.namedItem("nama").value;
  var comment = document.getElementById("myForm").elements.namedItem("komentar").value;
  document.getElementById("komennama").innerHTML = name;
  document.getElementById("komenkomentar").innerHTML = comment;
  document.getElementById("komenkomentar").style.display = "block";
  closecom();
}