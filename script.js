function menu(y) {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
   y.classList.toggle("change");
}

function resume() { 
  const file=`Vk_Resume.pdf`;
  window.open(file,"_blank");
}

function sendMessage() {
  let name=document.getElementById('name').value;
  let email=document.getElementById('email').value;
  let city=document.getElementById('city').value;
  let message=document.getElementById('message').value;
  const sendMessage= `Name : ${name} \n 
                      Email : ${email} \n
                      City : ${city} \n
                      ${message}.`
    let whatsapp="https://wa.me/+919860193979?text="+encodeURIComponent(sendMessage);
    window.open(whatsapp,'_blank');
   
}

