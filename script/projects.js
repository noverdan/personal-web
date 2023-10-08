let contCard = document.querySelector('.grid-project');

contCard.addEventListener('click', function(event) {
    try {
        let elemen = event.target;
        let card = elemen.closest('.card');
        let namaKelas = card.classList[2];
        cardClickRedirect(namaKelas); 
    } catch (error) {
    }
});

function cardClickRedirect(kelas){
    switch (kelas){
        case "card1":
            window.location.href = 'https://github.com/noverdan/aplikasi-toko-online-armossecond-android'
            break;
        case "card2":
            window.location.href = 'https://github.com/noverdan/sentiment-analisis-naive-bayes'
            break;
        case "card3":
            window.location.href = 'https://github.com/noverdan/program-web-hitung-untung-rugi-flask-python'
            break;
        case "card4":
            window.location.href = ''
            break;
        case "card5":
            window.location.href = 'https://github.com/noverdan/bmi-calculator'
            break;                
    }   
}

