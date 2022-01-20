import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import person from "../lucy.jpg";
// import { DrawerItems } from "./DrawerItems";
// import AppBar from "@mui/material/AppBar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { Button, ListSubheader } from "@mui/material";
import { Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { ThemeProvider, createTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { red, pink, grey } from "@mui/material/colors";
import SearchBar from "./SearchBar";
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";
import SaareRoutes from "../routes/SaareRoutes";

import { Link } from "react-router-dom";
// import DataGridMaterialUI from "../components/DataGridMaterialUI";
// import DataGridMaterialUI from "./DataGridMaterialUI";

// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
// import { createTheme, ThemeProvider } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";

// const person = "../lucy.jpg";
const drawerWidth = 240;
// const darktheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

const theme = createTheme({
  palette: {
    primary: {
      main: "#1b2635",
    },
  },
});

function DrawerPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const [open, setOpen] = React.useState(false);

  // const [openForDashboard, setOpenForDashboard] = React.useState(false);
  // const [openForPages, setOpenForPages] = React.useState(false);
  // const [openForInvoices, setOpenForInvoices] = React.useState(false);
  // const [openForAuth, setOpenForAuth] = React.useState(false);
  // const [openForComponents, setOpenForComponents] = React.useState(false);

  //   const handleClickForComponents = () => {
  //     setOpenForComponents(!openForComponents);
  //   };

  // const handleClickForDashboard = () => {
  //   console.log("object");
  //   setOpenForDashboard(!openForDashboard);
  // };

  // const handleClickForPages = () => {
  //   setOpenForPages(!openForPages);
  // };
  // const handleClickForInvoices = () => {
  //   setOpenForInvoices(!openForInvoices);
  // };
  // const handleClickForAuth = () => {
  //   setOpenForAuth(!openForAuth);
  // };

  // const [value, setValue] = React.useState(0);

  const SingleListItems = (mainText, index = 0, recursiveArray = null) => {
    const [openElement, setOpenElement] = React.useState(false);
    const HandleClick = useCallback(() => {
      setOpenElement(!openElement);
    }, [openElement, setOpenElement]);

    // if (Array.isArray(mainText)) {
    //   mainText.map((text, index) => {
    //     let textArray = [...text];
    //     let heading = textArray[0];
    //     textArray.splice(0, 1);
    //     return SingleListItems(heading, index, textArray);
    //   });
    // } else {
    if (recursiveArray === null) {
      return (
        <>
          {/* <Router> */}
          {/* <Link
              to={`/${mainText}`}
              style={{ textDecoration: "none", color: "white" }}
            > */}
          <ListItemButton
            component={Link}
            to={`${mainText.to}`}
            sx={{ fontSize: "13px" }}
            key={mainText.title}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              {/* <InboxIcon /> */}
            </ListItemIcon>
            <ListItemText sx={{ fontSize: "13px" }} primary={mainText.title} />
          </ListItemButton>
          {/* </Link> */}
          {/* </Router> */}
          <CssBaseline />
        </>
      );
    } else if (recursiveArray !== null) {
      // lalu.map((text, index) => SingleListItems(text, index));
      return (
        <>
          {/* <ListItemButton onClick={eval(`handleClickFor${mainText}`)}> */}
          <ListItemButton onClick={HandleClick} key={mainText.title}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={mainText.title} />
            {/* {eval(`openFor${mainText}`) ? <ExpandLess /> : <ExpandMore />} */}
            {openElement ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            // in={eval(`openFor${mainText}`)}
            in={openElement}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" sx={{ pl: 2 }}>
              {recursiveArray.map((text, index) => {
                if (Array.isArray(text)) {
                  // return text.map((text, index) =>
                  //   SingleListItems(text, index, recursiveArray));
                  var textArray = [...text];
                  var mainText = textArray[0];
                  textArray.splice(0, 1);
                  return SingleListItems(mainText, index, textArray);
                } else {
                  return SingleListItems(text, index);
                }
              })}
            </List>
          </Collapse>
        </>
      );
      // }
    }
  };

  // const SingleItem = ({ name, children }) => {
  //   const [openElement, setOpenElement] = React.useState(false);
  //   const HandleClick = useCallback(() => {
  //     setOpenElement(!openElement);
  //   }, [openElement, setOpenElement]);
  //   return (
  //     <>
  //       <div>
  //         <ListItemButton onClick={HandleClick}>
  //           <ListItemIcon>
  //             <InboxIcon />
  //           </ListItemIcon>
  //           <ListItemText primary={name} />
  //           {openElement ? <ExpandLess /> : <ExpandMore />}
  //         </ListItemButton>
  //         <Collapse
  //           // in={eval(`openFor${mainText}`)}
  //           in={openElement}
  //           timeout="auto"
  //           unmountOnExit
  //         >
  //           <List component="div" sx={{ pl: 2 }}>
  //             {openElement &&
  //               (children ?? []).map((node) => <SingleItem {...node} />)}
  //           </List>
  //         </Collapse>
  //       </div>
  //     </>
  //   );
  // };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List sx={{ fontSize: "13px" }}>
        <ListSubheader
          component="div"
          sx={{ display: "flex", left: 0, backgroundColor: "inherit" }}
        >
          Pages
        </ListSubheader>

        {/* {SingleListItems(
          ["Dashboard", "Default", "Analytics", "Saas"],
          ["Pages", "Profile", "Settings", "Pricing", "Chat", "Blank Page"],
          "Projects",
          "Orders",
          "Invoices",
          "Tasks",
          "Calender",
          "Auth"
        )} */}

        {[
          { title: "Dashboard", to: "/dashboard" },
          { title: "Pages", to: "/pages" },
          { title: "Forms ", to: "/form" },
          { title: "List", to: "/List" },
          // { title: "Projects", to: "/projects" },
          // { title: "Orders", to: "/orders" },
          // { title: "Invoices", to: "/invoices" },
          // { title: "Tasks", to: "/tasks" },
          // { title: "Calender", to: "/calender" },
          // { title: "Auth", to: "/auth" },
          // { title: "Design Patterns", to: "/designPatters" },
        ].map((text, index) => {
          if (index === 0) {
            return (
              // <ListItem button key={text}>
              //   <ListItemIcon>
              //     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              //   </ListItemIcon>
              //     <ListItemText primary={text}></ListItemText>
              // </ListItem>

              <>
                {/* <ListItemButton onClick={handleClickForDashboard}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {openForDashboard ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton> */}
                {/* <Collapse in={openForDashboard} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="Default" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="Analytics" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="SaaS" />
                    </ListItemButton>
                  </List>
                </Collapse> */}
                {SingleListItems(text, index, [
                  { title: "Default", to: "dashboard/default" },
                  { title: "Analytics", to: "dashboard/analytics" },
                  { title: "Saas", to: "dashboard/saas" },
                ])}
              </>
            );
          } else if (index === 1) {
            return (
              <>
                {/* <ListItemButton onClick={handleClickForPages}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {openForPages ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openForPages} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="Pricing" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="Chat" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="Blank Page" />
                    </ListItemButton>
                  </List>
                </Collapse> */}

                {SingleListItems(text, index, [
                  { title: "Profile", to: "pages/profile" },
                  { title: "Settings", to: "pages/settings" },
                  [
                    { title: "Auth", to: "pages/auth" },
                    { title: "Sign In", to: "pages/auth/signIn" },
                    { title: "Sign Up", to: "pages/auth/signUp" },
                    { title: "Reset Password", to: "pages/auth/resetPassword" },
                    { title: "404 Page", to: "pages/auth/404Page" },
                    { title: "500 Page", to: "pages/auth/500Page" },
                  ],
                  // { title: "Pricing", to: "/pricing" },
                  // { title: "Chat", to: "/chat" },
                  // { title: "Blank Page", to: "/blankPage" },
                ])}
              </>
            );
          } else if (index === 2) {
            return SingleListItems(text, index, [
              { title: "Form", to: "forms/form" },
              { title: "First Step", to: "form/firstStep" },
              { title: "Second Step", to: "form/secondStep" },
              { title: "Third Step", to: "form/thirdStep" },
            ]);
          } else if (index === 4) {
            return (
              <>
                {/* <ListItemButton onClick={handleClickForInvoices}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {openForInvoices ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openForInvoices} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="List" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="Detail" />
                    </ListItemButton>
                  </List>
                </Collapse> */}
                {SingleListItems(text, index, [
                  { title: "List", to: `${text.title}/list` },
                  { title: "Detail", to: `${text.title}/detail` },
                ])}
              </>
            );
          } else if (index === 7) {
            return (
              <>
                {/* <ListItemButton onClick={handleClickForAuth}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {openForAuth ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openForAuth} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="SignIn" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="SignUp" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="Reset Password" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="404 Page" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary="500 Page" />
                    </ListItemButton>
                  </List>
                </Collapse> */}

                {SingleListItems(text, index, [
                  { title: "Sign In", to: `${text.title}/signIn` },
                  { title: "Sign Up", to: `${text.title}/signUp` },
                  {
                    title: "Reset Password",
                    to: `${text.title}/resetPassword`,
                  },
                  { title: "404 Page", to: `${text.title}/404Page` },
                  { title: "500 Page", to: `${text.title}/500Page` },
                ])}
              </>
            );
          } else if (index === 8) {
            return SingleListItems(text, index, [
              { title: "HOC", to: "/HOC" },
              { title: "Render Props Pattern", to: "/renderPropsPattern" },
              { title: "Hooks Pattern", to: "/hooksPattern" },
            ]);
          } else {
            return SingleListItems(text, index);
            // return (
            //   <ListItem button key={text}>
            //     <ListItemIcon>
            //       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            //     </ListItemIcon>
            //     <ListItemText primary={text} />
            //   </ListItem>
            // );
          }
        })}
      </List>
      <Divider />
      <List>
        <ListSubheader
          component="div"
          sx={{ display: "flex", left: 0, backgroundColor: "inherit" }}
        >
          Elements
        </ListSubheader>
        {[
          { title: "Components", to: "/components" },
          { title: "Charts", to: "/charts" },
          { title: "Forms", to: "/forms" },
          { title: "Tables", to: "/tables" },
          { title: "Icons", to: "/tables" },
          { title: "Maps", to: "/maps" },
        ].map((text, index) => {
          // return (
          //   <ListItem button key={text}>
          //     <ListItemIcon>
          //       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          //     </ListItemIcon>
          //     <ListItemText primary={text} />
          //   </ListItem>
          // );

          if (index === 0) {
            return SingleListItems(text, index, [
              { title: "Alerts", to: "/alerts" },
              { title: "Acordion", to: "/accordion" },
              { title: "Avatars", to: "/avatars" },
              { title: "Badges", to: "/badges" },
              { title: "Buttons", to: "/buttons" },
              { title: "Cards", to: "/cards" },
              { title: "Chips", to: "/chips" },
              { title: "Dialogs", to: "/dialogs" },
              { title: "Lists", to: "/lists" },
              { title: "Menus", to: "/menus" },
              { title: "Pagination", to: "/pagination" },
              { title: "Progress", to: "/progress" },
              { title: "Snackbars", to: "/snackbars" },
              { title: "Tooltips", to: "/tooltips" },
            ]);
          } else if (index === 3) {
            return SingleListItems(text, index, [
              { title: "Simple Table", to: "/simpleTable" },
              { title: "Advanced Table", to: "/advancedTable" },
              { title: "Data Grid", to: "/dataGrid" },
            ]);
          } else {
            return SingleListItems(text, index);
          }
        })}
      </List>
      <Divider />
      <List>
        <ListSubheader
          component="div"
          sx={{ display: "flex", left: 0, backgroundColor: "inherit" }}
        >
          Material App
        </ListSubheader>
        {["Documentation", "Changelogs"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Toolbar />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "fixed", fontSize: "13px" }}>
        <CssBaseline />
        <SearchBar />

        {/* <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar> */}

        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            fontSize: "13px",
          }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            className="Drawer"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                overflow: "hidden",
                background: pink[900],
                fontSize: "13px",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              overflow: "hidden",
              "& .MuiDrawer-paper": {
                // position: "relative",
                boxSizing: "border-box",
                width: drawerWidth,
                overflow: "hidden",
                background: grey[900],
                fontSize: "13px",
                "&:hover": {
                  overflowY: "scroll",
                  overflowX: "hidden",
                },
                "::-webkit-scrollbar": {
                  width: "5px",
                  right: "2px",
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "red",
                  color: red,
                },
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <ThemeProvider theme={theme}>
          <Box
            component="main"
            sx={{
              // flexGrow: 1,
              // p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              fontSize: "13px",
            }}
          >
            <SaareRoutes />
          </Box>
        </ThemeProvider>
      </Box>
      <Box
        // variant="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          left: "0",
          zIndex: 1300,
          position: "absolute",
          top: "630px",
          display: "flex",
          backgroundColor: grey[850],
        }}
      >
        <Paper
          sx={{
            position: "fixed",
            display: "flex",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          elevation={2}
        >
          <Box
            sx={{
              display: "flex",
              marginRight: "46px",
            }}
          >
            <Avatar
              alt="Pic Of UI/UX"
              src={person}
              sx={{ my: 1.2, ml: 1 }}
            ></Avatar>
            <Toolbar
              sx={{
                display: "flex",
                flexDirection: "column",
                py: 0.2,
              }}
            >
              <Typography sx={{ fontSize: "0.8125rem", margin: "5px" }}>
                Lucy Lavender
              </Typography>
              <Typography sx={{ fontSize: "0.7rem" }}>
                UI/UX Designer
              </Typography>
            </Toolbar>
          </Box>
          <Box>
            <Divider orientation="vertical" />
          </Box>
          <Box
            sx={
              {
                // marginTop: "20px",
                // marginDown: "20px",
                // marginRight: "20px",
                // marginLeft: "20px",
                // marginBottom: "2px",
              }
            }
          >
            <Button
              variant="text"
              sx={{
                color: "inherit",
                marginTop: "10px",
                marginBottom: "10px",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              Support
            </Button>
          </Box>
          <Box
          // sx={{
          //   marginTop: "20px",
          //   marginDown: "20px",
          //   marginRight: "20px",
          //   marginLeft: "20px",
          // }}
          >
            <Button
              variant="text"
              sx={{
                color: "inherit",
                marginTop: "10px",
                marginBottom: "10px",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              Services
            </Button>
          </Box>
          <Box
          // sx={{
          //   marginTop: "20px",
          //   marginDown: "20px",
          //   marginRight: "20px",
          //   marginLeft: "20px",
          // }}
          >
            <Button
              variant="text"
              sx={{
                color: "inherit",
                marginTop: "10px",
                marginBottom: "10px",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              Help Center
            </Button>
          </Box>
          <Box
          // sx={{
          //   marginTop: "20px",
          //   marginDown: "20px",
          //   marginRight: "20px",
          //   marginLeft: "20px",
          // }}
          >
            <Button
              variant="text"
              sx={{
                color: "inherit",
                marginTop: "10px",
                marginBottom: "10px",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              Terms Of Service
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
          // sx={{
          //   marginTop: "20px",
          //   marginDown: "20px",
          //   marginRight: "12px",
          //   marginLeft: "350px",
          // }}
          >
            <Button
              variant="text"
              sx={{
                color: "inherit",
                marginRight: "12px",
                marginTop: "10px",
                marginBottom: "10px",
                // mb: 1,
                // marginLeft: "20px",
              }}
            >
              2021-Material App
            </Button>
          </Box>
        </Paper>
      </Box>
      {/* <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            // sx={{ flexgrow: 1 }}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Support" />
            <BottomNavigationAction label="Help Center" />
            <BottomNavigationAction label="Privacy" />
            <BottomNavigationAction
              sx={{ flexgrow: 2 }}
              label="Terms Of Service"
            />
            <BottomNavigationAction label="2021-Material App" />
          </BottomNavigation>
        </Paper> */}
    </div>
  );
}

DrawerPage.propTypes = {
  window: PropTypes.string,
};

export default DrawerPage;
