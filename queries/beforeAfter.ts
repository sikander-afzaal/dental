import { instance } from ".";



export const fetchBeforeAfter = async () => await instance.get('before-and-afters?populate=*').then(response => response.data)