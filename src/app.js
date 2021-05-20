
/**
 * Number Randomiser and getting image (Update to promise / Axios)
 */
const minNo = 1;
const maxNo = 1085;
let num= Math.floor(Math.random() * maxNo);
var idNum =num; // random num between minNo and maxNo

console.log(`num is = ${num}`);

var currentImage = `https://picsum.photos/id/${idNum}/500/400`; // adjust height and width according to browser size
$body = $("body");
$body.css("margin","0")

$("#image").css("background-image",`url(${currentImage})`)

/**
 * Sidebar adjustments
 */

// $("body").


/**
 * Validate email
 */

 function ValidateEmail(mail) 
 {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.emailAddr.value))
   {
     return (true)
   }
     alert("You have entered an invalid email address!")
     return (false)
 }
