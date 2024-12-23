import { Star } from "@mui/icons-material";
import React, { useState } from "react";
import ListItem from "../../../ui/ListItem";
import { List } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AirIcon from "@mui/icons-material/Air";

const SidebarData = [
  {
    id: 1,
    name: "Anasayfa",
    icon: <HouseIcon />,
    link: "/",
  },
  {
    id: 2,
    name: "Bildirimler",
    icon: <CircleNotificationsIcon />,
    link: "/bildirimler",
  },
  {
    id: 3,
    name: "Kategoriler",
    icon: <Star />,
    subItem: [
      {
        id: 3.1,
        name: " FPS Oyunları",
        icon: <SportsEsportsIcon />,
        link: "/kategori/fps-oyun",
      },
      { id: 3.2, name: "Filmler", icon: <AirIcon />, link: "/kategori/film" },
    ],
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <List
      sx={{ width: "100%" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {SidebarData.map((item) => (
        <ListItem
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          item={item}
        />
      ))}
    </List>
  );
};

export default Menu;
