<script lang="ts">
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
	import Bar from "./Bar.svelte";
    export let title : string;
</script>

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/x-icon" href="favicons/favicon.ico" />
		<title>{title}</title>
		<Bar/>
	</head>
	<body class="bg-base">
		<Header/>
		<main>
			<slot />
			<div>
				<p class="text-center">{title.toLowerCase()} page! in progress.</p>
			</div>
		</main>
		<Footer/>
	</body>
</html>