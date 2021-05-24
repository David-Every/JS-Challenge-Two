"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      return setTimeout(createnew(savedEmail), toList, 100); //createnew(savedEmail)
    }
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
        j = 0; // return createnew(savedEmail);

        return setTimeout(createnew(savedEmail), toList(), 100); //createnew(savedEmail)
      }
    }
  }

  ;
}

var emailCheck = 1;
var firstemail = true;
var emailInfo = [{
  id: 0,
  email: "EmailAddress1@email.com",
  link1: "link1"
}, {
  id: 1,
  email: "EmailAddress2@email.com",
  link1: "link1"
}, {
  id: 2,
  email: "EmailAddress3@email.com",
  link1: "link1"
}];

function createnew(savedEmail) {
  emailInfo.push(["".concat(savedEmail), "".concat(currentImage)]);
  emailCheck = emailInfo.length;
  getdata();
}

function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputText.value.match(mailformat)) {
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
  console.log("To List");
} //#endregion

/**
 * Convert array to objects 
 * https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4#:~:text=To%20convert%20an%20array%20into%20an%20object%20we%20will%20create,key%20we%20have%20passed%20in.
 */


var convertArrayToObject = function convertArrayToObject(array, key) {
  var initialValue = {};
  return array.reduce(function (obj, item) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, item[key], item));
  }, initialValue);
};

console.log(convertArrayToObject(emailInfo, 'id'));
/**
 * use proxy on object to check it.
 * https://www.javascripttutorial.net/es6/javascript-proxy/
 */