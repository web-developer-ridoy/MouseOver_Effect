


document.addEventListener('mousemove', function(e){


    let images = ['😂','😁','😒','☝️','👙','😑','😏','😝','😜','😛','😭','😎'];

    let body = document.querySelector('body');
    let emoji = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;


    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';

    let icon = images[Math.floor(Math.random() * images.length)];

    emoji.innerText = icon;

    let size = Math.random() * 50;

    emoji.style.fontSize = .1 + size + 'px';

    let max = 0;
    let min = 200;
    let randomValue = Math.floor(Math.random() * ((max + 1) - min) + min);

    emoji.style.transform = 'translateX(' + randomValue + ')';

    body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 1000);

})