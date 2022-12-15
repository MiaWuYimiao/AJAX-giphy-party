console.log("Let's get this party started!");

const gifContainer = document.querySelector(".gifContainer");

function addGif(imgSrc){
    const newGif = document.createElement("img");
    newGif.src= imgSrc;
    gifContainer.append(newGif);
}

const form = document.querySelector("#form");
form.addEventListener('submit',async function(evt){
    evt.preventDefault();
    // search for gif
    const input = document.querySelector("#search-input");
    const url = `http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    const res = await axios.get(url);
    console.log(res.data.data[0]);
    const resLen = res.data.data.length;
    if(resLen>0){
        let randomInd = Math.floor(Math.random()*resLen);
        const imgSrc = res.data.data[randomInd].images.original.url;
        // add gif
        addGif(imgSrc);
    }
    input.value = "";
})

const rmvGif = document.querySelector("#removeBtn"); //a button element in a form element acts as a submit button
rmvGif.addEventListener('click', function(){
    console.log("remove clicked")
    // remove all img
    var child = gifContainer.lastElementChild;
    while (child) {
        gifContainer.removeChild(child);
        child = gifContainer.lastElementChild;
    }
})

