<!-- src/pages/Home.svelte -->
<script>
    import { onMount } from 'svelte';
    import { fetchCategories, fetchProducts, fetchSingleProduct } from '../api.js';
    import ProductGrid from '../components/ProductGrid.svelte';
    import FilterSort from '../components/FilterSort.svelte';
    import ProductModal from '../components/ProductModal.svelte';
    import { navigate } from 'svelte-routing';
  
    let products = [];
    let filteredProducts = [];
    let categories = [];
    let selectedCategory = '';
    let sortOrder = 'asc';
    let searchQuery = '';
    let loading = true;
    let modalOpen = false;
    let singleProduct = {};
  
    onMount(async () => {
      categories = await fetchCategories();
      await loadProducts();
    });
  
    async function loadProducts() {
      loading = true;
      products = await fetchProducts(selectedCategory);
      filterAndSortProducts();
      loading = false;
    }
  
    function filterAndSortProducts() {
      filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      filteredProducts.sort((a, b) => 
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      );
  
      filteredProducts = filteredProducts;
    }
  
    async function handleCategoryChange(event) {
      selectedCategory = event.detail;
      await loadProducts();
    }
  
    function handleSortChange(event) {
      sortOrder = event.detail;
      filterAndSortProducts();
    }
  
    function handleSearchChange(event) {
      searchQuery = event.detail;
      filterAndSortProducts();
    }
  
    function viewProductDetails(event) {
      const productId = event.detail;
      navigate(`/product/${productId}`);
    }
  
    $: {
      if (searchQuery || sortOrder) {
        filterAndSortProducts();
      }
    }
  </script>
  
  <FilterSort
    {categories}
    {selectedCategory}
    {sortOrder}
    {searchQuery}
    on:categoryChange={handleCategoryChange}
    on:sortChange={handleSortChange}
    on:searchChange={handleSearchChange}
  />
  
  <ProductGrid
  {loading}
  products={filteredProducts}
  on:viewDetails={viewProductDetails}
  />
  
  {#if modalOpen}
    <ProductModal {singleProduct} on:close={() => modalOpen = false} />
  {/if}