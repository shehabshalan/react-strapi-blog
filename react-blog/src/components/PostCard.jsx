import React from "react";
import { Link } from "react-router-dom";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
function Post({ post, postId }) {
  return (
    <Card sx={{ mb: { xs: 0, md: 5 }, mt: { xs: 2 } }}>
      <CardHeader
        title={post.title}
        // subheader={toDateTime(post.datetime.seconds)}
      />
      <Link to={`/post/${postId}`}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.body.length <= 25
              ? post.body
              : `${post.body.slice(0, 300)} ...`}
          </Typography>
        </CardContent>
      </Link>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        {/* <IconButton aria-label="share">
          <Share />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}

export default Post;
