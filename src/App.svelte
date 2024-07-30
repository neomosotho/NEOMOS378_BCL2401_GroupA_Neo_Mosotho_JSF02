<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import ProductDetails from "./pages/ProductDetails.svelte";
  import Navbar from "./components/Navbar.svelte";

  export let url = "";
</script>

<Router {url}>
  <Navbar />
  <main>
    <Route path="/"><Home /></Route>
    <Route path="/product/:id" let:params>
      <ProductDetails id={params.id} />
    </Route>
  </main>
</Router>