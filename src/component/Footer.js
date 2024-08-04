import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ApiIcon from "@mui/icons-material/Api";

function Footer() {
  return (
    <Box sx={{ bgcolor: "black", color: "white", }}>
      <Grid container>
        <Grid item xs={12} lg={4}>
          <Box sx={{ p: 10, pt: 10, '@media (max-width: 600)':{p:2} }}>
            <Typography variant="h4">Nextcent</Typography>
            <Typography sx={{ pt: 2 }}>Copyright@2024 Nextcent itd.</Typography>
            <Typography sx={{ pt: 2 }}>All right reserved</Typography>

            <AddCardIcon />
            <AcUnitIcon />
            <AccountBalanceIcon />
            <ApiIcon />
          </Box>
        </Grid>

        <Grid item xs={12} lg={2}>
          <Box sx={{ pl: 15, pt: 10, '@media (max-width: 600px)':{pl:10,pt:0} }}>
            <Typography variant="h6">Company</Typography>
            <ul className="footer">
              <li>Home</li>
              <li>Service</li>
              <li>Feature</li>
              <li>Product</li>
              <li>Testimonial</li>
            </ul>
          </Box>
        </Grid>

        <Grid item xs={12} lg={2}>
          <Box sx={{ pl: 15, pt: 10, '@media (max-width: 600px)':{pl:10, pt:2} }}>
            <Typography variant="h6">Support</Typography>
            <ul className="footer">
              <li>Help center</li>
              <li>Trem of Service</li>
              <li>Legal</li>
              <li>prvicey policy</li>
              <li>status</li>
            </ul>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4}>
            <Box sx={{m:10}}>
          <Typography sx={{mb:2}}>Stay up to date</Typography>
          <input type="text"   style={{borderRadius:'5px', width:'200px', height:25, backgroundColor:'grey', }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
