import { renderVideo } from "./render.js";

let btnSubmit = document.querySelector("#btnsubmit");
let input = document.getElementsByName("videoName");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let data = input[0].value;

  getVideos(data)

});

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0a0a986a4cmsh5a13bc30f563b55p1fa06cjsn5551f8e2c3e7",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const getVideos = async (data) => {
  const videos = await (
    await fetch(
      `https://youtube138.p.rapidapi.com/search/?q=${data}&hl=en&gl=US`,
      options
    )
  ).json();

  const videosRecommended = videos.contents;
  const firstVideo = videos.contents[0];

    const comments = await (
      await fetch(
        `https://youtube138.p.rapidapi.com/video/comments/?id=${firstVideo.video.videoId}&hl=en&gl=US`,
        options
      )
    ).json();

  const commentsVideo = comments.comments;

  renderVideo(firstVideo, videosRecommended,commentsVideo);

  return firstVideo;
};

// const getComments = async(dataId) =>{
//   const comments = await (
//     await fetch(
//       `https://youtube138.p.rapidapi.com/video/comments/?id=${dataId}&hl=en&gl=US`,
//       options
//     )
//   ).json();

//   return comments;
// }