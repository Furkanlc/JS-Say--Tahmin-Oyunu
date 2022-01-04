'use strict';
let secretnumber = Math.trunc(Math.random() * 20 + 1);
let scre = 20;
let higscr = 0;

const displaymsg = function (msg) {
    document.querySelector('.msg').textContent = msg;
};
document.querySelector('.check').addEventListener('click', function () {


    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    console.log(secretnumber, typeof secretnumber);

    //input boşşa

    if (!guess) {
        displaymsg('Sayı Giriniz');
    }

    //sayılar eşleşirse
    else if (guess === secretnumber) {
        displaymsg('Doğru Tahmin !');
        document.querySelector('.number').textContent = secretnumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (scre > higscr) {
            higscr = scre;
            document.querySelector('.highscore').textContent = higscr;

        }



    } else if (guess != secretnumber) {
        if (scre > 1) {
            displaymsg(guess > secretnumber ? ':Çok Yüksek' : 'Çok Düşük');
            document.querySelector('.score').textContent = scre;
            document.querySelector('.number').textContent = 'X';
            document.querySelector('body').style.backgroundColor = 'red';

        } else {
            displaymsg('Oyunu Kaybettiniz');
            document.querySelector('.score').textContent = 0;
        }

    }

});
document.querySelector('.again').addEventListener('click', function () {
    scre = 20;
    secretnumber = Math.trunc(Math.random() * 20 + 1);
    displaymsg('Tahmin Ediliyor');
    document.querySelector('.score').textContent = 'Skor :'+scre;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('.highscore').textContent='En Yüksek Skor : 0';
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.number').style.width = '15rem';

});