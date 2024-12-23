import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels({ value, onChange }) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Kategori</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label="kategori"
          onChange={(e) => onChange(e.target.value)}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={"donanim"}>DONANIM</MenuItem>
          <MenuItem value={"yazilim"}>YAZILIM</MenuItem>
          <MenuItem value={"oyunlar"}>OYUNLAR</MenuItem>
          <MenuItem value={"yenilikler"}>YENİLİKLER</MenuItem>
          <MenuItem value={"yapay-zeka"}>YAPAY ZEKA</MenuItem>
          <MenuItem value={"front-end"}>FRONT-END </MenuItem>
          <MenuItem value={"back-end"}>BACK-END</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
