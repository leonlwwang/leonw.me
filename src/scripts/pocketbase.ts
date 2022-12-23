import PocketBase from 'pocketbase';

export const pb : PocketBase = new PocketBase('http://127.0.0.1:8090');

export async function getFile(fileID : string) : Promise<string> {
    const record : any = await pb.collection('content').getOne(fileID);
    const url : string = pb.getFileUrl(record, record.file);
    console.log(url);
    return url;
}