import React from "react";
import Feed from "./Feed";
import { Box } from "@mui/material";
import useFetch from "../hooks/useFetch";
function Home() {
  const { loading, error, posts } = useFetch(
    `${process.env.REACT_APP_BASE_URL}/blogs`
  );
  if (loading) {
    return <Box>Loading</Box>;
  }
  if (error) {
    return <Box>Error</Box>;
  }
  if (!posts) {
    return <Box>no blogs yet</Box>;
  }

  return (
    <Box flex={8} p={{ xs: 0, md: 2 }}>
      <Feed posts={posts} />
    </Box>
  );
}

export default Home;
