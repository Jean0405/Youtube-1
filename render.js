let videoTitle = document.querySelector('#video-title');
let videoAuthor = document.querySelector('#videoAuthor');
let channelLogo = document.querySelector('#channel-logo');
let views = document.querySelector('#views');
let videoIframe = document.querySelector('iframe');
let description = document.querySelector('#description');
const commentsContainer = document.querySelector('#comments-container');
const recommendedVideosContainer = document.querySelector('.recommended-videos-container');

export function renderVideo(firstVideo, videos, commentsVideo) {
    videoTitle.innerHTML = firstVideo.video.title;
    videoAuthor.innerHTML = firstVideo.video.author.title;
    channelLogo.src = firstVideo.video.author.avatar[0].url;
    views.innerHTML = Intl.NumberFormat().format(firstVideo.video.stats.views) + " views";
    videoIframe.src = `https://www.youtube.com/embed/${firstVideo.video.videoId}`
    description.innerHTML = firstVideo.video.descriptionSnippet;

    commentsContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'comment-detail col-12');
        div.innerHTML = `
                <h6 class="text-danger fw-bold" id="userOne">${commentsVideo[i].author.title}</h6>
                <p class="text-light" id="desUserOne">${commentsVideo[i].content}</p>
            `;
        commentsContainer.appendChild(div);
    }

    recommendedVideosContainer.innerHTML = '';
    videos.forEach(videoItem => {
        const div = document.createElement('div');
        div.setAttribute('class', 'recommended-video col-12 d-flex justify-content-start align-items-center text-light my-2')

        div.innerHTML = `
            <img src="${videoItem.video.thumbnails[0].url}"
                alt="">
            <div class="recommended-detail-video col d-flex flex-column">
                <p class="fw-bold fs-4 mt-1 mx-3">${videoItem.video.title}</p>
                <p class="fs-5 mt-1 mx-3">${videoItem.video.author.title}</p>
                <p class="mt-1 mx-3">${videoItem.video.publishedTimeText}</p>
            </div>
        `;

        recommendedVideosContainer.appendChild(div);
    });
}
