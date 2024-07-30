<script>
    import { onMount } from 'svelte';
    import { fetchSingleProduct } from '../api.js';
    import { navigate } from 'svelte-routing';

    export let id;
    let product = null;
    let loading = true;

    onMount(async () => {
        try {
            product = await fetchSingleProduct(id);
        } catch (error) {
            console.error('Error fetching product:', error);
            alert('Failed to load product details. Returning to home page.');
            navigate('/');
        } finally {
            loading = false;
        }
    });

    function goBack() {
        navigate('/');
    }
</script>

{#if loading}
    <div class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
        <p class="text-white text-2xl">Loading...</p>
    </div>
{:else if product}
    <div class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold mb-4">{product.title}</h2>
            <div class="flex flex-col md:flex-row">
                <img src={product.image} alt="Product Image" class="w-full md:w-1/2 h-64 object-contain mb-4 md:mb-0 md:mr-4">
                <div class="md:w-1/2">
                    <p class="text-2xl font-semibold text-gray-800 mb-4">${product.price.toFixed(2)}</p>
                    <div class="flex items-center mb-4">
                        {#each Array(5) as _, i}
                            <i class={i < Math.round(product.rating.rate) ? 'fas fa-star text-yellow-400' : 'far fa-star'}></i>
                        {/each}
                        <span class="ml-2 text-gray-600">({product.rating.count} reviews)</span>
                    </div>
                    <p class="text-gray-700 mb-4">{product.description}</p>
                    <p class="text-gray-600 mb-4">Category: {product.category}</p>
                    <button on:click={goBack} class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">Back to Products</button>
                </div>
            </div>
        </div>
    </div>
{/if}