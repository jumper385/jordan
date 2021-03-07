<script context="module">
    export async function preload(page) {
        let { slug } = page.params;

        let _relations = await this.fetch("apiv1/project_inventory?" + new URLSearchParams({inventory: `${slug}`}))

        let { project_inventory, project, inventory } = await await _relations.json();

        let project_reduced = project.reduce((prev, curr ) => {
            return {
                ...prev,
                [curr.id]: {...curr}
            }
        }, {})

        let inventory_reduced = project.reduce((prev, curr ) => {
            return {
                ...prev,
                [curr.id]: {...curr}
            }
        }, {})

        let compiled = project_inventory.map(e => ({
            ...e,
            project: project_reduced[e.project],
            inventory: inventory_reduced[e.inventory],
        }))

        compiled = {
            inventory: inventory,
            project_inventory: compiled
        }

        console.log(compiled);

        return { compiled };
    }
</script>

<script>
    export let compiled;

</script>

<h2>{compiled.inventory[0].description}</h2>
<p>{compiled.inventory[0].name}</p>

<table>
    <thead>
        <th>Project ID</th>
        <th>Project Name</th>
        <th>Project Description</th>
        <th>Part Count</th>
    </thead>
    <tbody>
        {#each compiled.project_inventory as item}
        <tr>
            <td><a href='projects/{item.project.id}'>#{item.project.id}</a></td>
            <td>{item.project.title}</td>
            <td>{item.project.description}</td>
            <td>{item.count}</td>
        </tr>
        {/each}
    </tbody>
</table>