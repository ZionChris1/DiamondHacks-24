// document.addEventListener('DOMContentLoaded', function() {
//     function redirect() {
//         var url = window.location.href;
//         var fragmentIndex = url.indexOf('?');
//         if (fragmentIndex !== -1) {
//             var fragment = url.substring(fragmentIndex + 1);
//             window.location.href = fragment;
//         }
//     }

//     var continueButton = document.getElementById('continueButton');
//     if (continueButton) {
//         continueButton.addEventListener('click', redirect);
//     } else {
//         console.error('Could not find element with id "continueButton"');
//     }
// });