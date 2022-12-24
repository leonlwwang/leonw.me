<script lang="ts">
	import { onMount } from "svelte";
	
	let newPage : boolean = null;
	onMount(() => {
		console.log((window.location.href != document.referrer));
		newPage = (window.location.href != document.referrer);
	});
</script>

{#if newPage}
	<div></div>
{/if}