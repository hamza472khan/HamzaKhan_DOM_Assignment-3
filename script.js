

let task = document.querySelectorAll("h1");
task[0].innerText = "Task-1: Get an Attribute Value.";

// Task-1: Get an Attribute Value

let imgSrc = document.getElementById("imgSrc");
console.log(imgSrc.getAttribute("src"));

// Task-2: Changing Image Source
function ChangeImg() {
    let changeImg = document.getElementById("img2")
    changeImg.removeAttribute("src");
    changeImg.setAttribute("src", "../Hamza_DOM_Assignment-3/images/khphotography-arabian-horse-5249583.jpg");
    // changeImg.setAttribute("width", "600px")
}

// Task-3: Set Attribute To Input Field

let setAttr = document.getElementsByTagName("input")[0];
// console.log(setAttr);


setAttr.setAttribute("placeholder", "Enter Your Name");
console.log(setAttr);

//Task-4: Remove An Attribute
function enableButton() {
    let myinput = document.getElementById("myInput");
    let enablebtn = document.getElementById("enablebtn");
    console.log(myinput);
    console.log(enablebtn);

    myinput.removeAttribute("disabled");
    console.log(myinput);
    myinput.removeAttribute("placeholder");
    myinput.setAttribute("placeholder", "Enabled! Write Something");

}


// Task 5: Check if Attribute Exists
const para = document.getElementById("myParagraph");
const hasClassAttribute = para.hasAttribute('class');
// Log the result in the console
console.log("The paragraph has class attribute = " ,hasClassAttribute); 

//Task: 6 : Change Link Destination


function changeLinkDestination() {
    
    const linkElement = document.getElementById('myLink');

    linkElement.href = 'https://www.github.com';

    //for go to new tab
    linkElement.setAttribute("target", "_blank");

    linkElement.textContent = 'Visit GitHub';
}




