import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
const Footer = () => {
  return (
    <div>
      <Grid
        className=" text-left mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3} sx={{padding:"8px 32px 3px"}}>
          <Typography
            className="pb-5 pl-7 "
            variant="h6"
            sx={{ fontSize: "20px" }}
          >
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button
              className="pb-5 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-5 pl-10 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-5 pl-10 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Press{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-5 pl-10 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Jobs{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{padding:"8px 32px 3px"}}>
          <Typography
            className="pb-5 pl-7"
            variant="h6"
            sx={{ fontSize: "20px" }}
          >
            {" "}
            Solutions{" "}
          </Typography>
          <div>
            <Button
              className="pb-5 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Marketing{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-5 pl-10 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Analytics{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-5 pl-10 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Commerce{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-5 pl-10 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Support{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{padding:"8px 32px 3px"}}>
          <Typography
            className="pb-5 pl-7 "
            variant="h6"
            sx={{ fontSize: "20px" }}
          >
            {" "}
            Documentation{" "}
          </Typography>
          <div>
            <Button
              className="pb-5 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Guides{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-5 pl-10 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              API Status{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{padding:"8px 32px 3px"}}>
          <Typography
            className="pb-5 pl-7 "
            variant="h6"
            sx={{ fontSize: "20px" }}
          >
            {" "}
            Legal{" "}
          </Typography>
          <div>
            <Button
              className="pb-5 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Claim{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-5 pl-10 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-5 pl-10 "
              variant="h6"
              sx={{ fontSize: "12px", padding: "8px 32px 3px" }}
              gutterBottom
            >
              {" "}
              Teams{" "}
            </Button>
          </div>
          
        </Grid>
        <Grid className="pt-20" item xs={12}>
            <Typography variant="body2" component="p" align="center">
                &copy; 2023 Tripathi. All rights reserved.
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Made with love
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Icons made by {' '}
                <Link href="https://www.freepik.com" color="inherit" underline="always">
                    Freepik {' '}
                </Link>
                from{' '}
                <Link href="https://www.flaticon.com" color="inherit" underline="always">
                    www.flaticon.com
                </Link>
            </Typography>

        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
