<script>
  import { onMount, onDestroy } from 'svelte';
  let videoFile;
  export let url;
  export let videoName;

  let isPlaying = false;
  let currentTime = "0:00";
  let totalTime = "0:00";
  let progress = 0;
  let volume = 50;

  function setupVideo() {
    if (videoFile) {
      videoFile.pause();
      videoFile.removeEventListener('timeupdate', updateProgress);
      videoFile.removeEventListener('loadedmetadata', onLoadedMetadata);
      videoFile.src = url;
      videoFile.volume = volume / 100;
      videoFile.addEventListener('timeupdate', updateProgress);
      videoFile.addEventListener('loadedmetadata', onLoadedMetadata);

      if (isPlaying) {
        videoFile.play();
      }
    }
  }

  function onLoadedMetadata() {
    totalTime = formatTime(videoFile.duration);
  }

  function playPause() {
    if (videoFile.paused) {
      videoFile.play();
      isPlaying = true;
    } else {
      videoFile.pause();
      isPlaying = false;
    }
  }

  function updateProgress() {
    progress = (videoFile.currentTime / videoFile.duration) * 100;
    currentTime = formatTime(videoFile.currentTime);
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  }

  function seek(event) {
    const newTime = (event.target.value / 100) * videoFile.duration;
    videoFile.currentTime = newTime;
  }

  function adjustVolume(event) {
    videoFile.volume = event.target.value / 100;
    volume = event.target.value;
  }

  // Handle URL changes
  $: if (url) {
    setupVideo();
  }

  onMount(() => {
    // Initialize the video file on mount
    setupVideo();
  });

  onDestroy(() => {
    if (videoFile) {
      videoFile.pause();
      videoFile.removeEventListener('timeupdate', updateProgress);
      videoFile.removeEventListener('loadedmetadata', onLoadedMetadata);
    }
  });
</script>

<main>
  <section class="video-player">
    <h3>{videoName}</h3>
    <div class="video-container">
      <video bind:this={videoFile} controls></video>
    </div>
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
  .video-player {
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

  .video-container {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .video-container video {
    width: 100%;
    height: auto;
    border-radius: 10px;
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
