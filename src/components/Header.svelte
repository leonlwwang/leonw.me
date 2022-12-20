<script>
    import PocketBase from 'pocketbase';
    const pb = new PocketBase('http://127.0.0.1:8090');

    async function getImg() {
        const record = await pb.collection('content').getOne('ael1ai2ju014k72');
        const url = pb.getFileUrl(record, record.file);
        return url;
    }
    let promise = getImg();
</script>

<div>
    <nav class="flex justify-between p-6 md:p-8">
        <a class="flex justify-start items-center text-center w-10 h-10" href="/">
            {#await promise}
                <p>loading...</p>
            {:then url}
                <img src={url} alt="">
            {:catch error}
                <p>{error}</p>
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