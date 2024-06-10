import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "./Button";
import { Box } from "@mui/material";

function Showcase({ image, heading, description, price }) {
  return (
    <div className="shadow-lg">
      <Card
        sx={{ display: "flex", width: "100%" }}
        className="flex flex-col md:flex-row"
      >
        <CardMedia
          component="img"
          sx={{
            width: {
              xs: "100%", // 100% width on extra-small and small screens
              md: "40%" // 40% width on medium and larger screens
            }
          }}
          image={image}
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: {
              xs: "100%", // 100% width on extra-small and small screens
              md: "60%" // 40% width on medium and larger screens
            }
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {heading}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ height: "auto" }}
            >
              {description}
            </Typography>
            <Typography sx={{ padding: "1rem" }}>
              Starting from Rs.{" "}
              <span className="font-bold text-[#6004d1]">{price}</span> /night
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <i className="ri-heart-fill text-[#f472b6]"></i>
            </IconButton>
            <IconButton aria-label="share" sx={{ marginRight: "80px" }}>
              <i className="ri-paint-fill text-[#c084fc] "></i>
            </IconButton>
            <Button />
          </CardActions>
        </Box>
      </Card>
    </div>
  );
}

export default Showcase;
