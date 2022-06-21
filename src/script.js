const myListedVideos = document.querySelectorAll('.video-list .vid')
const mainVideo = document.querySelector('.main-video video')
const title = document.querySelectorAll('.main-video .video-title')

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

//list of f2p games