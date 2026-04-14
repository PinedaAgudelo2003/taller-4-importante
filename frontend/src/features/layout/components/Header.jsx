import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  //  USER STATE
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  //  NOMBRE BONITO
  const nombre = user?.email
    ? user.email.split("@")[0].charAt(0).toUpperCase() +
      user.email.split("@")[0].slice(1)
    : "";

  const menuItems = [
    { text: "Inicio", path: "/" },
    { text: "Gastos", path: "/gastos" },
    { text: "Metas", path: "/metas" },
    { text: "Estadísticas", path: "/estadisticas" },
    { text: "Acerca", path: "/acerca" },
    { text: "Clima", path: "/ApiRyC" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #0b1f3f, #142a56, #0c243f)",
          boxShadow: "0 10px 35px rgba(0,0,0,0.35)",
          borderBottom: "1px solid rgba(148,163,184,0.16)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          <Button
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textTransform: "none",
            }}
          >
            <CloudIcon sx={{ color: "#38bdf8" }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#f8fafc",
              }}
            >
              WeatherWorld
            </Typography>
          </Button>

          {/* BOTONES DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center"
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  textTransform: "none",
                  color: "#A5B4FC",
                  fontWeight: "bold",
                  "&:hover": { color: "#FFFFFF" },
                }}
              >
                {item.text}
              </Button>
            ))}

            {/*  LOGIN / LOGOUT */}
            {user ? (
              <>
                <Typography color="white">
                  {nombre}
                </Typography>

                <Button
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/login");
                    window.location.reload();
                  }}
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    fontWeight: "bold",
                    background: "#EF4444",
                    color: "white",
                  }}
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                onClick={() => navigate("/login")}
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #3B82F6, #A78BFA)",
                }}
              >
                Iniciar sesión
              </Button>
            )}
          </Box>

          {/* BOTÓN HAMBURGUESA */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 260,
            background: "#061426",
            height: "100%",
            color: "white",
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem disablePadding key={item.text}>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}

            {/* LOGIN / LOGOUT MOBILE */}
            {user ? (
              <ListItem
                button
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/login");
                  window.location.reload();
                }}
              >
                <ListItemText primary="Cerrar sesión" />
              </ListItem>
            ) : (
              <ListItem
                button
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Iniciar sesión" />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;