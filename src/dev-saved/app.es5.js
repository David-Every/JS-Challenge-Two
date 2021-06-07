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
["200"], //small
["50"]];
/**
 * Set the Width and height of large image shown
 */

/**
 * Axios
 */
//#region Axios

var currentImage; // adjust height and width according to browser size

var minNo = 1;
var maxNo = 1085;
var idNum;
var linkToSave = "https://picsum.photos/id/".concat(idNum, "/");

var getdata = function getdata() {
  // getSize(size);
  var size;

  if (t.matches) {
    size = 2;
  } else {
    size = 0;
  }

  setTimeout(function () {});
  idNum = Math.floor(Math.random() * maxNo); // Get new number

  currentImage = "https://picsum.photos/id/".concat(idNum, "/").concat(WH[size]);
  linkToSave = "https://picsum.photos/id/".concat(idNum, "/");
  axios.get(currentImage).then(function () {
    $("#image").css("background-image", "url(https://picsum.photos/id/".concat(idNum, "/").concat(WH[size], ")"));
  })["catch"](function () {
    console.log("cannot get ".concat(currentImage, " Error here"));
    getdata();
  });
}; //#endregion

/**
 * Change Image Display size 
 */

/**
 * Start
 */
//#region Interactivity


var $list = $("#list");
var $sidebar = $("#sidebar");
var $mobEmail = $("#mobEmail");
var $linkEmail = $("");
var $formPlacement = $(body);
var getImg = document.getElementById("newImage");
var $mobImgrefresh = $("#reload").on("click", getdata);
var showing = false,
    showEmails = false,
    active = false;
var animSpeed = 500;
var t = window.matchMedia("(max-width: 949px)");
window.addEventListener("resize", function () {
  res();
  reset();
});
var $emailForm = $("\n    <div id =\"form\">\n        <h3>Email:</h3> \n        <form name = form1>\n            <input id =\"emailBox\" type=\"text\" name =\"text1\">\n        </form>\n        <button id =\"linkButton\" type = \"button\" onclick=\"validateAndLink(document.form1.text1)\">\n            <span>Link Image</span>\n        </button>\n    </div> \n");
setTimeout(getdata, 1);
res();
getImg.addEventListener("click", getdata);

function res() {
  if (t.matches) {
    $sidebar.css("display", "none");
  } else {
    $sidebar.css("display", "block");
  }
}

function reset() {
  formReset();
}

$("#linkToEmail").on("click", function () {
  if (!showing) {
    showing = true;
    $emailForm.appendTo($sidebar);
    $("#form").addClass("lgscn");
    $("#form").css({
      "bottom": "320px"
    });
  } else {
    formReset();
  }
});

function formReset() {
  showing = false;
  $("#form").removeClass("lgscn");
  $("#form").removeClass("smscn");
  setTimeout(function () {
    $("#form").remove("#form");
  }, 1);
}

$("#linkEmail").on("click", function () {
  if (!showing) {
    showing = true;
    $emailForm.appendTo($formPlacement); // bottom: 150px;

    $("#form").addClass("smscn");
    $("#form").css({
      "bottom": "150px"
    });
    $("#form button").on("click", function () {
      console.log("clicked"); // $("#linkButton").css({"background-color":"gray"});
    });
  } else {
    showing = false;
    formReset();
  }
});
$("#viewEmails , #mobEmail").on("click", function () {
  if (!active) {
    active = true;
    $("#viewEmails span").text("Hide linked Emails");
    loadContent();

    if (t.matches) {
      $list.css({
        "display": "block",
        "width": "320px",
        "right": "-320px"
      });
      $list.animate({
        right: "0"
      });
    } else {
      $list.css({
        "display": "block",
        "width": "320px",
        "right": "0px"
      });
      $list.animate({
        right: '320px'
      });
    }
  } else {
    listEmailsReset();
  }
});

function listEmailsReset() {
  active = false;
  $(".linkedEmails").remove(".linkedEmails");
  $("#viewEmails span").text("Show linked Emails");
  $list.animate({
    right: '-320px'
  }, animSpeed);
  setTimeout(function () {
    $list.css("display", "none");
  }, animSpeed);
} //#endregion

/**
 * Validate email
 */
//#region Email Validation
// validate and link

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
    }
    /**
     * if this is not the 1st array check to see if there is an array with the same email
     * as what is currently in the input value
     * if there is add it on to the existing array.
     * else create a new array and store it there.
     */


    for (var i = 0; i < emailInfo.length; i++) {
      console.log("%c email is ".concat(email), "color:lightblue");
      console.log("%c array data emails ".concat(emailInfo[i]["email"], " and matches email is ").concat(email), "color:green"); // if(emailInfo[i]["email"].match(email)){ // Change Email info[i][0] to using key pair to match for an email in the 1st array.

      if (emailInfo[i][0].match(email)) {
        // Change Email info[i][0] to using key pair to match for an email in the 1st array.
        email = null;
        getdata();
        return emailInfo[i].push(linkToSave);
      } else {
        j++;
      }

      if (emailInfo.length === j) {
        savedEmail = email;
        email = null;
        j = 0;
        return createnew(
        /*num,*/
        savedEmail);
      }
    }
  }

  ;
}

var emailCheck = 1;
var firstemail = true;
var emailInfo = [];

function createnew(savedEmail) {
  emailInfo.push(["".concat(savedEmail), "".concat(linkToSave)]);
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
} //#endregion
//#region toHtmlList


function loadContent() {
  var e = 0;
  var l = 1;
  emailInfo.forEach(function () {
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class", "linkedEmails");
    var parentdiv = document.getElementById("allEmails");
    parentdiv.appendChild(newdiv); // appends the div to HTML

    var h3 = document.createElement("h3");
    var title = document.createTextNode(emailInfo[e][0]);
    h3.appendChild(title);
    newdiv.appendChild(h3);
    var ul = document.createElement("ul");

    for (var i = 1; i < emailInfo[e].length; i++) {
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
    console.log($(".linkedEmails li").length);
    l = 1;
    e++;
  });
}
/**
 * check the li position
 */
//#endregion
//#region Slick
//#endregion
