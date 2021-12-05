const messages = document.getElementById('messages');
const sendText = document.getElementById('send-text');


sendText.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // console.log(sendText.value);
        // <div  class="message self" >
        //               <span class="message-text">This is a message</span>
        //             </div>
        const mainDiv = document.createElement('div')
        mainDiv.classList.add('message');
        mainDiv.classList.add('self');
        const span = document.createElement('span');
        span.classList.add('message-text');
        span.innerText=sendText.value;
        sendText.value='';
        mainDiv.appendChild(span);
        messages.appendChild(mainDiv);
    }
});