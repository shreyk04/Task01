import { IconButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
function Header({
  scrollToSection,
  homeRef,
  aboutRef,
  servicesRef,
  roomsRef,
  galleryRef,
  contactRef
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const handleOpenWhatsAppClick = () => {
    window.open("https://wa.link/at5ion", "_blank");
  };
  return (
    <div className="flex w-full  items-center justify-between px-6 py-2 sticky top-0 left-0 backdrop-blur-md z-10 bg-[rgba(0,0,0,0.2)] text-white">
      <div
        className="hover:text-[#D11D27]  cursor-pointer text-red-800 bg-[rgba(255,255,255,0.8)] backdrop-blur-sm px-4 py-2 rounded-sm "
        onClick={handleOpenWhatsAppClick}
      >
        Kingsukh Guest House
      </div>
      <IconButton
        id="menu-btn"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { xs: "block", md: "none" } }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon className="text-[#ec540e]" />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="w-64" role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem MuiButton onClick={() => scrollToSection(homeRef)}>
              <ListItemText
                primary="Home"
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "red", transform: "scale(1.05)" }
                }}
              />
            </ListItem>
            <ListItem MuiButton onClick={() => scrollToSection(aboutRef)}>
              <ListItemText
                primary="About"
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "red", transform: "scale(1.05)" }
                }}
              />
            </ListItem>
            <ListItem MuiButton onClick={() => scrollToSection(servicesRef)}>
              <ListItemText
                primary="Services"
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "red", transform: "scale(1.05)" }
                }}
              />
            </ListItem>
            <ListItem MuiButton onClick={() => scrollToSection(roomsRef)}>
              <ListItemText
                primary="Rooms"
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "red", transform: "scale(1.05)" }
                }}
              />
            </ListItem>
            <ListItem MuiButton onClick={() => scrollToSection(galleryRef)}>
              <ListItemText
                primary="Gallery"
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "red", transform: "scale(1.05)" }
                }}
              />
            </ListItem>
            <ListItem MuiButton onClick={() => scrollToSection(contactRef)}>
              <ListItemText
                primary="Contact"
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "red", transform: "scale(1.05)" }
                }}
              />
            </ListItem>
            <ListItem MuiButton>
              <Button />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <ul id="navbar" className="hidden md:flex items-center space-x-4">
        <li id="home" onClick={() => scrollToSection(homeRef)}>
          Home
        </li>
        <li onClick={() => scrollToSection(aboutRef)}>About</li>
        <li onClick={() => scrollToSection(servicesRef)}>Services</li>
        <li onClick={() => scrollToSection(roomsRef)}>Rooms</li>
        <li onClick={() => scrollToSection(galleryRef)}>Gallery</li>
        <li onClick={() => scrollToSection(contactRef)}>Contact</li>

        <Button />
      </ul>
    </div>
  );
}

export default Header;
