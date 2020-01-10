function searchGif() {
    var gifWord = document.getElementById("search").value;
    if(gifWord.trim()=== "")  {
        alert("Kindly enter your word first.");
    }else {
        document.getElementById("search").innerHTML = gifWord;
    }

    fetch ('https://api.giphy.com/v1/gifs/search?q='+ gifWord +'&api_key=Yzr1Vz2gwGTUAr3HDiqBUhUFrWPt2y1v')
        .then(response => response.json())
        .then((gify) => {
            console.log(gify);
            displayGiphy(gify);    
        });
}

function displayGiphy(gify) { 

    document.getElementById("searchedGif").innerHTML="";
    let arrayLength= gify.data.length;
    let location = document.querySelector("#searchedGif");

    for(i=0;i<arrayLength;i++) {

    var h3 = document.createElement('h3');
    h3.innerHTML= gify.data[i].title;

    let pic = document.createElement('img');
    pic.src = gify.data[i].images.original.url;
    
    location.appendChild(h3);
    location.appendChild(pic);
    }
}
