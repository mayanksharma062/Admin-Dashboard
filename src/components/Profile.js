import React, { useState } from "react";
import PageHeader from "./PageHeader";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import { Link, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

// import Person from "../profileIcon.jpg";
import Person from "../profileIcon.jpg";
import { blue, grey } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    primary: blue,
    mode: "dark",
  },
  components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: grey[900],
        },
      },
    },
  },
});

// var nameOfDesigner = "Lucy Lavender";

const ProfileCard = () => {
  const [nameOfDesigner, setNameOfDesigner] = useState("Lucy Lavender");
  const [postOfDesigner, setPostOfDesigner] = useState("Lead Developer");
  const [edit, setEdit] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [okayButton, setOkayButton] = useState(false);

  return (
    <React.Fragment>
      <ClickAwayListener
        onClickAway={() => {
          setEdit(false);
          setEditPost(false);
          setOkayButton(false);
        }}
      >
        <CardContent>
          <Typography sx={{ ml: 0, pl: 0 }}>
            <strong>Profile Details</strong>
            <Button variant="text" size="small" sx={{ ml: 11 }}>
              <ModeEditOutlineOutlinedIcon
                onClick={() => {
                  setEdit(true);
                  setEditPost(true);
                  setOkayButton(true);
                }}
                // onMouseup={() => setEdit(false)}
                fontSize="medium"
              />
              {/* </ClickAwayListener> */}
            </Button>
          </Typography>

          <br />
          <Avatar
            alt="Pic Of UI/UX"
            src={Person}
            sx={{
              width: 100,
              height: 100,
              ml: 10,
              mb: 1,
            }}
          ></Avatar>
          <div style={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "0.8125rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <ClickAwayListener onClickAway={(e) => console.log(e)}> */}

              {edit ? (
                // <ClickAwayListener onClickAway={() => setEdit(false)}>
                <input
                  type="text"
                  value={nameOfDesigner}
                  onChange={(e) => setNameOfDesigner(e.target.value)}
                  // onClick={(e) => setEditPost(true)}
                  style={{
                    border: 0,
                    // marginLeft: 75,
                    backgroundColor: "#212121",
                    color: "inherit",
                    textAlign: "center",
                    outline: "2px dotted white",
                  }}
                  onBlur={(e) => (e.target.style.outline = "none")}
                  // onDoubleClick={() => setEdit(true)}
                />
              ) : (
                <input
                  type="text"
                  value={nameOfDesigner}
                  onChange={(e) => setNameOfDesigner(e.target.value)}
                  onDoubleClick={(e) => {
                    e.target.readOnly = false;
                    e.target.style.outline = "2px dotted";
                  }}
                  // onClick={(e) => (e.target.readOnly = true)}
                  style={{
                    border: 0,
                    // marginLeft: 75,
                    backgroundColor: "#212121",
                    color: "inherit",
                    textAlign: "center",
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = "none";
                    e.target.readOnly = true;
                  }}
                  readOnly
                  // onDoubleClick={() => setEdit(true)}
                />
              )}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.8125rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Lead Developer */}
              {editPost ? (
                // <ClickAwayListener
                //   onClickAway={() => {
                //     setEditPost(false);
                //   }}
                // >
                <input
                  type="text"
                  value={postOfDesigner}
                  onChange={(e) => setPostOfDesigner(e.target.value)}
                  // onDoubleClick={(e) => {
                  //   e.target.readOnly = false;
                  //   e.target.style.outline = "2px dotted";
                  // }}
                  onClick={(e) => setEditPost(true)}
                  style={{
                    border: 0,
                    // marginLeft: 75,
                    backgroundColor: "#212121",
                    textAlign: "center",
                    outline: "2px dotted white",
                    color: "inherit",
                  }}
                  onBlur={(e) => (e.target.style.outline = "none")}
                />
              ) : (
                // </ClickAwayListener>
                <input
                  type="text"
                  value={postOfDesigner}
                  onChange={(e) => setPostOfDesigner(e.target.value)}
                  onDoubleClick={(e) => {
                    e.target.readOnly = false;
                    e.target.style.outline = "2px dotted";
                  }}
                  // onClick={(e) => (e.target.readOnly = true)}
                  style={{
                    border: 0,
                    // marginLeft: 75,
                    backgroundColor: "#212121",
                    textAlign: "center",
                    color: "inherit",
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = "none";
                    e.target.readOnly = true;
                  }}
                  // onFocus={(e) => (e.target.style.outline = "10px")}
                  readOnly
                  // onDoubleClick={() => setEdit(true)}
                />
              )}
            </Typography>

            <Typography display="block">
              {okayButton ? (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ fontSize: 12, mt: 1 }}
                    onClick={() => {
                      setEdit(false);
                      setEditPost(false);
                      setOkayButton(false);
                    }}
                  >
                    Edit Done
                  </Button>
                </>
              ) : null}
            </Typography>
          </div>
        </CardContent>
      </ClickAwayListener>

      <CardActions sx={{ display: "flex", justifyContent: "center", pt: 0 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ fontSize: 12 }}
        >
          Follow
        </Button>
        {/* </CardActions>
    <CardActions> */}
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ fontSize: 12 }}
        >
          Message
        </Button>
      </CardActions>
    </React.Fragment>
  );
};

const AboutCard = () => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ ml: 0, pl: 0 }}>
          <strong>About</strong>
        </Typography>
        <br />
        <Typography
          sx={{
            fontSize: "0.8125rem",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <HomeOutlinedIcon sx={{ fontSize: "medium", mr: 1 }} />
          <b>Lives In</b>:{" "}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "rgb(49 128 252)",
              fontSize: "0.8125rem",
              marginLeft: 4,
            }}
          >
            San Fransisco, LA
          </Link>
        </Typography>
        <Typography
          sx={{
            fontSize: "0.8125rem",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <WorkOutlineOutlinedIcon sx={{ fontSize: "medium", mr: 1 }} />
          <b>Works at </b> :
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "rgb(49 128 252)",
              fontSize: "0.8125rem",
              marginLeft: 4,
            }}
          >
            Material UI
          </Link>
        </Typography>
        <Typography
          sx={{
            fontSize: "0.8125rem",
            display: "flex",
            justifyContent: "left",
            // "&:hover": {
            //   textDecoration: "underline",
            //   color: "red",
            // },
          }}
        >
          <LocationOnOutlinedIcon sx={{ fontSize: "medium", mr: 1 }} />
          <b>Lives in: </b> {/* <div> */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "rgb(49 128 252)",
              fontSize: "0.8125rem",
              marginLeft: 4,
            }}
          >
            Boston
          </Link>
          {/* </div> */}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};

function Profile() {
  var Parameter = useLocation();
  return (
    <div>
      {console.log(Parameter)}
      <ThemeProvider theme={darkTheme}>
        <PageHeader title="Profile" Parameter={Parameter.pathname}></PageHeader>
        <Box sx={{ width: 300, m: 3 }}>
          {/* <Card variant="outlined">{card}</Card> */}
          <Card variant="outlined">
            <ProfileCard />
          </Card>
        </Box>
        <Box sx={{ width: 300, m: 3 }}>
          {/* <Card variant="outlined">{aboutCard}</Card> */}
          <Card variant="outlined">
            <AboutCard />
          </Card>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Profile;
