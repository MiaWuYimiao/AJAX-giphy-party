console.log("Let's get this party started!");

const $gifContainer = $(".gifContainer");

function addGif(imgSrc){
    const $newGif = $("<img>", {
        src : imgSrc,
        class : "w-100"
    });
    let $newCol = $("<div>");
    $newCol.append($newGif);
    $gifContainer.append($newCol);
}

const $form = $("#form");
$form.on('submit',async function(evt){
    evt.preventDefault();
    // search for gif
    const $input = $("#search-input");
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params:{
            q : $input.val(),
            api_key : "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    console.log(res.data.data[0]);
    const resLen = res.data.data.length;
    if(resLen>0){
        let randomInd = Math.floor(Math.random()*resLen);
        const imgSrc = res.data.data[randomInd].images.original.url;
        // add gif
        addGif(imgSrc);
    }
    $input.val("");
})

const $rmvGif = $("#removeBtn"); //a button element in a form element acts as a submit button
$rmvGif.on('click', function(){
    console.log("remove clicked")
    // remove all img
    $gifContainer.empty();
})

