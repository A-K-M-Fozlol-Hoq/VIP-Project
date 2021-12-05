


const getDeadline = () => {
    let deadline = document.getElementById('deadline').value;
    document.getElementById('setDeadline').innerText = deadline;
    document.getElementById('confirm-button').disabled = false;
    getPrice();
}

const getPrice = () => {
    let price = document.getElementById('price').value;
    document.getElementById('setPrice').innerText = price;
}


