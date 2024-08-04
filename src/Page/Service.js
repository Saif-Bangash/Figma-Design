import { Box, Typography } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ApiTwoToneIcon from "@mui/icons-material/ApiTwoTone";
import PatternTwoToneIcon from "@mui/icons-material/PatternTwoTone";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";
import FilterVintageSharpIcon from "@mui/icons-material/FilterVintageSharp";
import FireplaceSharpIcon from "@mui/icons-material/FireplaceSharp";
import CoronavirusSharpIcon from "@mui/icons-material/CoronavirusSharp";
function Service() {
  return (
    <>
      <Box sx={{textAlign:'center'}} id="service">
        <Typography variant="h6" sx={{ mb: 2, fontFamily: "cursive", }}>
          Our Client
        </Typography>
        <Typography sx={{ fontFamily: "monospace", }}>
          we have been working with some fortune 500+ client
        </Typography>
      </Box>

      <Box sx={{pt:5}}>
        <ul className="icons">
          <li>
            <AgricultureIcon sx={{fontSize:'30px'}} />
          </li>
          <li>
            <ApiTwoToneIcon sx={{fontSize:'30px'}} />
          </li>
          <li>
            <PatternTwoToneIcon sx={{fontSize:'30px'}} />
          </li>
          <li>
            <AcUnitSharpIcon sx={{fontSize:'30px'}} />
          </li>

          <li>
            <FilterVintageSharpIcon sx={{fontSize:'30px'}} />
          </li>
          <li>
            <FireplaceSharpIcon sx={{fontSize:'30px'}} />
          </li>
          <li>
            <CoronavirusSharpIcon sx={{fontSize:'30px'}} />
          </li>
        </ul>
      </Box>

      {/* <Box
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          mx:5,
        }}
      >
        <AgricultureIcon sx={{ fontSize: 50 }} />
        <ApiTwoToneIcon sx={{ fontSize: 50 }} />
        <PatternTwoToneIcon sx={{ fontSize: 50 }} />
        <AcUnitSharpIcon sx={{ fontSize: 50 }} />
        <FilterVintageSharpIcon sx={{ fontSize: 50 }} />
        <FireplaceSharpIcon sx={{ fontSize: 50 }} />
        <CoronavirusSharpIcon sx={{ fontSize: 50 }} />
      </Box> */}
    </>
  );
}

export default Service;
