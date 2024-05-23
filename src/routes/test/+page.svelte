<!-- <script>
	import GoogleLoginButton from './../../lib/components/googlebutton/GoogleLoginButton.svelte';
  import Modal from '../../lib/components/modal/Modal.svelte';

  let isModalOpen = false;

  function openModal() {
    isModalOpen = true;
  }

  function closeModalCallback() {
    console.log('Modal closed');
    isModalOpen = false;
  }
</script>

<style>
  .container {
    padding: 16px;
    text-align: center;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
  }
</style>

<div class="container">
  <h1>My Svelte App</h1>
  <button on:click="{openModal}">Open Modal</button>

  <Modal isOpen={isModalOpen} closeCallback={closeModalCallback}>
    <h2>Modal Title</h2>
    <p>This is a modal window with a close callback.</p>
  </Modal>
</div> -->

<script>
  import GoogleLoginButton from '../../lib/components/googlebutton/GoogleLoginButton.svelte';
</script>

<GoogleLoginButton/>