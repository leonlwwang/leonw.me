<script lang="ts">
    export let tagName : string;
</script>

<a class="tag" href={"/tags/" + tagName}>{tagName}</a>

<style>
    .tag {
		border: 1px;
		border-style: solid;
		border-color: #E6A595;
		display: inline-block;
		text-transform: uppercase;
		font-size: 0.8rem;
		line-height: 1;
		padding: 0.2em 0.5em;
		margin-right: 0.8em;
		background-color: #E6A595;
		text-decoration: none;
		transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.5s;
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
</style>