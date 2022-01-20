import React from "react";
import faker from "faker";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Grid } from "@mui/material";
import Grids from "./Grids";
import { FixedSizeList } from "react-window";
import PageHeader from "../components/PageHeader";

const data = new Array(50).fill().map((value, index) => ({
  id: index,
  title: faker.lorem.words(5),
  Authors: `${faker.name.firstName()}, ${faker.name.firstName()}, ${faker.name.firstName()}`,
  image: faker.image.image(),
}));

// const Grids = () => (
//     <Grid container spacing={2}>
//       {data.map((val) => {
//         return (
//           <Grid card md={3} xs={6} key={val.id}>
//             <Card
//               sx={{
//                 maxWidth: 300,
//                 minWidth: 300,
//                 ml: 2,
//                 mt: 3,
//                 maxHeight: 300,
//                 minHeight: 300,
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={val.image}
//                 alt="green iguana"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="p" component="div">
//                   {val.id}
//                 </Typography>
//                 <Typography gutterBottom variant="p" component="div">
//                   {val.title.toUpperCase()}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {val.Authors}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" sx={{ color: "blue" }}>
//                   Share
//                 </Button>
//                 <Button size="small" sx={{ color: "blue" }}>
//                   Learn More
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         );
//       })}
//     </Grid>
// );

// const Grids = ({ index, style }) => (
//   <div style={style} key={data[index].id}>
//     <Grid container spacing={3}>
//       <Grid card>
//         <Card
//           sx={{
//             maxWidth: 300,
//             minWidth: 300,
//             ml: 2,
//             mt: 3,
//             maxHeight: 300,
//             minHeight: 300,
//           }}
//         >
//           <CardMedia
//             component="img"
//             height="140"
//             image={data[index].image}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="p" component="div">
//               {data[index].id}
//             </Typography>
//             <Typography gutterBottom variant="p" component="div">
//               {data[index].title.toUpperCase()}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {data[index].Authors}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small" sx={{ color: "blue" }}>
//               Share
//             </Button>
//             <Button size="small" sx={{ color: "blue" }}>
//               Learn More
//             </Button>
//           </CardActions>
//         </Card>
//       </Grid>
//     </Grid>
//   </div>
// );

const gridList = ({index, style})=>{
  const {id, title, Authors, image} = data[index];
  return (
    <div style={style}>
      <Grids id={id} title={title} Authors={Authors} image={image}></Grids>
    </div>
  );
};

// const Grids = ({ index }) => {
//   return (
//     <div>
//       <p>{data[index].id}</p>
//       <p>{data[index].title}</p>
//       <p>{data[index].Authors}</p>
//       <img src={data[index].image} alt="LalalWowowow" />
//     </div>
//   );
// };

function List() {
  // console.log(data);
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
      // style={{
      //   marginLeft: "20px",
      //   overflow: "hidden",
      //   "&:hover": {
      //     overflowY: "scroll",
      //     overflowX: "hidden",
      //   },
      //   "::-webkit-scrollbar": {
      //     width: "5px",
      //     right: "2px",
      //     backgroundColor: "red",
      //     color: "red",
      //   },
      //   "::-webkit-scrollbar-thumb": {
      //     backgroundColor: "red",
      //     color: "white",
      //   },
      // }}
      >
        <FixedSizeList
          width={1295}
          height={450}
          itemCount={data.length}
          itemSize={320}
          // rowCount={data.length}
          // rowRenderer={({ index, style }) => {
          //   const singleData = data[index];
          //   return (
          //     <div style={style}>
          //       <Grid container spacing={2}>
          //         <Grid card key={data[index].id}>
          //           <Card
          //             sx={{
          //               maxWidth: 300,
          //               minWidth: 300,
          //               ml: 2,
          //               mt: 3,
          //               maxHeight: 300,
          //               minHeight: 300,
          //             }}
          //           >
          //             <CardMedia
          //               component="img"
          //               height="140"
          //               image={singleData.image}
          //               alt="green iguana"
          //             />
          //             <CardContent>
          //               <Typography gutterBottom variant="p" component="div">
          //                 {singleData.id}
          //               </Typography>
          //               <Typography gutterBottom variant="p" component="div">
          //                 {singleData.title.toUpperCase()}
          //               </Typography>
          //               <Typography variant="body2" color="text.secondary">
          //                 {singleData.Authors}
          //               </Typography>
          //             </CardContent>
          //             <CardActions>
          //               <Button size="small" sx={{ color: "blue" }}>
          //                 Share
          //               </Button>
          //               <Button size="small" sx={{ color: "blue" }}>
          //                 Learn More
          //               </Button>
          //             </CardActions>
          //           </Card>
          //         </Grid>
          //       </Grid>
          //     </div>
          //   );
          // }}
        >
          {gridList}
        </FixedSizeList>
      </div>
    </>
  );
}

export default List;
