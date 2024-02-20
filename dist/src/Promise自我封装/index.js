"use strict";
new Promise((resolve, reject) => {
    setTimeout(() => resolve('result'), 1000);
}).then((value) => {
    console.log(value);
});
