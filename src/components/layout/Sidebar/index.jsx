import { Box, Button, TextField } from "@mui/material";
import Menu from "./components/Menu";
import İmageLogo from "../../../assets/image/logoTS.svg";
import styles from "./Sidebar.module.css";
import AvatarIcon from "./components/AvatarIcon.jsx";
import { Search } from "@mui/icons-material";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../services/themeOptions.js";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setUserName } from "../../../redux/slices/userSlice.js";
const Sidebar = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.themeOptions.sidebar);

  const navigate = useNavigate();
  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5001/user/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
        console.log("API Response:", data);
        dispatch(setUserName(data.setUserName));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <button
        onClick={handleSidebar}
        className="no-border"
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
          cursor: "pointer",
          position: "absolute",
          left: sidebar ? "260px" : "75px",
          marginTop: "380px",
        }}
      >
        {sidebar ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </button>

      <Box
        sx={{
          width: sidebar ? "310px" : "80px  ",
          height: "100vh",
          boxShadow: "0px 0px 6px #00000024",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {sidebar && (
          <div className={styles.logo}>
            <img src={İmageLogo} alt="" />
          </div>
        )}

        {sidebar && (
          <div>
            <AvatarIcon fullName={user?.fullName} userName={user?.userName} />
          </div>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            border: "1px solid #0000001F",
            margin: "12px 12px",

            borderRadius: "2px",
          }}
        >
          <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="search-input" label="Ara..." variant="standard" />
        </Box>

        <Menu />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "0 12px",
          }}
        ></Box>

        <Box sx={{ flexGrow: 1 }}></Box>

        <Box
          sx={{
            padding: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              navigate("/ayarlar");
            }}
            variant="outlined"
            startIcon={
              <SettingsApplicationsIcon
                sx={{
                  display: sidebar ? "flex" : "none",
                  alignItems: sidebar ? "center" : "none",
                  justifyContent: sidebar ? "center" : "none",
                }}
              />
            }
          >
            {sidebar && "Ayarlar"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
