<script>
	import { fetchService } from '$lib/fetchService';
  import { onMount } from "svelte";
  import FileCard from "../lib/components/file/FileCard.svelte";
  import GoogleDriveImportButton from '../lib/components/googlebutton/GoogleDriveImportButton.svelte';
  import UploadFileButton from '../lib/components/googlebutton/UploadFileButton.svelte';

  let files = [];
  onMount(async () => {
    files = await fetchService("/file", "GET");
  });
</script>

<main>
  <GoogleDriveImportButton/>
  <UploadFileButton/>
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
