import "@mui/material";
import { Box, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "react-icons";
import "react-icons/bi";
import "react-icons/bs";
import "react-icons/md";
import "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";

import { useEffect } from "react";
import PrivateRoute from "./components/PrivateRoute";
import CreatePostView from "./components/views/CreatePostView";

import ExploreView from "./components/views/ExploreView";
import LoginView from "./components/views/LoginView";
import MessengerView from "./components/views/MessengerView";
import PostView from "./components/views/PostView";
import ProfileView from "./components/views/ProfileView";
import ReelsView from "./components/views/ReelsView"; // Import the ReelsView component
import SearchView from "./components/views/SearchView";
import SignupView from "./components/views/SignupView";
import { initiateSocketConnection } from "./helpers/socketHelper";

function App() {
  useEffect(() => {
    initiateSocketConnection();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <Box
            component="header"
            sx={{ backgroundColor: "primary.main", padding: 2 }}
          ></Box>
          <Container component="main" sx={{ flex: 1, py: 3 }}>
            <Routes>
              <Route path="/" element={<ExploreView />} />
              <Route path="/posts/:id" element={<PostView />} />
              <Route
                path="/posts/create"
                element={
                  <PrivateRoute>
                    <CreatePostView />
                  </PrivateRoute>
                }
              />
              <Route
                path="/messenger"
                element={
                  <PrivateRoute>
                    <MessengerView />
                  </PrivateRoute>
                }
              />
              <Route path="/search" element={<SearchView />} />
              <Route path="/users/:id" element={<ProfileView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/signup" element={<SignupView />} />
              <Route path="/reels" element={<ReelsView />} />{" "}
              {/* Add the route for ReelsView */}
            </Routes>
          </Container>
          <Box
            component="footer"
            sx={{ backgroundColor: "primary.main", padding: 2 }}
          ></Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
