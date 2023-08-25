
let emailinput = document.querySelector("[name = 'inputemeil']");
let conatiner= document.querySelector(".conatiner");
let thankscard = document.querySelector(".thanks-card");
let emailValid= document.querySelector(".email-valide");
let invalide = document.querySelector("#invalid");
let btnsubmit = document.querySelector(".btn")

document.forms[0].onsubmit  = function (e){
let emailvalid = false ;
  var formEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailinput.value.trim() !== "" && emailinput.value.match(formEmail)){
    conatiner.style.display = "none";
    thankscard.style.display = "block";
    emailValid.textContent = emailinput.value;
    emailvalid = true ;

  }
  if(!emailvalid){
    emailinput.style.backgroundColor = "hsl(4, 100%, 67%) ";
    emailinput.style.color = "hsl(4, 100%, 67%) ";
    invalide.style.display ="block";
    emailvalid = false ;
    e.preventDefault();
   
  }
};
let btncard = document.querySelector(".btnthanks");
btncard.addEventListener("click",function(){
  conatiner.style.display = "block";
  thankscard.style.display = "none";
  emailinput.textContent = "";
})