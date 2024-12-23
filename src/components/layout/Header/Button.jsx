import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { KATEGORILER } from "../../../mock/categories";

const ButtonHeader = ({ ...props }) => {
  const navigate = useNavigate();

  return (
    <div {...props}>
      {KATEGORILER.map((kategori, index) => (
        <Button
          key={index}
          onClick={() => navigate(kategori.path)}
          color="black"
          variant="text"
        >
          {kategori.name}
        </Button>
      ))}
    </div>
  );
};

export default ButtonHeader;
