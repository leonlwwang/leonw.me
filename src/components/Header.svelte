<script>
    import { onMount } from "svelte";
    var url = "";
    onMount(() => url = window.location.href);
    console.log(url);
</script>

<div>
    <nav class="flex justify-between p-6 md:p-8">
        <a class="flex justify-start items-center text-center w-10 h-10" href="/">
            <img src="http://127.0.0.1:8090/api/files/ud5g04me0pqfumi/ael1ai2ju014k72/home_SedA3EcajZ.svg" alt="home">
        </a>
        <ul class="flex justify-end items-center space-x-12 mr-4">
            <li>
                <a href="../about">About</a>
            </li>
            <li>
                <a href="../projects">Projects</a>
            </li>
            <li>
                <a href="../blog">Blog</a>
            </li>
        </ul>
    </nav>
</div>