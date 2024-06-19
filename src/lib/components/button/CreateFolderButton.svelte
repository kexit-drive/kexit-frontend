<script>
  import { fetchService } from "$lib/fetchService";
  import {page} from "$app/stores";

  export let onCreateCallback;

  const createFolder = async () => {
    const name = prompt("Enter directory name: ")
    if (name === "") {
      // user pressed OK, but the input field was empty
      alert("Directory name must not be empty!")
    } else if (name) {
      const containingDirectoryId = $page.url.searchParams.get('directoryId');
      const url = "/file/create-directory";
      const response = await fetchService(url, "POST", {
        body: JSON.stringify({name, containingDirectoryId}),
        headers: {
          "Content-Type": "application/json",
        }
      });
      await onCreateCallback();
      console.log("Created directory with name " + name);
    }
  }
</script>

<button class="create-folder-button" on:click={createFolder}>Create folder</button>

<style>
  .create-folder-button {
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

  .create-folder-button:hover {
    background-color: #357ae8;
  }

  .create-folder-button:active {
    background-color: #3367d6;
  }

</style>
