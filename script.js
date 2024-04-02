function success() {
   alert('Yeyy ayang sukaaaa....makacihh ayang')
}

function danger(){
   alert('Yahhh maaf ayang...sebagai gantinya ayang mau apa?, lanjut di wa ya')
}

// typed
const texts = ["Sayangku", "Cintaku", "Manisku", "Duniaku", "Cantikku"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('typed-text').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 250); // Ganti 200 dengan kecepatan ketik yang diinginkan (dalam milidetik)
})();

// counter
let countday = 0;
const counterElement = document.getElementById('counter');

const interval = setInterval(function() {
   countday++;
   counterElement.textContent = countday;
 
   if (countday >= 365) {
     clearInterval(interval); // Menghentikan interval setelah hitungan mencapai 365
   }
 }, 1000 / 365); 

//  play
function play() {
   const audio = new Audio('bs.mp3')
   audio.play()
}