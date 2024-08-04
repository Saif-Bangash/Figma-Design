
import React from 'react'
import { Box , Grid, Typography } from '@mui/material'
function Home() {
  return (
    
      <Box id='home' sx={{pt:10}}> 
    <Grid container>
      <Grid item xs={12} lg={8}>
        <Box
          sx={{
            mt: 15,
            ml: 25,
            "@media (max-width: 600px)": { mt: 2, ml: 5 },
          }}
        >
          <Typography variant="h3" sx={{ mb: 2, fontFamily: "initial" }}>
            Lessons and insights <br />{" "}
            <span style={{ color: "lightgreen" }}>from 8 years</span>
          </Typography>
          <Typography sx={{ mb: 2, fontFamily: "monospace" }}>
            Where to grow your business as photographer site or soical
            media?
          </Typography>
          <button
            style={{
              backgroundColor: "lightgreen",
              color: "white",
              border: "0px",
              borderRadius: "5px",
              fontSize: "20px",
              padding: "10px",
            }}
          >
            Register
          </button>
        </Box>
      </Grid>

      <Grid item xs={12} lg={4}>
       <Box sx={{pl:2}}>
       <img
          src="3d-man.avif"
          className="img"
          alt="not found"
          width={"300px"}
          height={"300px"}
        />
       </Box>
      </Grid>
    </Grid>
  </Box>
   
  )
}

export default Home
