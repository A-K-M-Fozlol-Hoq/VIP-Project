
const gigTitleInput = document.getElementById('gig-title-input')
const gigSubTitleInput = document.getElementById('gig-sub-title-input')
const gigTagInput = document.getElementById('gig-tag-input')
const addGigTagBtn = document.getElementById('add-gig-tag-btn')
let totalTag=0;

function changeTitle() {
    console.log(gigTitleInput.name, gigTitleInput.value);
}

function changeSubTitle() {
    console.log(gigTitleInput.name, gigSubTitleInput.value);
}

// function addTag() {
//     console.log(gigTagInput.name, gigTagInput.value);
// }
addGigTagBtn.addEventListener("click", ()=>{
    console.log('object', gigTagInput.value);
})