import { randomElement } from "./array";

export const randomPhoto = async (subreddit) => {

    const res = await fetch(`http://api.reddit.com/r/${subreddit} `);

    const { data } = await res.json();
    
    let urls = data.children
        .map(e => {
            return e.data.url_overridden_by_dest
        })
        .filter(e => e != undefined)
        .filter(e => {
            return e.split('.').splice(-1) == 'jpg'
        })
    
    return randomElement(urls);

}