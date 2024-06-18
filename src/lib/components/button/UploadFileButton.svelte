<script>
  import { fetchService } from "$lib/fetchService";
  import {page} from "$app/stores";

  let fileInput;

  async function handleFileUpload() {
    fileInput.click();
  }

  async function onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const directoryId = $page.url.searchParams.get('directoryId');
      const url = `/file/upload${directoryId === null ? "" : "?directoryId=" + directoryId}`;
      try {
        const response = await fetchService(
          url,
          "POST",
          {
            body: formData,
          }
        );
        console.log(`File successfully uploaded: ${response}`);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  }
</script>

<button class="import-button" on:click={handleFileUpload}> Upload file </button>
<input
  type="file"
  class="hidden-file-input"
  bind:this={fileInput}
  on:change={onFileSelected}
/>

<style>
  .import-button {
    padding: 0.75rem 1.5rem;
    margin: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    background-color: #0a951f;
    color: white;
    border: none;
    border-radius: 4px;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  .import-button:hover {
    background-color: #357ae8;
  }

  .import-button:active {
    background-color: #3367d6;
  }

  .hidden-file-input {
    display: none;
  }
</style>
