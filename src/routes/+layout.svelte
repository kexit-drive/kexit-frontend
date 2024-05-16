<script>
  import { fetchService } from "$lib/fetchService";

  async function getCurrentUser() {
    try {
      const user = await fetchService("/user/current", "GET");
      console.log(user);
    } catch(error) {
      console.log("exception raised" + error);
      return 
    }
  }

  // let userAuthorized = null;
  // (async () => {await getCurrentUser();})();
</script>

<nav>
  <button on:click={getCurrentUser}>User</button>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/settings">Settings</a>
  <a href="/me">Profile</a>
  <a href="/api/logout">Logout</a>
</nav>

<slot></slot>
