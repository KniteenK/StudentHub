import { Stack } from "@mui/material";
import React from "react";
import FindUsers from "./FindUsers";

import TopPosts from "./TopPosts";

const Sidebar = () => {
  return (
    <Stack spacing={2}>
      <FindUsers />
      <TopPosts />
    </Stack>
  );
};

export default Sidebar;
