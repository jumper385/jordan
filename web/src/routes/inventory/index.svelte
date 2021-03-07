<script context="module">
    export async function preload(page, session) {
        const res = await this.fetch(`apiv1/inventory`);
        const { inventory, count } = await res.json();
        return { inventory, count };
    }
</script>

<script>
    export let inventory;
</script>

<h1>Inventory</h1>

<table>
    <thead>
        <tr>
            <th>Item ID</th>
            <th>Item Description</th>
            <th>Item Count</th>
        </tr>
    </thead>
    <tbody>
        {#each inventory as item}
            <tr>
                <td><a href='inventory/{item.id}'>#{item.id}</a></td>
                <td>{item.description}</td>
                <td>{item.count}</td>
            </tr>
        {/each}
    </tbody>
</table>
