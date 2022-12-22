<script>
    import { getFile } from './stores.ts';
    let promise = getFile('ael1ai2ju014k72');
</script>

<div>
    <nav class="flex justify-between p-6 md:p-8">
        <a class="flex justify-start items-center text-center w-10 h-10" href="/">
            {#await promise then url}
                <img src={url} alt="home">
            {/await}
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