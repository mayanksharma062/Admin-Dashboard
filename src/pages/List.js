import React from "react";
import faker from "faker";
import Grids from "./Grids";
import { FixedSizeGrid } from "react-window";
import PageHeader from "../components/PageHeader";

const data = new Array(50).fill().map((value, index) => ({
  id: index,
  title: faker.lorem.words(5),
  Authors: `${faker.name.firstName()}, ${faker.name.firstName()}, ${faker.name.firstName()}`,
  image: faker.image.image(),
}));

const rowCount = Math.floor(data.length / 4);
const columnCount = 4;
const gridList = ({ columnIndex, rowIndex, style }) => {
  const { id, title, Authors, image } =
    data[rowIndex * columnCount + columnIndex];

  return (
    <div style={style}>
      <Grids
        id={id}
        title={title}
        Authors={Authors}
        image={image}
        // style={style}
      ></Grids>
      {/* </Grid> */}
    </div>
  );
};

function List() {
  return (
    <>
      <PageHeader title="List Of Cards" />
      <div>
        <FixedSizeGrid
          columnCount={4}
          columnWidth={318}
          height={450}
          rowCount={rowCount}
          rowHeight={325}
          width={1295}
        >
          {gridList}
        </FixedSizeGrid>
      </div>
    </>
  );
}

export default List;
