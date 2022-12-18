<script>
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
    export let title;
</script>

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/x-icon" href="favicons/favicon.ico" />
		<title>{title}</title>
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