document.getElementById('coupleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Pasangan Anda adalah Gusti Muhammad Taufikurrahman`;
});

