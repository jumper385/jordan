<script context='module'>
    export async function preload(page, session) {
		const res = await this.fetch(`apiv1/projects`);
		const { projects } = await res.json();
        
		return { projects };
	}
</script>

<script>
    export let projects;
</script>

<div>
    <h1>Current Projects</h1>
</div>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Title</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {#each projects as project}
        <tr>
            <td><a href='projects/{project.id}'>#{project.id}</a></td>
            <td>{project.author}</td>
            <td>{project.title}</td>
            <td>{project.description}</td>
        </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        text-align: left;
    }
    td, th {
        padding:3pt 6pt;
    }
</style>