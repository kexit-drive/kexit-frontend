<script>
  import { createEventDispatcher } from "svelte";

  export let isOpen = false;
  export let closeCallback = () => {};

  $: isActive = isOpen ? 'modal-active' : 'modal-hidden';

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch("close");
    closeCallback();
  }
</script>

<div class="{isActive}" on:click={closeModal}>
  <div class="modal-content" on:click|stopPropagation>
    <button class="close-btn" on:click={closeModal}>&times;</button>
    <slot></slot>
  </div>
</div>

<style>
  .modal-active {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-hidden {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
</style>
