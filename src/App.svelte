<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Navbar from "./components/Navbar.svelte";

  export let url = "";
</script>

<Router {url}>
  <Navbar />
  <main>
    <Route path="/"><Home /></Route>
  </main>
</Router>
