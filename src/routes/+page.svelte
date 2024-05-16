<script>
	import { fetchService } from '$lib/fetchService';
	import { PUBLIC_BASE_URL } from '$env/static/public';
  import PlayerComponent from '../lib/components/PlayerComponent.svelte';
  
  let fileId = "664615ab9a66376c10e218e0";
  let mediaType = "";
  let show = false;
  $: url = `${PUBLIC_BASE_URL}/file/${fileId}/play` 

  async function getFileMediaType() {
    const responseJson = await fetchService(`/file/${fileId}/player-content-type`, "GET");
    return await responseJson.dataType;
  }

  async function playFile() {
    mediaType = await getFileMediaType();
    show = true
    console.log(fileId);
    console.log(url);
    console.log(mediaType);
  }
</script>

<main>
  <input type="text" bind:value={fileId} placeholder="fileId"/>
  <button on:click={playFile}>play file</button>
  {#if show}
    <PlayerComponent mediaType={mediaType} url={url}/>
  {/if}
  
</main>
