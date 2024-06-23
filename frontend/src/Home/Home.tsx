import * as React from "react";
import {
  Avatar,
  Box,
  CssBaseline,
  Grid,
  Paper,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import MapIcon from "@mui/icons-material/Map";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ReportIcon from "@mui/icons-material/Report";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90CAF9", // Light blue
    },
    secondary: {
      main: "#CE93D8", // Light purple
    },
    success: {
      main: "#81C784", // Green
    },
    info: {
      main: "#4FC3F7", // Teal
    },
    warning: {
      main: "#FFB74D",
    },
    error: {
      main: "#E57373",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

const AnimatedBox = styled(motion.div)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

function Home() {
  const navigation = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        sx={{
          height: "100vh",
          background: "linear-gradient(to right, #434343, #000000)",
        }}
      >
        <Grid
          item
          xs={2}
          sx={{
            backgroundColor: "#1E1E1E",
            padding: 2,
            borderRight: "2px solid #CE93D8",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <DashboardIcon />
            </Avatar>
            <Typography component="h1" variant="h5" color="primary">
              Logistics Manager
            </Typography>
          </Box>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalShippingIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Trucks" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <TripOriginIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Trips" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MapIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Facilities" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CalendarTodayIcon color="info" />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CompareArrowsIcon color="info" />
              </ListItemIcon>
              <ListItemText primary="Compare" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ReportIcon color="error" />
              </ListItemIcon>
              <ListItemText primary="Generate Report" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LogoutIcon color="error" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={10} sx={{ padding: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography component="h1" variant="h4" color="primary">
              Welcome to S.K Logistics Co.
            </Typography>
            <Box>
              <IconButton color="primary">
                <NotificationsIcon />
              </IconButton>
              <IconButton
                color="primary"
                onClick={() => {
                  navigation("/profile");
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Box>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AnimatedBox>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: theme.palette.primary.main,
                    color: "#FFFFFF",
                    border: "2px solid #90CAF9",
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6">Total Trucks</Typography>
                  <Typography variant="h4">24</Typography>
                  <LocalShippingIcon sx={{ fontSize: 50, mt: 2 }} />
                </Paper>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedBox>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: theme.palette.secondary.main,
                    color: "#FFFFFF",
                    border: "2px solid #CE93D8",
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6">Total Trips</Typography>
                  <Typography variant="h4">20</Typography>
                  <TripOriginIcon sx={{ fontSize: 50, mt: 2 }} />
                </Paper>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedBox>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: theme.palette.success.main,
                    color: "#FFFFFF",
                    border: "2px solid #81C784",
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6">Facilities</Typography>
                  <Typography variant="h4">8</Typography>
                  <MapIcon sx={{ fontSize: 50, mt: 2 }} />
                </Paper>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedBox>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: theme.palette.info.main,
                    color: "#FFFFFF",
                    border: "2px solid #4FC3F7",
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6">Total Earnings</Typography>
                  <Typography variant="h4">$84237</Typography>
                  <MonetizationOnIcon sx={{ fontSize: 50, mt: 2 }} />
                </Paper>
              </AnimatedBox>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" color="primary">
              Recent Activities
            </Typography>
            <Paper sx={{ p: 2, mt: 2 }}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocalShippingIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Truck HDWHW3G completed a trip"
                    secondary="1 hour ago"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <TripOriginIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="New trip added for Truck MXYXE31"
                    secondary="3 hours ago"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <MapIcon color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary="New facility added: A1 Fulfillment"
                    secondary="Yesterday"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <MonetizationOnIcon color="info" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Earnings updated: +$5000"
                    secondary="Yesterday"
                  />
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Home;
