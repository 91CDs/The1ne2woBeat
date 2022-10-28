import YoutubePlayer from "youtube-player/dist/index.js";
import { onMounted, ref } from "vue";

export function useEpisode() {
  const src: string[] = [
    "TRfkFALkVIk",
    "86Tfw6MaxW4",
    "N7sXNK6tOFY",
    "MH9R97p_Du0",
    "SLUqjNiJBYc",
  ];
  const epindex = ref<number>(0);

  let ytplayer: ReturnType<typeof YoutubePlayer>;
  onMounted(() => {
    ytplayer = YoutubePlayer("player", {
      width: 1920,
      height: 1080,
      videoId: src[epindex.value],
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        rel: 0,
      },
    });
    playerHandler();
  });

  function playerHandler() {
    const titles = document.querySelectorAll(".eptitle");
    const images = document.querySelectorAll(".overlay");
    console.log(titles);
    console.log(images);
    titles.forEach((el, index) => {
      el.addEventListener("click", () => {
        setEp(index);
      });
    });
    images.forEach((el, index) => {
      el.addEventListener("click", () => {
        setEp(index);
      });
    });
  }

  function nextEp() {
    if (epindex.value < src.length - 1) {
      epindex.value = epindex.value + 1;
      changeLink();
    }
    console.log(`clicked next: ${epindex.value}`);
  }
  function prevEp() {
    if (epindex.value > 0) {
      epindex.value = epindex.value - 1;
      changeLink();
    }
    console.log(`clicked prev: ${epindex.value}`);
  }
  function setEp(number: number) {
    console.log(number);
    if (number >= 0 && number < 5) {
      epindex.value = number;
      console.log(`${epindex.value} < index`);
      changeLink();
    }
  }
  function changeLink() {
    ytplayer.cueVideoById(src[epindex.value]);
    console.log(`set episode to episode ${epindex.value + 1}`);
    console.log(src[epindex.value]);
  }

  return { setEp, nextEp, prevEp, epindex };
}
