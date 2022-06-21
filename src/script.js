const myListedVideos = document.querySelectorAll('.video-list .vid')
const mainVideo = document.querySelector('.main-video video')
const title = document.querySelectorAll('.main-video .video-title')
const listOfGames = document.querySelector('.listofgames')
const devName = document.querySelector('.DevName')
const gameUrl = document.querySelector('.gameUrl')
const genre = document.querySelector('.genre')
const gameImg = document.querySelector('.gameImg')
const gameDescription = document.querySelector('.description')
const dateGames = document.querySelector('.dateGames')
const platform = document.querySelector('.platform')
const publisher = document.querySelector('.publisher')
const gameTitle = document.querySelector('.gameTitle')
const miniNews = document.querySelector('.miniNews')
const dateScroll = document.querySelector('.dateScroll')



//DOM Content Loaded
document.addEventListener('DOMContentLoaded',() => {
    //Video Player Section
    myListedVideos.forEach(video => {
        video.onclick = () => {
            myListedVideos.forEach(vid => vid.classList.remove('active'))
            video.classList.add('active')
            if(video.classList === 'active'){
                let src = video.children[0].getAttribute('src');
                mainVideo.src = src;
                let text = video.children[1].innerHTML;
                title.innerHTML = text
            }
        }
    })

f2pGames()

const currentDate = new Date();
const dateToday = currentDate.getDate()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getFullYear()
dateScroll.textContent = dateToday

myMMONews()

})

//list of f2p games
function f2pGames(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aecf993c34mshd3d18f8add32b27p113fa7jsn644341e81e9c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
    .then(response => response.json())
	.then(allgamesData => {
        // console.log(allgamesData[50])
            setInterval(function(){
                const gameDetails = allgamesData[Math.floor(Math.random()*allgamesData.length)]
                gameTitle.textContent = gameDetails.title
                devName.textContent = gameDetails.developer
                gameUrl.href = gameDetails.freetogame_profile_url
                gameUrl.textContent = gameDetails.game_url
                genre.textContent = gameDetails.genre
                gameImg.src = gameDetails.thumbnail
                gameDescription.textContent = gameDetails.short_description
                dateGames.textContent = gameDetails.release_date
                platform.textContent = gameDetails.platform
                publisher.textContent = gameDetails.publisher
            }, 13000)
    })
	.catch(err => console.error(err));
}
//MMO news
function myMMONews(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aecf993c34mshd3d18f8add32b27p113fa7jsn644341e81e9c',
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        }
    };
    
    fetch('https://mmo-games.p.rapidapi.com/latestnews', options)
        .then(response => response.json())
        .then(mmoData => {
            console.log(mmoData[20])
            setInterval(function(){
                const mmoDetails = mmoData[Math.floor(Math.random()*mmoData.length)]
                miniNews.textContent = mmoDetails.title
            }, 30000)
        })
        .catch(err => console.error(err));
}