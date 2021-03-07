<script>
import { randomPhoto } from "../helpers/reddit";

let fetchImage = (async() => {
    const url = await randomPhoto('engineeringmemes');
    return url
})();

</script>

<h1 style='text-align:center;'>UWAM Inventory Manager</h1>

{#await fetchImage}

<p style='text-align:center;'>Loading your meme...</p>

{:then data}

<div style='display:grid; grid-template-columns:1fr'>
    <img src={data} style='height:250pt; margin:0 auto;' alt='a funny engineering meme' />
</div>

<p style='text-align:center'><a href='{data}'>Original Meme Link</a></p>
    
{/await}

