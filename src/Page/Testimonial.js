import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CakeIcon from '@mui/icons-material/Cake';
import CampaignIcon from '@mui/icons-material/Campaign';
import ContactlessIcon from '@mui/icons-material/Contactless';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Testimonial() {
  return (
    <Box id='testi'>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box sx={{ ml: 20, pt: 10, "@media (max-width: 600px)": { ml: 5 } }}>
            <img src="3dpic2.avif" alt="not found" width={"300px"} />
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box sx={{ p: 10, "@media (max-width: 600px)": { p: 5 } }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontFamily: "cursive" }}
            >
              How to design your site footer like <br /> we did
            </Typography>
            <Typography sx={{ pt: 2, fontFamily: "monospace" }}>
              the main body of a book or other piece of writing, as distinct
              from other material such as notes, appendices, and
              illustrations.the main body of a book or other piece of writing,
              as distinct from other material such as notes, appendices, and
              illustrations.the main body of a book or other piece of writing,
              as distinct from other material such as notes, appendices, and
              illustrations.the main body of a book or other piece of writing,
              as distinct from other material such as notes, appendices, and
              illustrations.
            </Typography>

            <button
              style={{
                backgroundColor: "lightgreen",
                color: "white",
                fontSize: "30px",
                height: "50px",
                border: 0,
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              Learn More...
            </button>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <Box sx={{ m: 20, '@media (max-width: 600px)':{m:5} }}>
              <img
                src="unsplashpic1 (2).jpg"
                alt="not found"
                width={"280px"}
                height={'250px'}
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={8}>
             <Box sx={{m:20, '@media (max-width: 600px)':{m:5}}}>
            <Typography sx={{fontFamily:'monospace'}}>
               "The main body of a book or other piece of writing, as distinct
              from other material such as notes, appendices, and
              illustrations.the main body of a book or other piece of writing,
              as distinct from other material such as notes, appendices, and
              illustrations.the main body of a book or other piece of writing,
              as distinct from other material such as notes, appendices, and
              illustrations.the main body of a book or other piece of writing,
              as distinct from other material such as notes, appendices, and
              illustrations.the main body of a book or other piece of writing,
              as distinct from other material such as notes, appendices, and
              illustrations.the main body of a book or other piece of writing,
              as distinct from other material such as notes, appendices, and
              illustrations.
            </Typography>

             <Typography variant="h6" sx={{color:'lightgreen',mt:2}}>Tim Smith</Typography>
              <Typography sx={{fontFamily:'monospace'}}> such as notesas distinct from other mate,</Typography>

              <Box sx={{mt:2, }}>
               <ScreenshotMonitorIcon  sx={{fontSize:'40px',mx:2}} />
               <AttachmentIcon  sx={{fontSize:'40px', mx:2}} />
               <CakeIcon sx={{fontSize:'40px',mx:2}} />
               <CampaignIcon sx={{fontSize:'40px',mx:2}} />
               <ContactlessIcon  sx={{fontSize:'40px',mx:2}} />
               <AllInclusiveIcon sx={{fontSize:'40px',mx:2}} />
               <Button sx={{color:'lightgreen', mb:5, fontSize:'18px'}}>Meet all customers <ArrowRightAltIcon sx={{fontSize:'40px', pb:1}} /> </Button>
             </Box>
            </Box>
             
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Testimonial;
