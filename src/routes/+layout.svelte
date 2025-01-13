<script>
  import "../app.css";
  let { children } = $props();
</script>

<nav>
  <ul class="flex space-x-8">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
  </ul>
</nav>

{@render children()}
