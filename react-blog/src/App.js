import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import PostDetails from "./components/PostDetails";
import Home from "./components/Home";
import LatestBlogs from "./components/LatestBlogs";
import { Container, Stack } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/">
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Home />
              <LatestBlogs />
            </Stack>
          </Route>
          <Route path="/post/:id">
            <PostDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
