
/**
 * Number Randomiser and getting image (Update to promise / Axios)
 */


// var idNum;// =num; // random num between minNo and maxNo

// console.log(WH[1]);

$("body").css("margin", "0");
// $body.css("margin","0")


// getdata();

/**
 * Set Image Size -
 * - Detect current Screen width
 * - set WH[i] to correct screensize
 *  - If screensize changing check to see if the WH[i] needs to change
 *      - if it does get the current idNum and save that
 *      - Import current idNum and new WH[i];
 *      - reload Image
 */
 const WH = [
    ["500/400"],//Large
    ["300/200"],//med
    ["200/100"] //small
    ["50"]

]
let x = 0;


/**
 * Axios
 */
//#region Axios
var currentImage; // adjust height and width according to browser size
const minNo = 1;
const maxNo = 1085;
let idNum;

const getImg =document.getElementById("newImage");

const getdata = () => {
    idNum = Math.floor(Math.random() * maxNo); // Get new number
    currentImage =`https://picsum.photos/id/${idNum}/${WH[x]}`;
    axios.get(currentImage)
    .then( () =>{
        $("#image").css("background-image",`url(https://picsum.photos/id/${idNum}/${WH[x]})`);
    })
}
//#endregion

/**
 * Start
 */
 setTimeout(getdata,1);

getImg.addEventListener("click", getdata);

/**
 * Validate email
 */
//#region Email Validation

var showing = false, showEmails = false;

// validate and link
/**
 * Validate the Email address if it is valid, LINK it together and store in an array
 */
function validateAndLink(inputText){

    if(ValidateEmail(inputText)){
        var email = inputText.value, j = 0, savedEmail= null;
        /** 
         * if the lengh of the array is 0 and its the 1st email input 
         * Create new array and store it.
        */
        if (emailInfo.length === 0 && firstemail){
            firstemail = false;
            savedEmail = email;
            email = null;
            return createnew(savedEmail)
        }
        // else{

        /**
         * if this is not the 1st array check to see if there is an array with the same email
         * as what is currently in the input value
         * if there is add it on to the existing array.
         * else create a new array and store it there.
         */

        for (let i = 0; i < emailInfo.length; i++) {
            if(emailInfo[i][0].match(email)){
                email = null;
                getdata();
                return emailInfo[i].push(currentImage);
            }else{
                j++;
            }

            if(emailInfo.length === j ){
                savedEmail = email;
                email = null;
                j = 0;
                return createnew(savedEmail);
            }
        } 
    };
}
var emailCheck = 1;
var firstemail = true;

var emailInfo = [];

function createnew(savedEmail){
    emailInfo.push([`${savedEmail}`,`${currentImage}`]);
    emailCheck = emailInfo.length ;
    getdata();
}

function ValidateEmail(inputText){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat)){
        document.form1.text1.focus();
        return true;

    }else{
        
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}

$("#linkToEmail").on("click",()=>{
    if(!showing){
        showing = true;
        $("#form").css("display","block");

    }else{
        showing = false;
        $("#form").css("display","none");
    }
});


$("#viewEmails").on("click", () => {
    if(!showEmails){
        showEmails = true;
        loadContent();
        $("#list").animate({right:'325px'});
    }else{
        showEmails = false;
        $("#list").animate({right:'0px'});
        $(".linkedEmails").remove();
    }
});

//#endregion

//#region toHtmlList

function loadContent(){
    var e =0;
    var l = 1;   

    emailInfo.forEach(() => {
        var newdiv = document.createElement("div");
        newdiv.setAttribute("class","linkedEmails");
        var parentdiv = document.getElementById("allEmails");
        parentdiv.appendChild(newdiv); // appends the div to HTML

        var h3 = document.createElement("h3");
        var title = document.createTextNode(emailInfo[e][0]);

        h3.appendChild(title);
        newdiv.appendChild(h3);

        var ul = document.createElement("ul");    
        for (let i = 1; i < emailInfo[e].length; i++) {
            var li = document.createElement("li");
            var img = document.createElement("img")
            var imgLink = emailInfo[e][l].toString();
            img.src = imgLink;
            
            li.appendChild(img);
            ul.appendChild(li);
            l++;
        }
        newdiv.appendChild(ul);
        l=1;
        e++;
    });
}
//#endregion