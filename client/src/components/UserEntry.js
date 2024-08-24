import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const UserEntry = ({ username }) => {
  return (
    <HorizontalStack justifyContent="space-between" key={username}>
      <HorizontalStack>
        <Link to={"/users/" + username} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <UserAvatar width={30} height={30} username={username} />
          <Typography sx={{ marginLeft: 1 }}>{username}</Typography> {/* Added margin */}
        </Link>
      </HorizontalStack>
    </HorizontalStack>
  );
};

export default UserEntry;
