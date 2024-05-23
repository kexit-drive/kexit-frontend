<script>
	import { fetchService } from '$lib/fetchService';
  import { onMount } from "svelte";
  import FileCard from "../lib/components/file/FileCard.svelte";

  let files = [];
  onMount(async () => {
    files = await fetchService("/file", "GET");
  });
</script>

<main>
  <button on:click={() => console.log("fndjknfkds")}>Import from google drive</button>
  <div class="file-list">
    {#each files as file}
      <FileCard title={file.filename} fileId={file.id} />
    {/each}
  </div>
</main>

<style>
  .file-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
  }
</style>
