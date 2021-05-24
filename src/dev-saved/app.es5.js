"use strict";

/**
 * Number Randomiser and getting image (Update to promise / Axios)
 */
// var idNum;// =num; // random num between minNo and maxNo
// console.log(WH[1]);
$("body").css("margin", "0"); // $body.css("margin","0")
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

var WH = [["500/400"], //Large
["300/200"], //med
["200/100"] //small
];
var x = 0;
/**
 * Axios
 */
//#region Axios

var currentImage; // adjust height and width according to browser size

var minNo = 1;
var maxNo = 1085;
var idNum;
var getImg = document.getElementById("newImage");

var getdata = function getdata() {
  idNum = Math.floor(Math.random() * maxNo); // Get new number

  currentImage = "https://picsum.photos/id/".concat(idNum, "/").concat(WH[x]);
  axios.get(currentImage).then(function () {
    $("#image").css("background-image", "url(https://picsum.photos/id/".concat(idNum, "/").concat(WH[x], ")"));
  });
}; //#endregion

/**
 * Start
 */


setTimeout(getdata, 1);
getImg.addEventListener("click", getdata);
/**
 * Validate email
 */
//#region Email Validation

var showing = false,
    showEmails = false; // validate and link

/**
 * Validate the Email address if it is valid, LINK it together and store in an array
 */

function validateAndLink(inputText) {
  if (ValidateEmail(inputText)) {
    var email = inputText.value,
        j = 0,
        savedEmail = null;
    /** 
     * if the lengh of the array is 0 and its the 1st email input 
     * Create new array and store it.
    */

    if (emailInfo.length === 0 && firstemail) {
      firstemail = false;
      savedEmail = email;
      email = null;
      return createnew(savedEmail);
    } // else{

    /**
     * if this is not the 1st array check to see if there is an array with the same email
     * as what is currently in the input value
     * if there is add it on to the existing array.
     * else create a new array and store it there.
     */


    for (var i = 0; i < emailInfo.length; i++) {
      if (emailInfo[i][0].match(email)) {
        email = null;
        getdata();
        return emailInfo[i].push(currentImage);
      } else {
        j++;
      }

      if (emailInfo.length === j) {
        savedEmail = email;
        email = null;
        j = 0;
        return createnew(savedEmail);
      }
    }
  }

  ;
}

var emailCheck = 1;
var firstemail = true;
var emailInfo = [];

function createnew(savedEmail) {
  // console.log("%c Creating new array","color:green");
  emailInfo.push(["".concat(savedEmail), "".concat(currentImage)]);
  emailCheck = emailInfo.length;
  getdata();
}

function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputText.value.match(mailformat)) {
    // alert("Valid email address!");
    document.form1.text1.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}

$("#linkToEmail").on("click", function () {
  if (!showing) {
    showing = true;
    $("#form").css("display", "block");
  } else {
    showing = false;
    $("#form").css("display", "none");
  }
});
$("#viewEmails").on("click", function () {
  if (!showEmails) {
    showEmails = true;
    $("#list").animate({
      right: '325px'
    });
  } else {
    showEmails = false;
    $("#list").animate({
      right: '0px'
    });
  }
}); //#endregion
//#region toHtmlList

function toList() {
  return "\n        <div class =\"linkedEmails\"> \n        <h3> ".concat(linkThisEmail, "</h3>\n        <ul class =\"linkedImages\" >\n            <li><img src =\"").concat(linkThisImage, "\"></li>\n        </ul>\n    </div>\n    ");
} //#endregion