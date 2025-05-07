
const yourName = document.getElementById("yourName");
const yourDesi = document.getElementById("yourDesi");
const yourNumber = document.getElementById("yourNumber");
const yourEmail = document.getElementById("yourEmail");
const yourLink = document.getElementById("yourLink");
//const yourLogo = document.getElementById("yourLogo");

const name = document.getElementById("name")
const desig = document.getElementById("desig");
const number = document.getElementById("number")
const email = document.getElementById("email")
const link = document.getElementById("link")
//const logo = document.getElementById("logo")
const qrImg = document.getElementById("qrImg")

const btn = document.getElementById("btn")

function generator(){
name.textContent = yourName.value.trim()
desig.textContent = yourDesi.value.trim()
number.textContent = yourNumber.value.trim()
email.textContent = yourEmail.value.trim()
// link.textContent= yourLink.value
const link = yourLink.value.trim()

 // logo.textContent = yourLogo.value
 if (link){
  generateQRCode(link);
} else {
  qrImg.src = ""; // clear QR if no link
}
}

  btn.addEventListener("click",(e)=>{
    e.preventDefault()
    generator()
  })

function generateQRCode(text) {
  if (typeof QRCode === 'undefined') {
      console.error('QRCode library is not loaded.');
      return;
  }

  QRCode.toDataURL(text, (err, url) => {
      if (err) {
          console.error("QR Code generation error:", err);
          return;
      }
    qrImg.src = url;
  });
}












