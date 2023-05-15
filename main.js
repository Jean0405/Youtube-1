let btnSubmit = document.querySelector("#btnsubmit");
let input = document.getElementsByName("videoName");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const data = input[0].value;
  console.log(data);
});

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0a0a986a4cmsh5a13bc30f563b55p1fa06cjsn5551f8e2c3e7",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const getVideos = async (data) => {
  const video = await (
    await fetch(
      `https://youtube138.p.rapidapi.com/search/?q=${data.videoName}&hl=en&gl=US`,
      options
    )
  ).json();
  console.log(video.contents[0]);
};
