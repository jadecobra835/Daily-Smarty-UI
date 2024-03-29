import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get( //'https://api.dailysmarty.com/posts'
            // Delete both of the items bellow this when dailysmarty is running again.
            'https://xanderjensen.devcamp.space/portfolio/portfolio_items',
            { withCredentials: true }
        ).then(response => {
            console.log(response.data.portfolio_items);
            dispatch({
                type: "SET_RECENT_POSTS",
                // payload: response.data.posts
                payload: response.data.portfolio_items
            })
        }).catch(error => {
            console.log("actions fetchRecentPost error", error);
        });

    }
}