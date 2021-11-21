
const addTextBtn = document.getElementById('add-text-btn')
const postTextInput = document.getElementById('post-text-input')
const postTextDiv = document.getElementById('post-text-div')
const felling = document.getElementById('felling')
const postFelling = document.getElementById('post-felling')
const postFellingP = document.getElementById('post-felling-p')
const postImageInput = document.getElementById('post-image-input')
const postImagesDiv = document.getElementById('post-images-div')


addTextBtn.addEventListener('click', (event) => {
    postTextDiv.innerHTML = postTextInput.value;
});

felling.addEventListener('change', (event) => {
    postFelling.innerHTML = event.target.value;
    if(event.target.value === 'Nothing'){
        postFellingP.style.display = 'none';
    }else{
        postFellingP.style.display = 'block';
    }
});

 postImageInput.addEventListener ('change',async(event) => {
    const img = document.createElement("img");
    const liveImg = await uploadImage(event.target.files[0])
    // img.src = liveImg;
    // console.log(img);
    // postImagesDiv.appendChild(img)
})
async function uploadImage(img)
 {
     console.log(img);
    var form = new FormData();
    form.append('image', img)
    var url = 'https://api.imgbb.com/1/upload?key=b33c215182400d63985c1c33c5ecf50d' 
    const config = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials" : true ,
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
        },
        body: form,
    }
    const response = await fetch(url, config)
    // const json = await response.json()
    console.log(response)
    // return response.url;
 }