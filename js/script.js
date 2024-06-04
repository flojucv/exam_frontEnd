const btnBlague = document.getElementById('btnBlague');
const btnResponse = document.getElementById('btnResponse');
const box = document.getElementById('box');
const apiURL = 'https://exam-backend-4fy5.onrender.com/api/v1/blague';

/*----GENERATION ALEATOIRE DES EMOJIS----*/
(
    () => {
        const body = document.querySelector('body');
        const imageLink = ['lol_0.svg', 'lol_1.svg', 'lol_2.svg', 'lol_3.svg', 'lol_4.svg', 'clown.svg', 'lol.svg', 'retro.svg'];
        for(let i = 0; i < 18; i++) {
            const emoji = document.createElement('img')
            emoji.src = `/assets/img/icon/${imageLink[Math.floor(Math.random()*imageLink.length)]}`;
            emoji.classList.add('emojis');
            emoji.style.top = `${Math.floor(Math.random()*100)}%`;
            emoji.style.left = `${Math.floor(Math.random()*100)}%`;

            body.appendChild(emoji);
        }
    }
)()

btnBlague.addEventListener('click', async () => {
    if(box.classList.contains('rotate')) {
        box.classList.remove('rotate');
        btnResponse.classList.remove('rotate');
    }

    btnResponse.innerText = 'Reponse';

    const affichageBlague = document.getElementById('affichageBlague');
    const responseBlague = document.getElementById('responseBlague');
    let blagueRandom = await (await fetch(`${apiURL}/random`)).json();
    blagueRandom = blagueRandom.data;
    console.log(blagueRandom)
    affichageBlague.innerHTML = `${blagueRandom.blague}`;
    responseBlague.innerHTML = `${blagueRandom.reponse}`
    btnBlague.innerText = "Une autre blague";
    btnResponse.style.display = 'block';
})

btnResponse.addEventListener('click', () => {
    box.classList.toggle('rotate');
    btnResponse.classList.toggle('rotate');
    if(btnResponse.classList.contains('rotate'))
        btnResponse.innerText = 'Question';
    else
        btnResponse.innerText = 'Reponse';
})