import React from "react";
import faker from "faker";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { FixedSizeList } from "react-window";

const data = new Array(50).fill().map((value, index) => ({
  id: index,
  title: faker.lorem.words(5),
  Authors: `${faker.name.firstName()}, ${faker.name.firstName()}, ${faker.name.firstName()}`,
  image: faker.image.image(),
}));

const Grids = () => (
  <Grid
    container
    spacing={3}
    // sx={{
    //   overflow: "hidden",
    //   "& .MuiGrid": {
    //     "&:hover": {
    //       overflowY: "scroll",
    //       overflowX: "hidden",
    //     },
    //     "::-webkit-scrollbar": {
    //       width: "5px",
    //       right: "2px",
    //     },
    //     "::-webkit-scrollbar-thumb": {
    //       backgroundColor: "red",
    //       color: "red",
    //     },
    //   },
    // }}
  >
    {data.map((val) => {
      return (
        <Grid card md={3} xs={6} key={val.id}>
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
              image={val.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                {val.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.Authors}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      );
    })}
  </Grid>
);
function List() {
  // const items = [...]
  // const data = {
  //   title: faker.lorem.words(5),
  //   Authors: faker.name(),
  //   image: faker.image.people(),
  // };
  return (
    <div
      style={{
        marginLeft: "20px",
        overflow: "hidden",
        "&:hover": {
          overflowY: "scroll",
          overflowX: "hidden",
        },
        "::-webkit-scrollbar": {
          width: "5px",
          right: "2px",
          backgroundColor: "red",
          color: "red",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "red",
          color: "white",
        },
      }}
    >
      <FixedSizeList
        width={1295}
        height={585}
        itemCount={data.length}
        itemSize={120}
        // style={{
        //   overflow: "hidden",
        //   "&:hover": {
        //     overflowY: "scroll",
        //     overflowX: "hidden",
        //   },
        //   "::-webkit-scrollbar": {
        //     width: "5px",
        //     right: "2px",
        //   },
        //   "::-webkit-scrollbar-thumb": {
        //     backgroundColor: "red",
        //     color: "red",
        //   },
        // }}
      >
        {Grids}
      </FixedSizeList>
    </div>
  );
}

export default List;
