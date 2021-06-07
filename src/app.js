
/**
 * Number Randomiser and getting image (Update to promise / Axios)
 */

$("body").css("margin", "0");

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
    ["200"], //small
    ["50"]
]

/**
 * Set the Width and height of large image shown
 */


/**
 * Axios
 */
//#region Axios
var currentImage; // adjust height and width according to browser size
const minNo = 1;
const maxNo = 1085;
let idNum;

var linkToSave =`https://picsum.photos/id/${idNum}/`;

const getdata = () => {
    // getSize(size);
    let size;

    if(t.matches){
        size = 2;
     } else{
        size = 0;
     }

    setTimeout(() =>{});
    idNum = Math.floor(Math.random() * maxNo); // Get new number
    currentImage =`https://picsum.photos/id/${idNum}/${WH[size]}`;
    linkToSave =`https://picsum.photos/id/${idNum}/`;

    axios.get(currentImage)
    .then( () =>{
        $("#image").css("background-image",`url(https://picsum.photos/id/${idNum}/${WH[size]})`);
    })
    .catch( () => {
        getdata();
    });
}
//#endregion

/**
 * Change Image Display size 
 */

 

/**
 * Start
 */
//#region Interactivity
var $list =$("#list");
var $sidebar =$("#sidebar");
var $mobEmail =$("#mobEmail");
var $linkEmail =$("");
var $formPlacement = $(body);
const getImg =document.getElementById("newImage");
var $mobImgrefresh = $("#reload").on("click",getdata);

var showing = false, showEmails = false, active = false;
var animSpeed = 500;

const t = window.matchMedia("(max-width: 949px)")

window.addEventListener("resize",() =>{
    res();
    reset();
});

 var $emailForm = $( `
    <div id ="form">
        <h3>Email:</h3> 
        <form name = form1>
            <input id ="emailBox" type="text" name ="text1">
        </form>
        <button id ="linkButton" type = "button" onclick="validateAndLink(document.form1.text1)">
            <span>Link Image</span>
        </button>
    </div> 
`);

setTimeout(getdata,1);
res();

getImg.addEventListener("click", getdata);

function res() {
    if (t.matches) { 
        $sidebar.css("display","none");

    } else {
        $sidebar.css("display","block");
    }
}
function reset(){
    formReset();
}

$("#linkToEmail").on("click",()=>{
    if(!showing){
        showing = true;
        $emailForm.appendTo($sidebar);
        $("#form").addClass("lgscn");
        $("#form").css({"bottom":"320px"});
    }else{
        formReset();
    }
});
function formReset(){
        showing = false;
        $("#form").removeClass("lgscn");
        $("#form").removeClass("smscn");
        setTimeout(()=>{
            $("#form").remove("#form");
        },1);
     
}

$("#linkEmail").on("click",()=>{
    if(!showing){
        showing = true;
        $emailForm.appendTo($formPlacement);
    // bottom: 150px;
        $("#form").addClass("smscn");
        $("#form").css({"bottom":"150px"});
    }else{
        showing = false;
        formReset();
    }
});



$("#viewEmails , #mobEmail").on("click", () => {
    if(!active){
        active = true;
        $("#viewEmails span").text("Hide linked Emails");

        loadContent();
        

        if(t.matches){
            $list.css({"display":"block","width":"320px","right":"-320px"});
            $list.animate({right:"0"});
        }
        else{
            $list.css({"display":"block", "width":"320px" ,"right": "0px"});
            $list.animate({right:'320px'});
        }
    }else{
       listEmailsReset();
    }
});

function listEmailsReset(){
    active=false;
    $(".linkedEmails").remove(".linkedEmails");
    $("#viewEmails span").text("Show linked Emails");

    $list.animate({right:'-320px'},animSpeed);
    setTimeout(()=>{
        $list.css("display","none");
    },animSpeed);  
}


//#endregion

/**
 * Validate email
 */
//#region Email Validation


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
            // num = 0;
            return createnew(/*num,*/savedEmail);
        }
        /**
         * if this is not the 1st array check to see if there is an array with the same email
         * as what is currently in the input value
         * if there is add it on to the existing array.
         * else create a new array and store it there.
         */
        

        for (let i = 0; i < emailInfo.length; i++) {
            // if(emailInfo[i]["email"].match(email)){ // Change Email info[i][0] to using key pair to match for an email in the 1st array.
            if(emailInfo[i][0].match(email)){ // Change Email info[i][0] to using key pair to match for an email in the 1st array.

                email = null;
                getdata();
                return emailInfo[i].push(linkToSave);
            }else{
                j++;
            }

            if(emailInfo.length === j ){
                savedEmail = email;
                email = null;
                j = 0;
                return createnew(/*num,*/ savedEmail);
            }
        }
    };
}
var emailCheck = 1;
var firstemail = true;

var emailInfo = [];

function createnew(savedEmail){
    emailInfo.push([`${savedEmail}`,`${linkToSave}`]);
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
           
            var img = document.createElement("img");
            var imgLink = emailInfo[e][l].toString();
            imgLink = imgLink + WH[3].toString();
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

/**
 * check the li position
 */
//#endregion
//#region Slick
//#endregion
