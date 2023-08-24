let myButtonIDs = [];
let myColors = [];

function changeColor(button) {
    const computedStyles = window.getComputedStyle(button);
    const colorPresent = computedStyles.backgroundColor;
    const buttonPresent = button;

    myButtonIDs.push(buttonPresent);
    myColors.push(colorPresent);

    if (myButtonIDs.length >= 2) {
        const buttonPrev = myButtonIDs[myButtonIDs.length - 2];
        const colorPrevious = myColors[myColors.length - 2];

        buttonPresent.style.backgroundColor = colorPrevious;
        buttonPrev.style.backgroundColor = colorPresent;
    }
}

// let myColors = ["lightcoral"];
// var Btn1 = document.getElementById('button#button1.button');
// let myButtonIDs = [Btn1];

// function changeColor(button){
//     const computedStyles = window.getComputedStyle(button);
//     var colorPresent = computedStyles.backgroundColor;
//     // var colorPresent = button.style.backgroundColor;
//     var buttonPresent = button.id;
//     // var buttonPresent = document.getElementById(id);
//     //var buttonPresent = myButtonIDs[myButtonIDs.length - 1];
//     //var buttonPrev = document.getElementById('button1');
//     myButtonIDs.push(buttonPresent);
//     // console.log(myButtonIDs);
//     myColors.push(colorPresent);
//     // console.log(myColors);
//     var buttonPrev = myButtonIDs[myButtonIDs.length - 2];
//     // var colorPresent = myColors[myColors.length - 1];
//     var colorPrevious = myColors[myColors.length - 2];
//     console.log(buttonPresent);
//     console.log(buttonPrev);
//     // console.log(myButtonIDs);
//     console.log(colorPresent);
//     console.log(colorPrevious);
//     (function() {
//         buttonPresent.style.backgroundColor = colorPrevious;
//     })();

//     (function() {
//         buttonPrev.style.backgroundColor = colorPresent;
//     })();
    
//     // buttonPresent.style.backgroundColor = colorPrevious;
//     // buttonPrev.style.backgroundColor = colorPresent;
//     // let idToBeColored = id;
//     // var button = document.getElementById(id);
//     // button.style.backgroundColor = color;
//     // button.style.color = 'blue';
// }
// // function change(a, b, present, previous){
// //     present.style.backgroundColor = a;
// //     previous.style.backgroundColor = b;
// //     present.style.color = 'white';
// //     previous.style.color = 'white';
// // }