import { 
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
} from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get( //'https://api.dailysmarty.com/posts'
            // TEMPORARY: Delete both of the items bellow this when dailysmarty is running again.
            'https://xanderjensen.devcamp.space/portfolio/portfolio_items',
            { withCredentials: true }
        ).then(response => {
            // TEMPORARY
            // console.log(response.data.posts);
            console.log(response.data.portfolio_items);

            console.log(response.data.portfolio_items);
            dispatch({
                type: "SET_RECENT_POSTS",
                // TEMPORARY
                // payload: response.data.posts
                payload: response.data.portfolio_items
            })
        }).catch(error => {
            console.log("actions fetchRecentPost error", error);
        });

    }
}

// https://api.dailysmarty.com/search?q=rails

export function fetchPostsWithQuery(query) {
    return function(dispatch) {
        axios.get( //`https://api.dailysmarty.com/search?q=${query}`
            // TEMPORARY: Delete both of the items bellow this when dailysmarty is running again.
            `https://xanderjensen.devcamp.space/portfolio/portfolio_items/${query}`,
            { withCredentials: true }
        ).then(response => {
            // TEMPORARY
            // console.log(response.data.posts);
            console.log(response.data.portfolio_item);
            dispatch({
                type: "SET_RESULTS_POSTS",
                // TEMPORARY
                // payload: response.data.posts
                payload: response.data.portfolio_item
            })
        }).catch(error => {
            console.log("actions fetchRecentPost error", error);
        });

    }
}