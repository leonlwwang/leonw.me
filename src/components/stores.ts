import { onDestroy } from 'svelte';
import { readable } from 'svelte/store';
import PocketBase from 'pocketbase';

export const pb = readable(new PocketBase('http://127.0.0.1:8090'));

export function getItem(item : string) : string {
    var endpoint = "";
    const unsubscribe = pb.subscribe(async function(instance : PocketBase) {
        const record = await instance.collection('content').getOne(item);
        endpoint = instance.getFileUrl(record, record.file);
    });
    console.log(endpoint);
    if (endpoint == undefined) {
        console.warn("Error: no item '" + item + "' exists in database.");
    }
    onDestroy(unsubscribe);
    return endpoint;
}
