<script>
  import {PUBLIC_BASE_URL} from "$env/static/public";

  export let name;
  export let fileId;
  export let onDeleteCallback;

  async function handleDelete() {
    const confirmed = confirm(`Do you want to delete ${name} ?`)
    if (confirmed) {
      await deleteFile(fileId);
      await onDeleteCallback();
    }
  }

  async function deleteFile(fileId) {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
      credentials: "include",
    }
    await fetch(`${PUBLIC_BASE_URL}/file/${fileId}`, requestOptions);
  }
</script>

<style>
  .delete-button {
    background-color: red;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
  }

  .delete-button:hover {
    background-color: darkred;
  }
</style>

<button class="delete-button" on:click={handleDelete}>
  Delete
</button>
