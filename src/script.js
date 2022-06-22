const myListedVideos = document.querySelectorAll('.video-list .vid')
const mainVideo = document.querySelector('.main-video video')
const title = document.querySelectorAll('.video-title')
const allVids = document.querySelector('.video-list video')

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

const mmoNewsTitle = document.querySelector('.mmoNewsTitle')
const mmoImg = document.querySelector('.mmoImg')
const mmoDescription = document.querySelector('.mmoDescription')
const articleContent = document.querySelector('.articleContent')
const linkArticle = document.querySelector('.linkArticle')

const epicTitle = document.querySelector('.epicTitle')
const epicImg = document.querySelector('chuckImg')
const epicDescription = document.querySelector('.epicDescription')


//DOM Content Loaded
document.addEventListener('DOMContentLoaded',() => {
    //Video Player Section

    myListedVideos.forEach(video => {
        video.onclick = () => {
            myListedVideos.forEach(vid => vid.classList.remove('active'))
            video.classList.add('active')
            if(video.classList.contains('active')){
                let src = video.children[0].getAttribute('src');
                mainVideo.src = src;
            }
        }
    })

ChuckNorris()

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
            // setInterval(function(){
            //     const mmoDetails = mmoData[Math.floor(Math.random()*mmoData.length)]
            //     // console.log(mmoDetails)
            //     mmoNewsTitle.textContent = mmoDetails.title
            //     mmoImg.src = mmoDetails.thumbnail
            //     mmoDescription.textContent = mmoDetails.short_description
            //     articleContent.innerHTML = mmoDetails.article_content
            //     linkArticle.href = mmoDetails.article_url
            //     linkArticle.textContent = mmoDetails.article_url
            // }, 50000)
        })
        .catch(err => console.error(err));
}

//Chuck Norris Memes
function ChuckNorris(){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': 'aecf993c34mshd3d18f8add32b27p113fa7jsn644341e81e9c',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}