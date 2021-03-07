<script context="module">
    export async function preload(page) {
        let { slug } = page.params;

        let res = await this.fetch(
            "apiv1/project_inventory?" + new URLSearchParams({ project: slug })
        );

        let data = await res.json();

        let { project, project_inventory, inventory } = data;

        return { project, project_inventory, inventory, slug };
    }
</script>

<script>

    export let project, project_inventory, inventory
    let compiledData = project_inventory.map(e => {
        let item = inventory.filter(x => x.id == e.inventory)
        return {
            ...e, 
            inventory: item[0],
            project: project[0],
        }
    })
    
</script>

<h1>{project[0].title}</h1>
<small>{project[0].author}</small>
<p>{project[0].description}</p>

<h2>Bill of Materials</h2>

<table>
    <thead>
        <tr>
            <th>Item Code</th>
            <th>Item Description</th>
            <th>Item ID</th>
            <th>Amount</th>
        </tr>
    </thead>
    <tbody>
        {#each compiledData as item}
            <tr>
                <td><code>{item.inventory.name}</code></td>
                <td><code>{item.inventory.description}</code></td>
                <td><code><a href='inventory/{item.inventory.id}'>#{item.inventory.id}</a></code></td>
                <td><code>{item.count}</code></td>
            </tr>
        {/each}
    </tbody>
</table>