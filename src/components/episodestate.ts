import YoutubePlayer from "youtube-player/dist/index.js";
import { onMounted, ref } from "vue";

export function useEpisode() {
  const src: string[] = [
    "TRfkFALkVIk",
    "86Tfw6MaxW4",
    "hekf6dbT1I8",
    "MH9R97p_Du0",
    "-ydmaB37qm0",
  ];
  const trailersrc = "zsWHVdMS3Gc";
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
    const trailer = document.querySelector(".trailer");

    titles.forEach((el, index) => {
      el.addEventListener("click", () => {
        setEp(index);
      });
    });
    titles.forEach((el, index) => {
      el.addEventListener("touchdown", () => {
        setEp(index);
      });
    });
    images.forEach((el, index) => {
      el.addEventListener("click", () => {
        setEp(index);
      });
    });
    images.forEach((el, index) => {
      el.addEventListener("touchdown", () => {
        setEp(index);
      });
    });
    trailer?.addEventListener("click", setTrailer);
    trailer?.addEventListener("touchdown", setTrailer);
  }

  function nextEp() {
    if (epindex.value < src.length - 1) {
      epindex.value = epindex.value + 1;
      changeLink();
    }
    console.log(`clicked next: ${epindex.value + 1}`);
  }
  function prevEp() {
    if (epindex.value > 0) {
      epindex.value = epindex.value - 1;
      changeLink();
    }
    console.log(`clicked prev: ${epindex.value + 1}`);
  }
  function setEp(number: number) {
    if (number >= 0 && number < 5) {
      epindex.value = number;
      changeLink();
    }
  }
  function setTrailer() {
    ytplayer.cueVideoById(trailersrc);
  }
  function changeLink() {
    ytplayer.cueVideoById(src[epindex.value]);
    console.log(`set episode to episode ${epindex.value + 1}`);
  }

  return { setEp, nextEp, prevEp, setTrailer, epindex };
}
