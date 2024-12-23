import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ListItem = ({ item, activeTab, setActiveTab }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    !item.subItem && setActiveTab(item.id);
  };
  const sidebar = useSelector((state) => state.themeOptions.sidebar);

  const navigate = useNavigate();
  const openNewPage = (path) => {
    navigate(path);
  };

  return (
    <>
      <ListItemButton
        selected={activeTab === item.id}
        onClick={() => {
          handleClick();
          openNewPage(item.link);
        }}
      >
        <ListItemIcon>{item?.icon}</ListItemIcon>
        <ListItemText primary={sidebar && item?.name} />
        {item?.subItem && sidebar && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item?.subItem &&
            item.subItem.map((subItem, index) => (
              <ListItemButton
                onClick={() => {
                  setActiveTab(subItem.id);
                  openNewPage(subItem.link);
                }}
                selected={activeTab === subItem.id}
                key={index}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>{subItem.icon}</ListItemIcon>
                <ListItemText primary={sidebar && subItem.name} />
              </ListItemButton>
            ))}
        </List>
      </Collapse>
    </>
  );
};

export default ListItem;
