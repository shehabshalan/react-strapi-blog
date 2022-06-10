import React from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import useFetch from "../hooks/useFetch";

function PostPage() {
  const { id } = useParams();
  const { loading, error, posts } = useFetch(
    `${process.env.REACT_APP_BASE_URL}/blogs/${id}`
  );

  if (loading) {
    return <Box>loading</Box>;
  }

  if (error) {
    return <Box>error</Box>;
  }

  if (!posts) {
    return <Box>no post</Box>;
  }
  return (
    <article
      style={{
        marginTop: "2rem",
        textAlign: "justify",
      }}
    >
      <>
        <Typography variant="h4" sx={{ mb: 4 }}>
          {posts.attributes.title}
        </Typography>
        {/* <p className="postDate">{post.datetime}</p> */}
        <Typography variant="body1">{posts.attributes.body}</Typography>
      </>

      {!posts && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </article>
  );
}

export default PostPage;
