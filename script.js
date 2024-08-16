let container=document.querySelector(".container");
let qrInput=document.querySelector("#text");
let generateBtn=document.querySelector("#generate");
let img=document.querySelector("#qr-img");
let preInput

// generateBtn.onclick=function(){
//     let input=qrInput.value.trim()

//     if(!input || input===preInput){
//         alert("This feild should be empty and differnt with previous input ")
//         return
//     }
//     else{
//         preInput=input;
//         generateBtn.innerText="Generating QR Code...."
//         img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
                
//          img.onload=function(){
//             container.classList.add("active")
//             generateBtn.innerText="Generate QR Code"
//          }
//     }
// }
generateBtn.onclick = function() {
    let input = qrInput.value.trim();

    if (!input || input === preInput) {
        alert("This field should not be empty and should be different from the previous input.");
        return;
    } else {
        preInput = input;
        generateBtn.innerText = "Generating QR Code....";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=175x175&data=${input}`;
        img.onload = function() {
            container.classList.add("active");
            generateBtn.innerText = "Generate QR Code";
        };
    }
}
