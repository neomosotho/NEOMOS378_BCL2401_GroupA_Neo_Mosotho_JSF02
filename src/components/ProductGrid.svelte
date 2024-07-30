<!-- src/components/ProductGrid.svelte -->
<script>
    import ProductCard from './ProductCard.svelte';
    import { createEventDispatcher } from 'svelte';
  
    export let loading = true;
    export let products = []; 
  
    const dispatch = createEventDispatcher();
  
    function viewDetails(productId) {
      dispatch('viewDetails', productId);
    }
  </script>
  
  <div class="container mx-auto p-4">
    {#if loading}
      <div class="text-center text-gray-600 py-4">
        Loading products...
      </div>
    {:else}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each products as product (product.id)}
          <ProductCard {product} on:viewDetails={() => viewDetails(product.id)} />
        {/each}
      </div>
    {/if}
  </div>