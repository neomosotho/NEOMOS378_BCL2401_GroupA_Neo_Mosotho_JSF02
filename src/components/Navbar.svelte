<!-- Navbar.svelte -->
<script>
    let open = false;
  </script>
  
  <nav class="border border-slate-600 shadow-md p-4 flex justify-between">
    <div class="text-2xl font-extrabold text-slate-900">
      SwiftCraft
    </div>
    <div class="hidden lg:flex space-x-4">
      <a href="#" class="text-lg font-semibold">WishList</a>
      <i class="fas fa-shopping-cart"></i>
      <a href="#" class="text-lg font-semibold">LogIn</a>
    </div>
    <div>
      <button on:click={() => open = !open} class="lg:hidden text-black focus:outline-none bg-slate-700 p-2 rounded" aria-label="Toggle menu">
        <i class="fas fa-bars text-2xl"></i>
      </button>
    </div>
  </nav>
  
  {#if open}
    <div class="lg:hidden fixed inset-0 px-4 py-12 bg-white shadow-md" on:click={() => open = false}>
      <div class="flex flex-col border border-slate-600 shadow-md p-4">
        <a href="#" class="text-lg font-semibold">WishList</a>
        <i class="fas fa-shopping-cart"></i>
        <a href="#" class="text-lg font-semibold">LogIn</a>
      </div>
    </div>
  {/if}