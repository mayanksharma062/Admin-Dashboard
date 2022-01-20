import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function Grids({ id, title, image, Authors }) {
  return (
    <Grid container spacing={3}>
      <Grid card>
        <Card
          sx={{
            maxWidth: 300,
            minWidth: 300,
            ml: 2,
            mt: 3,
            maxHeight: 300,
            minHeight: 300,
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              {id}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {title.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Authors}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ color: "blue" }}>
              Share
            </Button>
            <Button size="small" sx={{ color: "blue" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Grids;
