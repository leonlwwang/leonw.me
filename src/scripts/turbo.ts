import * as Turbo from '@hotwired/turbo'
import { atom } from 'nanostores';

Turbo.start();
export let loading = atom<boolean>(false);

function onBeforeRender(event : any) : void {
    event.preventDefault();
    loading.set(true);
    event.detail.resume();
    setTimeout(() => {
        loading.set(false);
    }, 400);
}
  
document.addEventListener('turbo:load', (event : any) => {
    document.addEventListener('turbo:before-render', onBeforeRender, {
        once: true,
    })
})