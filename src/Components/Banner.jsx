import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <div className="w-full flex justify-center my-20 ">
      <Card
        sx={{
          boxShadow: "none",
          width: {
            xs: "90%",
            md: "100%"
          }
        }}
        className="flex gap-5 flex-col py-4 md:flex-row justify-around shadow-sm items-center"
      >
        <CardContent
          className="bg-blue-50 rounded-md w-[350px]"
          sx={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 2px 14px"
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#6004d1"
            }}
          >
            100+
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "24px" }}
          >
            Bookings Completed
          </Typography>
        </CardContent>
        <CardContent
          className="bg-blue-50 rounded-md w-[350px]"
          sx={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 2px 14px"
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: "30px", fontWeight: "bold", color: "#6004d1" }}
          >
            150+
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "24px" }}
          >
            Customers
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Banner;
