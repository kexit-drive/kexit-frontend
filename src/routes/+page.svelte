<script>
  import {fetchService} from '$lib/fetchService';
  import {onMount} from "svelte";
  import FileCard from "../lib/components/file/FileCard.svelte";
  import GoogleDriveImportButton from '../lib/components/button/GoogleDriveImportButton.svelte';
  import UploadFileButton from '../lib/components/button/UploadFileButton.svelte';
  import CreateFolderButton from "$lib/components/button/CreateFolderButton.svelte";
  import {page} from '$app/stores'
  import DirectoryCard from "$lib/components/file/DirectoryCard.svelte";

  let mounted = false;
  let files = [];

  $: directoryId = $page.url.searchParams.get('directoryId');

  const getFiles = async (directoryId) => {
    const url = `/file${directoryId === null ? "" : "?directoryId=" + directoryId}`;
    return await fetchService(url, "GET");
  }

  $: {
    (async() => {
      if (mounted) {
        console.log("each time update");
        files = await getFiles(directoryId);
      }
    })();
  }

  onMount(async () => {
    console.log("onMount");
    files = await getFiles(directoryId);
    mounted = true;
  })

</script>

<main>
  <GoogleDriveImportButton/>
  <UploadFileButton/>
  <CreateFolderButton/>
  <div class="file-list">
    {#each files as file}
      {#if file.isDirectory === true}
        <DirectoryCard name={file.filename} directoryId={file.id}/>
      {:else}
        <FileCard title={file.filename} fileId={file.id}/>
      {/if}
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
