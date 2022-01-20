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
import PageHeader from "../components/PageHeader";

const data = new Array(50).fill().map((value, index) => ({
  id: index,
  title: faker.lorem.words(5),
  Authors: `${faker.name.firstName()}, ${faker.name.firstName()}, ${faker.name.firstName()}`,
  image: faker.image.image(),
}));

const Grids = () => (
  <Grid container spacing={2}>
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
                {val.title.toUpperCase()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.Authors}
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
    <>
      <PageHeader title="List Of Cards" />
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
          height={450}
          itemCount={data.length}
          itemSize={50}
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
    </>
  );
}

export default List;
