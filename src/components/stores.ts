import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export async function getFile(fileID : string) {
    const record = await pb.collection('content').getOne(fileID);
    const url = pb.getFileUrl(record, record.file);
    return url;
}