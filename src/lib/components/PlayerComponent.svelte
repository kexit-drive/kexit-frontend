<script>
	import ImagePlayer from './image/ImagePlayer.svelte';
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
  <ImagePlayer {url} imageName = "some image name"/>
{:else if mediaType === "APPLICATION_PDF"}
  <PdfPlayerComponent sourceUrl={url} />
{:else if mediaType === "UNSUPPORTED"}
  <p>This file format cannot be displayed.</p>
{:else}
  <p>Some error</p>
{/if}
