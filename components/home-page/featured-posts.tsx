import React from "react";
import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.scss";

interface FeaturedPostsProps {
  posts: any[]; // Replace 'any' with the actual type of 'posts'
}

function FeaturedPosts(props: FeaturedPostsProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
