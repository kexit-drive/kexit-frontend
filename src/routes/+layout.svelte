<script>
  import '../nullstyles.css';
  import NavBar from "../lib/components/navbar/NavBar.svelte";

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/me", text: "Profile" },
    { href: "/api/logout", text: "Logout" },
  ];
</script>

<NavBar links={navLinks} />

<slot></slot>
