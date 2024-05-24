<script>
  let fileInput;

  function handleFileUpload() {
    fileInput.click();
  }

  function onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      // Handle the selected file (e.g., upload it to a server or process it)
      console.log('Selected file:', file);
    }
  }
</script>

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

<button class="import-button" on:click={handleFileUpload}>
  Upload file
</button>
<input type="file" class="hidden-file-input" bind:this={fileInput} on:change={onFileSelected} />
