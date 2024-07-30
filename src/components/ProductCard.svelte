<script>
    import { createEventDispatcher } from 'svelte';
  
    export let product;
  
    const dispatch = createEventDispatcher();
  
    function viewDetails() {
      dispatch('viewDetails', product.id);
    }
  
    let isFavorite = false;
  
    function toggleFavorite() {
      isFavorite = !isFavorite;
    }
  </script>
  
  <div class="bg-white rounded-lg shadow-md p-4">
    <img src={product.image} alt="Product Image" class="w-400 h-40 object-cover">
    <div class="mt-4">
      <h2 class="text-lg font-bold text-gray-800">{product.title}</h2>
      <p class="text-gray-600">${product.price.toFixed(2)}</p>
      <p class="text-gray-600">Category: {product.category}</p>
      <div class="flex items-center">
        {#each Array(5) as _, i}
          <i class={i < Math.round(product.rating.rate) ? 'fas fa-star text-yellow-400' : 'far fa-star'}></i>
        {/each}
        <span class="ml-2 text-gray-600">({product.rating.count} reviews)</span>
      </div>
      <div class="flex items-center justify-between mt-2">
        <button on:click={viewDetails} class="mt-2 text-blue-500">View Details</button>
        <button on:click={toggleFavorite} class="text-gray-500">
          <i class={isFavorite ? 'fas fa-heart text-red-500' : 'far fa-heart'}></i>
        </button>
      </div>
    </div>
  </div>