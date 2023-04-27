
/* old code / teacher code
let images = [
    "https://images.unsplash.com/photo-1679678691006-0ad24fecb769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1682478695074-9e47f09a7459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1679678691014-eba529defb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2969&q=80",
    "https://images.unsplash.com/photo-1682408878479-422b920ab756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80"
];*/

// instead of images array, use api call to get list of images and put inside of carousel


//New code / Abraham Code
const apiKey =  "35811272-dc7d40a14cf4bd9c690e0af2d";
var query = "gato";

const inputSearch = document.querySelector('#searchInput');
const buttonSearch = document.querySelector('#searchButton');

buttonSearch.addEventListener("click", (ev)=> {

    ev.preventDefault();

    console.log(inputSearch.value);

    if(inputSearch.value){
        query = inputSearch.value;
        console.log(query);
        getData();

    }else { 
        query = "gato";
    }

    
    

});


var images = [];


function getData(){
    fetch ("https://pixabay.com/api/" +
        `?key=${apiKey}&` + 
        `q=${query}`
    )
    .then(response => response.json())
    .then(data => {
        console.log(data)
        //const arrayImg = [];
        const saveArray = data.hits; // i got from this the array of every image, thats means i got data anput it, name, id, creator, URL Page, url Image, and a lots data about every image.

        console.log(saveArray);
        
        // Solution Mine jeje xD
        saveArray.forEach(element => {

            //console.log(element.largeImageURL);
            const imageElements = element.largeImageURL;

            images.push(imageElements);
            
        });

        console.log(images); // this show me the new "images" array where we can find inside of it every URL adress for the images

        
        
        /*
        saveArray.forEach(element => {
            arrayImg.push(element);
        });
        console.log(arrayImg);
        */
});  
}

getData();


let index = 0;

function showImage() {
    $("#img-carousel").attr("src", images[index]);
}

function nextImage() {
    index++;
    if(index >= images.length) {
        index = 0;
    }
    showImage();
}

function prevImage(){
    index--;
    if(index < 0){
       index = images.length - 1; 
    }
    showImage();
}

$("#next").click(() => nextImage())

$("#prev").click(() => prevImage())