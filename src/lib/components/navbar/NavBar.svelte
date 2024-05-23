<script>
  export let links = [];
</script>

<style>
  nav {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem;
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }

  a:hover {
    text-decoration: underline;
  }

  .logo {
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
  }
</style>

<nav>
  <div class="nav-links">
    {#each links as { href, text }}
    <a href={href}>{text}</a>
    {/each}
  </div>
  <div class="logo">KexitDrive</div>
</nav>
