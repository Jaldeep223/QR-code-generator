<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>



    <div class="container">

        <div class="content"> 

            <form  id="userForm">

            <label for="yourName"><i>Enter Your Name :</i></label><br><br>   
            <input type="text"  id="yourName">
            <br><br>    
        
            <label for="yourDesi"><i>Enter Your Designation :</i></label><br><br>    
            <input type="text"  id="yourDesi">
            <br><br>    


            <label for="yourNumber"><i>Enter Your Number :</i></label><br><br>
            <input type="number" id="yourNumber">
            <br><br>
        
            <label for="yourEmail"><i>Enter YourEmail  :</i></label><br><br>
            <input type="text" id="yourEmail"  >
            <br><br>
    
            <label for="yourLink"><i>Enter Your link :</i></label> <br><br>
            <input id="yourLink" type="text" >
            <br><br>
    
            <!-- <label for="yourLogo"><i>Enter Your logo :</i></label><br><br>
            <input type ="file"  id="yourLogo">
            <br><br> -->
        
            <button id="btn" value="button">Generate Business Card</button>

            </form> 

        </div>

        <div class="verticalLine"></div>

        <div id="box1">

            <div class="containerOne" >

                <span id="name"></span><br>

                <span id="desig"></span><br>

                <span id="number"></span><br>

                <span id="email"></span><br>
  
            </div>
        
    </div>

    <div id="box2">
       <div id="link">
        <img src="" alt="" id="qrImg">
       </div>   
    </div>



<script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
<script src="app.js"></script>
</body>
</html>


.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.content{
    padding: 20px 100px;
}

.content>label>i{
    font-size: 15px;  
    font-weight:900;
}

#yourName{
    width: 400px;
    padding: 10px;
    font-size: 15px;
    border-radius: 25px;
    box-shadow: 5px 5px 5px rgb(62, 61, 61);
}

#yourDesi{
    width: 400px;
    padding: 10px;
    font-size: 15px;
    border-radius: 25px;
    box-shadow: 5px 5px 5px rgb(62, 61, 61);  
}

#yourNumber{
    width: 400px;
    padding: 10px;
    font-size: 15px;
    border-radius: 25px;
    box-shadow: 5px 5px 5px rgb(62, 61, 61);      
}

#yourEmail{
    width: 400px;
    padding: 10px;
    font-size: 15px;
    border-radius: 25px;
    box-shadow: 5px 5px 5px rgb(62, 61, 61);  
}

#yourLink{
    width: 400px;
    padding: 10px;
    font-size: 15px;
    border-radius: 25px;
    box-shadow: 5px 5px 5px rgb(62, 61, 61);  
}


#btn{
    padding: 15px;
    font-size: 15px;
    border-radius: 25px;
    background-color: #287acc;
    color: #fff;
    cursor: pointer;
}

.verticalLine{
    border: 1px solid rgb(7, 8, 7);
    height: 600px;
}

#box1{
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 250px;
    background-color: rgb(6, 6, 125);
    border-radius: 15px;
    color: #fff;
}

.containerOne{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    
}

#box2{
    height: 350px;
    width: 250px;
    background-color: rgb(6, 6, 125);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
}


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













