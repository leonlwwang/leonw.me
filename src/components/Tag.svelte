<script lang="ts">
    export let tagName : string;
</script>

{#if tagName == "first post"}
	<a class="tag" class:tag1={true} href={"/tags/" + tagName}>{tagName}</a>
{:else if tagName == "rambling"}
	<a class="tag" class:tag2={true} href={"/tags/" + tagName}>{tagName}</a>
{:else if tagName == "music"}
	<a class="tag" class:tag3={true} href={"/tags/" + tagName}>{tagName}</a>
{:else if tagName == "game development"}
	<a class="tag" class:tag4={true} href={"/tags/" + tagName}>{tagName}</a>
{/if}

<style>
    .tag {
		display: inline-block;
		text-transform: uppercase;
		font-size: 0.8rem;
		line-height: 1;
		padding: 0.2em 0.5em;
		margin-right: 0em;
		text-decoration: none;
	}
	.tag:hover {
		border: 1px;
		border-style: solid;
		border-color: #2B2222;
		background-color: inherit;
		transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.5s;
	}
	a, a:visited {
		text-decoration: none;
		color: inherit;
	}
	/* FIRST POST tag */
	.tag1 {
		border: 1px;
		border-style: solid;
		border-color: white;
		background-color: white;
		transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.5s;
	}
	/* RAMBLING tag */
	.tag2 {
		border: 1px;
		border-style: solid;
		border-color: #FDFD96;
		background-color: #FDFD96;
		transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.5s;
	}
	/* MUSIC tag */
	.tag3 {
		border: 1px;
		border-style: solid;
		border-color: #FFC0CB;
		background-color: #FFC0CB;
		transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.5s;
	}
	/* GAME DEV tag */
	.tag4 {
		border: 1px;
		border-style: solid;
		border-color: #ACE1AF;
		background-color: #ACE1AF;
		transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.5s;
	}
</style>