<script>
    //import { pb } from './stores.js';
    import PocketBase from 'pocketbase';
    const pb = new PocketBase('http://127.0.0.1:8090');
    /*
    async function getFile() {
        const record = await pb.collection('content').getOne('racpwenm0aq2rdz');
        return "";
        if (record.ok) {
            return pb.getFileUrl(record, record.documents[0]);
        } else {
            console.error('db error: could not find ' + record);
            return ""; 
        }
    }
    let promise = getFile();
    */
</script>

<div>
    <nav class="flex justify-between p-6 md:p-8">
        <a class="flex justify-start items-center text-center w-10 h-10" href="/">
            <img src="http://127.0.0.1:8090/api/files/content/racpwenm0aq2rdz/home_itkGien5BL.svg" alt="home">
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