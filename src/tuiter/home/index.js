import React from "react";
import PostItem from './post_item.js'
import postsArray from './posts.json'
import TuitsList from "../tuits/index.js"
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
 return(
   <>
    <h4>Home</h4>
    <WhatsHappening/>
    <TuitsList/>
   </>
 );
};
export default HomeComponent;