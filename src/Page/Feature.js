import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { featureList } from "../Data/data";

function Feature() {
  return (
    <div>
      <Box sx={{ textAlign: "center", mt: 10 }} id='feature'>
        <Typography variant="h6" sx={{ fontFamily: "cursive" }}>
          Manage your entire community <br /> in a single system
        </Typography>
        <Typography sx={{ fontFamily: "monospace", mt: 3 }}>
          who is Nextcent suitable for?
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          pt:10
        }}
      >
        {featureList.map((item) => {
          return (
            <Card
             className="Card"
              sx={{
                width: 300,
                height:280,
                ml: 5,
                mt:5,
                bgcolor:'lightcoral',
                
                "@media (max-width: 600px)": { ml: 0,  },
              
                textAlign: "center",
              }}
            >
              <CardMedia sx={{ textAlign: "center" }}>{item.Icon}</CardMedia>
              <CardContent>
                <Typography variant="h5" sx={{ pb: 1, fontFamily:'cursive' }}>
                  {item.Title}{" "}
                </Typography>
                <Typography variant="p" sx={{fontFamily:'cursive'}}> {item.Text} </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </div>
  );
}

export default Feature;
