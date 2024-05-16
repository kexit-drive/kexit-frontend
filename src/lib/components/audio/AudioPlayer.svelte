<script>
  import { onMount, onDestroy } from "svelte";
  let audioFile;
  export let url;
  export let trackName;

  let isPlaying = false;
  let currentTime = "0:00";
  let totalTime = "0:00";
  let progress = 0;
  let volume = 50;

  onMount(() => {
    setupAudio();
  });

  $: if (url) {
    setupAudio();
  }

  function setupAudio() {
    if (audioFile) {
      audioFile.pause();
      audioFile.removeEventListener("timeupdate", updateProgress);
      audioFile.removeEventListener("loadedmetadata", onLoadedMetadata);
    }
    audioFile = new Audio(url);
    audioFile.volume = volume / 100;
    audioFile.addEventListener("timeupdate", updateProgress);
    audioFile.addEventListener("loadedmetadata", onLoadedMetadata);

    if (isPlaying) {
      audioFile.play();
    }
  }

  function onLoadedMetadata() {
    totalTime = formatTime(audioFile.duration);
  }

  function playPause() {
    if (audioFile.paused) {
      audioFile.play();
      isPlaying = true;
    } else {
      audioFile.pause();
      isPlaying = false;
    }
  }

  function updateProgress() {
    progress = (audioFile.currentTime / audioFile.duration) * 100;
    currentTime = formatTime(audioFile.currentTime);
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  }

  function seek(event) {
    const newTime = (event.target.value / 100) * audioFile.duration;
    audioFile.currentTime = newTime;
  }

  function adjustVolume(event) {
    audioFile.volume = event.target.value / 100;
    volume = event.target.value;
  }

  onDestroy(() => {
    if (audioFile) {
      audioFile.pause();
      audioFile.removeEventListener("timeupdate", updateProgress);
      audioFile.removeEventListener("loadedmetadata", onLoadedMetadata);
    }
  });
</script>

<main>
  <section class="audio-player">
    <h3>{trackName}</h3>
    <div class="controls">
      <button on:click={playPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <input
        type="range"
        value={progress}
        min="0"
        max="100"
        step="1"
        on:input={seek}
      />
      <span>{currentTime} / {totalTime}</span>
    </div>
    <div class="volume-control">
      <label for="volume">Volume</label>
      <input
        type="range"
        id="volume"
        min="0"
        max="100"
        value={volume}
        on:input={adjustVolume}
      />
    </div>
  </section>
</main>

<style>
  .audio-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222;
    color: #bbb;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 300px;
    margin: 20px auto;
  }

  .controls {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .controls button {
    margin-right: 10px;
    padding: 5px 10px;
    background-color: #444;
    color: #bbb;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .controls input[type="range"] {
    flex: 1;
    margin-right: 10px;
  }

  .volume-control {
    margin-top: 10px;
    width: 100%;
  }

  .volume-control label {
    display: block;
    margin-bottom: 5px;
  }

  .volume-control input[type="range"] {
    width: 100%;
  }
</style>
