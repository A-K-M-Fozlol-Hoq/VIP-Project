
const gigTitleInput = document.getElementById('gig-title-input')
const gigSubTitleInput = document.getElementById('gig-sub-title-input')

function changeTitle(event) {
    console.log(gigTitleInput.name, gigTitleInput.value);
}

function changeSubTitle(event) {
    console.log(gigTitleInput.name, gigSubTitleInput.value);
}