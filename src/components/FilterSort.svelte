<script>
    import { createEventDispatcher } from 'svelte';
  
    export let categories = [];
    export let selectedCategory = '';
    export let sortOrder = 'asc';
    export let searchQuery = '';
  
    const dispatch = createEventDispatcher();
  </script>
  
  <div class="container mx-auto p-4 flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <div>
        <label for="category" class="mr-2">Category:</label>
        <select id="category" bind:value={selectedCategory} on:change={() => dispatch('categoryChange', selectedCategory)}>
          <option value="">All</option>
          {#each categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select>
      </div>
      <div>
        <label for="sort" class="mr-2">Sort by:</label>
        <select id="sort" bind:value={sortOrder} on:change={() => dispatch('sortChange', sortOrder)}>
          <option value="Default">Price: Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div>
        <label for="search" class="mr-2">Search:</label>
        <input id="search" type="text" bind:value={searchQuery} on:input={() => dispatch('searchChange', searchQuery)} placeholder="Search products..." class="border rounded px-2 py-1">
      </div>
    </div>
  </div>