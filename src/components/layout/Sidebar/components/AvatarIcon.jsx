import { Stack } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarPhoto from "../../../../../src/assets/image/Screenshot_2023-05-13-15-00-01-730_com.whatsapp.jpg";

const AvatarIcon = ({ fullName, userName }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        alignItems: "center",
        padding: " 0 12px",
      }}
    >
      <Avatar alt={fullName} src={AvatarPhoto} />
      <div>
        <div
          style={{
            fontWeight: 500,
          }}
        >
          {fullName}
        </div>
        <div
          style={{
            opacity: 0.5,
            fontSize: 12,
            marginTop: 4,
          }}
        >
          @{userName}
        </div>
      </div>
    </Stack>
  );
};

export default AvatarIcon;
