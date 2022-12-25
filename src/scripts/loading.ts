import { atom } from 'nanostores';
export const loading = atom(false);

let timeout: NodeJS.Timeout;

window.addEventListener('flamethrower:router:fetch', (e) => {
    timeout = setTimeout(() => {
        loading.set(true)
    } , 0)
});

window.addEventListener('flamethrower:router:end', (e) => {
    clearTimeout(timeout);
    setTimeout(() => {
        loading.set(false)
    } , 400)
});