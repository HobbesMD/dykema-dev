import { writable } from 'svelte/store';

/** Id of the home-page section currently in view, used to highlight the nav. */
export const activeSection = writable('');
