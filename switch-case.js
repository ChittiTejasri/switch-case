console.log("---Grade Description--------")
// 1.Grade Description.
let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very Good");
        break;
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Needs Improvement");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Invalid grade");
}
// --------------------------------------------
console.log("------Vehicle Type-------")
// 2.Vehicle Type
let vehicle = 3;

switch (vehicle) {
    case 1:
        console.log("Two Wheeler");
        break;
    case 2:
        console.log("Car");
        break;
    case 3:
        console.log("Bus");
        break;
    case 4:
        console.log("Truck");
        break;
    default:
        console.log("Invalid vehicle code");
}
// --------------------------------------------
console.log("------Internet Plan--------")
// 3.Internet Plan
let plan = "Premium";

switch (plan) {
    case "Basic":
        console.log("Basic Plan - 1 GB per day");
        break;
    case "Standard":
        console.log("Standard Plan - 2 GB per day");
        break;
    case "Premium":
        console.log("Premium Plan - 3 GB per day");
        break;
    case "Unlimited":
        console.log("Unlimited Plan");
        break;
    default:
        console.log("Invalid plan");
}
// ---------------------------------------------------------
console.log("------Programming Language--------")
// 4.Programming Language
let language = "Python";

switch (language) {
    case "Python":
        console.log("Python is widely used for programming and data science");
        break;
    case "Java":
        console.log("Java is widely used for application development");
        break;
    case "JavaScript":
        console.log("JavaScript is widely used for web development");
        break;
    case "C":
        console.log("C is widely used for system programming");
        break;
    default:
        console.log("Unknown programming language");
}
// --------------------------------------------------------------------------------
console.log("------Season Selection------------")
// 5.Season Selection.
let season = 2;

switch (season) {
    case 1:
        console.log("Summer");
        break;
    case 2:
        console.log("Rainy Season");
        break;
    case 3:
        console.log("Winter");
        break;
    case 4:
        console.log("Spring");
        break;
    default:
        console.log("Invalid season");
}
// ----------------------------------------------------
console.log("------File Type-------------")
// 6.File Type.
let fileType = "pdf";

switch (fileType) {
    case "jpg":
        console.log("Image File");
        break;
    case "mp3":
        console.log("Audio File");
        break;
    case "mp4":
        console.log("Video File");
        break;
    case "pdf":
        console.log("Document File");
        break;
    case "html":
        console.log("Web Page File");
        break;
    default:
        console.log("Unknown File Type");
}