const apiKey =  "35811272-dc7d40a14cf4bd9c690e0af2d";
const query = "gato";




function getData(){


    fetch ("https://pixabay.com/api/" +

        `?key=${apiKey}&` + 
        `q=${query}`
    )
    .then(response => response.json())
    .then(data => {

        console.log(data)

        //const arrayImg = [];
        const saveArray = data.hits;

        console.log(saveArray);

        /*
        saveArray.forEach(element => {
            arrayImg.push(element);
        });
        console.log(arrayImg);
        */

});

    

}


getData();