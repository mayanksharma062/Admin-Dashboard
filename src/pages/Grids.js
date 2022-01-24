import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function Grids({ id, title, image, Authors, style }) {
  return (
    <Grid card style={style}>
      <Card
        sx={{
          maxWidth: 300,
          minWidth: 300,
          ml: 1,
          mt: 1,
          // m: 3,
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
          {console.log(id)}
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
  );
}

export default Grids;
