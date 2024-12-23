import { Box } from "@mui/material";
import ButtonHeader from "./Button.jsx";
import stlyes from "./Header.module.css";

const Header = () => {
  return (
    <Box
      sx={{
        border: "1px solid #0000001F",
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div className={stlyes.Alt}>TÜM ALT BAŞLIKLAR</div>
      <div style={{}}>
        <ButtonHeader className={stlyes.ButtonDiv} />
      </div>
    </Box>
  );
};

export default Header;
