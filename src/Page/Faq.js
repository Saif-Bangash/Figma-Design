import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Faq() {
  return (
    <Box id='faq'>
      <Box sx={{textAlign:'center' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontFamily: "cursive" }}
        >
          Caring is the new marketing
        </Typography>
        <Typography
          sx={{
           mx:60,
            pt: 2,
            fontFamily: "monospace",
            "@media (max-width: 600px)": { mx: 5 },
          }}
        >
          The main body of a book or other piece of writing, as distinct from
          other material such as notes, appendices, and illustrations.the main
          body of a book or other piece of writing, as distinct from other
          material such as notes, appendices, and illustrations.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          mt: 10,
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ width: 300, height: 220 }}>
          <CardMedia>
            <img src="pic1.jpg" width={300} />
          </CardMedia>
        </Card>

        <Card sx={{ width: 300, height: 220 }}>
          <CardMedia>
            <img src="pic2.jpg" width={300} height={220} />
          </CardMedia>
        </Card>

        <Card sx={{ width: 300, height: 220 }}>
          <CardMedia>
            <img src="pic3.jpg" width={300} height={220} />
          </CardMedia>
        </Card>
      </Box>

      <Box sx={{textAlign:'center', pt:10, mb:10}}>
          <Typography variant="h4" sx={{fontWeight:'bold', fontFamily:'cursive'}}>Pellentesque suscipit <br/> fringilla librero eu.</Typography>
          <Button sx={{bgcolor:'lightgreen',color:'white', fontSize:'20px', mt:2}}>Get a demo <ArrowRightAltIcon  sx={{fontSize:'40px', pb:1}} /> </Button>
      </Box>
    </Box>
  );
}

export default Faq;
