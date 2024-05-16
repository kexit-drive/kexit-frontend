<script>
  import AudioPlayer from "./audio/AudioPlayer.svelte";
  import PdfPlayerComponent from "./pdf/PdfPlayerComponent.svelte";
  import VideoPlayer from "./video/VideoPlayer.svelte";

  export let mediaType;
  export let url;
</script>

{#if mediaType === "VIDEO"}
  <VideoPlayer {url} videoName = {"some video name"}/>
{:else if mediaType === "AUDIO"}
  <AudioPlayer url={url} trackName={"some track name"}/>
{:else if mediaType === "IMAGE"}
  <img src={url} alt="Media content" />
{:else if mediaType === "APPLICATION_PDF"}
  <PdfPlayerComponent sourceUrl={url} />
{:else if mediaType === "UNSUPPORTED"}
  <p>This file format cannot be displayed.</p>
{:else}
  <p>Some error</p>
{/if}

<style>
  video,
  audio,
  img {
    max-width: 100%;
    height: auto;
  }

  audio {
    display: block; /* Ensure the audio element is displayed as a block element */
    width: 100%; /* Make sure it takes the full width of its container */
  }
</style>
