'use client'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { navItems } from "@/constants/nav";
import Link from "next/link";
import { Container, Grid, Hidden } from "@mui/material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
     <Link href={'/'}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AGIS Institute
      </Typography>
      </Link>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <Link href={item.url} passHref>
              <ListItemButton sx={{ justifyContent: 'center' }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "#282a36", color: "#fff" }}>
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
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={4}>
            <Link href={'/'}>
              <Typography variant="h6" component="div" style={{ fontSize: '24px', fontWeight: 'bold',color:'#fff' }}>
              AGIS 
              </Typography>
              </Link>
            </Grid>
            <Hidden smDown>
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                {navItems.map((item) => (
                  <Link key={item.title} href={item.url} passHref>
                    <Button sx={{ color: "white", fontWeight: "bold" }}>{item.title}</Button>
                  </Link>
                ))}
              </Grid>
            </Hidden>
            <Grid item xs={4} sx={{ textAlign: 'end' }}>
              <Button
                component="a"
                href="mailto:rahul071572@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white", fontWeight: "bold", backgroundColor: '#a855f7' }}
              >
               contact
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
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
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Container>
  );
}
