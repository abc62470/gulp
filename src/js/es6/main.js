import $ from "jquery";

import contact from "./contact.js";

var Contact = new contact();
Contact.start();

//禁用双指缩放
// document.documentElement.addEventListener('touchstart', function (event) {
//   if (event.touches.length > 1) {
//     event.preventDefault();
//   }
// }, false);