import { Typography } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";
function Feed({ posts }) {
  return (
    <>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
        All Blogs
      </Typography>
      {posts.map((post) => (
        <PostCard key={post.id} postId={post.id} post={post.attributes} />
      ))}
    </>
  );
}

export default Feed;
