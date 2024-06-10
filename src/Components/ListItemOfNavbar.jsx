import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function ListItemOfNavbar({ item, ref, scrollToSection }) {
  return (
    <ListItem MuiButton onClick={() => scrollToSection({ ref })}>
      <ListItemText
        primary={item}
        sx={{
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": { color: "red", transform: "scale(1.05)" }
        }}
      />
    </ListItem>
  );
}

export default ListItemOfNavbar;
