<script lang="ts">
	import favicon from "$lib/assets/favicon.ico";
	import "$lib/styles/reset.css";
	import "$lib/styles/utils.css";
	import "$lib/styles/app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
