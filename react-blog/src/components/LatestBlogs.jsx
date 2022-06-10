import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function LatestBlogs() {
  const { loading, error, posts } = useFetch(
    `${process.env.REACT_APP_BASE_URL}/blogs`
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
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
        Latest Blogs
      </Typography>
      <Paper position="fixed">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {posts.slice(0, 3).map((post) => (
            <Link to={`/post/${post.id}`} style={{ color: "inherit" }}>
              <ListItem alignItems="flex-start">
                <ListItemText primary={post.attributes.title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default LatestBlogs;
