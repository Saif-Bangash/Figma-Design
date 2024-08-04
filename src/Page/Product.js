import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Diversity1Icon from "@mui/icons-material/Diversity1";

function Product() {
  return (
    <Box id="product">
      <Grid container>
        <Grid item xs={12} lg={4}>
          <Box sx={{ ml: 20, pt:20, "@media (max-width: 600px)": { ml: 5, pt:5 } }}>
            <img src="3d pic.avif" alt="not found" width={"280px"} />
          </Box>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Box sx={{ p: 20, "@media (max-width: 600px)": { p: 5 } }}>
            <Typography variant="h6" sx={{ fontFamily: "cursive", fontWeight:'bold', }}>
              The Unseen of speanding three <br /> year at Pixelgrate
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

      <Grid container>
        <Grid item xs={12} lg={7}>
          <Box sx={{ ml: 20, pt:10, "@media (max-width: 600px)": { ml: 5} }}>
            {" "}
            <Typography variant="h5">
              Helping a local <br />
              <span style={{ color: "lightgreen" }}>
                {" "}
                business reinvent itself{" "}
              </span>{" "}
            </Typography>
            <Typography sx={{ fontFamily: "monospace", pt: 1 }}>
              as distinct from other material such as notes,
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: 4,
              columnGap: 3,
              m: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                mx: 7,
                "@media (max-width: 600px)": { mx: 0 },
              }}
            >
              <Typography>
                <Diversity1Icon
                  sx={{ fontSize: "35px", mr: 1, mt: 1, color: "lightgreen" }}
                />{" "}
              </Typography>
              <Typography sx={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  2,245,341
                </span>
                <span style={{ fontFamily: "monospace" }}>Members</span>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                mx: 7,
                "@media (max-width: 600px)": { mx: 0 },
              }}
            >
              <Typography>
                <Diversity1Icon
                  sx={{ fontSize: "35px", mr: 1, mt: 1, color: "lightgreen" }}
                />{" "}
              </Typography>
              <Typography sx={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  2,245,341
                </span>
                <span style={{ fontFamily: "monospace" }}>Members</span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                mx: 7,
                "@media (max-width: 600px)": { mx: 0 },
              }}
            >
              <Typography>
                <Diversity1Icon
                  sx={{ fontSize: "35px", mr: 1, mt: 1, color: "lightgreen" }}
                />{" "}
              </Typography>
              <Typography sx={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  2,245,341
                </span>
                <span style={{ fontFamily: "monospace" }}>Members</span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                mx: 7,
                "@media (max-width: 600px)": { mx: 0 },
              }}
            >
              <Typography>
                <Diversity1Icon
                  sx={{ fontSize: "35px", mr: 1, mt: 1, color: "lightgreen" }}
                />{" "}
              </Typography>
              <Typography sx={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  2,245,341
                </span>
                <span style={{ fontFamily: "monospace" }}>Members</span>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Product;
