import {
  AppBar,
  Box,
 
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ color: "black", fontFamily: "cooper", flexGrow: 1 }}
      >
        Nexcent
      </Typography>
      <Divider />
      <ul className="Home2">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#service">Services</Link>
        </li>
        <li>
          <Link href="#feature">Feature</Link>
        </li>
        <li>
          <Link href="#product">Product</Link>
        </li>
        <li>
          <Link href="#testi">Testimonial</Link>
        </li>
        <li>
          <Link href="#faq">FAQ</Link>
        </li>
        <li>
          <button className="btn2">login</button>
        </li>
        <li>
          <button className="btn">Sign Up</button>
        </li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar sx={{ bgcolor: "whitesmoke", boxShadow: "none" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Typography
            variant="h4"
            sx={{ color: "black", fontFamily: "cooper", flexGrow: 1 }}
          >
            Nexcent
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="home">
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#service">Services</Link>
              </li>
              <li>
                <Link href="#feature">Feature</Link>
              </li>
              <li>
                <Link href="#product">Product</Link>
              </li>
              <li>
                <Link href="#testi">Testimonial</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>

              <button className="btn2">login</button>
              <button className="btn">Sign Up</button>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          {drawer}
        </Drawer>
        <Toolbar />
      </Box>
      
     

     

     
    </Box>
  );
};

export default Header;
