<script context="module">
    export async function preload(page, session) {

        const res = await this.fetch(`http://api.reddit.com/r/blurrypicturesofcats`);

        const { data } = await res.json();

        let urls = data.children
            .map(e => {
                return e.data.url_overridden_by_dest
            })
            .filter(e => e != undefined)
            .filter(e => {
                return e.split('.').splice(-1) == 'jpg'
            })

        console.log(urls)

        let url = [
            urls[Math.floor(Math.random()*urls.length)],
            urls[Math.floor(Math.random()*urls.length)],
            urls[Math.floor(Math.random()*urls.length)]
        ]
        return { url }
    }
</script>

<script>
    export let url
</script>

<h1 style='text-align:center;'>UWAM Inventory Manager</h1>
<div style='display:grid; grid-template-columns:1fr 1fr 1fr'>
    <img src={url[0]} style='height:100pt; margin:0 auto;' alt='blurry cat' />
    <img src={url[1]} style='height:100pt; margin:0 auto;' alt='blurry cat' />
    <img src={url[2]} style='height:100pt; margin:0 auto;' alt='blurry cat' />
</div>

