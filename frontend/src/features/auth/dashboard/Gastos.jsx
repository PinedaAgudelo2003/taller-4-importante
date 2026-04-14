// features/views/Gastos.jsx
import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";

import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem
} from "@mui/material";

import { useState, useEffect } from "react";
import axios from "axios";

function Gastos() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [tipo, setTipo] = useState("ingreso");
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [historial, setHistorial] = useState([]);
  const [mostrarHistorial, setMostrarHistorial] = useState(false);

  // nombre bonito
  const nombre = user?.email
    ? user.email.split("@")[0].charAt(0).toUpperCase() +
      user.email.split("@")[0].slice(1)
    : "Usuario";

  // cargar gastos desde Mongo
  const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

  useEffect(() => {
    const fetchGastos = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/api/gastos/${user.email}`
        );
        setHistorial(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user?.email) {
      fetchGastos();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cantidad || !descripcion) {
      alert("Completa todos los campos");
      return;
    }

    const nuevoRegistro = {
      email: user.email,
      tipo,
      cantidad: Number(cantidad),
      descripcion,
      fecha: new Date().toLocaleDateString(),
    };

    try {
      await axios.post(`${BACKEND_URL}/api/gastos`, nuevoRegistro);

      setHistorial([...historial, nuevoRegistro]);
    } catch (error) {
      alert("Error guardando");
    }

    setCantidad("");
    setDescripcion("");
  };

  // RESUMEN (IGUAL)
  const totalIngresos = historial
    .filter((item) => item.tipo === "ingreso")
    .reduce((acc, item) => acc + item.cantidad, 0);

  const totalGastos = historial
    .filter((item) => item.tipo === "gasto")
    .reduce((acc, item) => acc + item.cantidad, 0);

  const balance = totalIngresos - totalGastos;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #0D1117 0%, #111827 100%)",
      }}
    >
      <Header />

      <Container sx={{ flex: 1, py: 6 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" color="white" gutterBottom>
            Gestiona tus gastos e ingresos
          </Typography>

          {/*  SOLO ESTO NUEVO */}
          <Typography color="white">
            Bienvenido {nombre} 👋
          </Typography>
        </Box>

        {/* TU DISEÑO ORIGINAL */}
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "flex-start" }}>

          <Box sx={{ flex: 2, minWidth: 300 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 400,
                gap: 3,
                p: 4,
                borderRadius: 3,
                background: "#161B22",
                border: "1px solid #1F2937",
              }}
            >
              <TextField
                label="Tipo"
                select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white",
                    background: tipo === "ingreso" ? "#052e16" : "#2a0f0f",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: tipo === "ingreso" ? "#22C55E" : "#EF4444",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: tipo === "ingreso" ? "#4ADE80" : "#F87171",
                  },
                  "& .MuiSvgIcon-root": {
                    color: tipo === "ingreso" ? "#22C55E" : "#EF4444",
                  },
                  label: {
                    color: tipo === "ingreso" ? "#22C55E" : "#EF4444",
                  },
                }}
              >
                <MenuItem value="ingreso">Ingreso</MenuItem>
                <MenuItem value="gasto">Gasto</MenuItem>
              </TextField>

              <TextField
                label="Cantidad"
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                fullWidth
                sx={{
                  input: { color: "white" },
                  label: { color: "#9CA3AF" },
                }}
              />

              <TextField
                label="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                fullWidth
                sx={{ input: { color: "white" }, label: { color: "#9CA3AF" } }}
              />

             <Button
              type="submit"
              variant="contained"
              sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #6366F1, #A78BFA)",
                  color: "white",
                  "&:hover": {
                  background: "linear-gradient(135deg, #4F46E5, #8B5CF6)",
                  }
                }}
                >
                  Guardar
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              minWidth: 250,
              p: 4,
              borderRadius: 3,
              background: "#161B22",
              border: "1px solid #1F2937",
              color: "white",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Resumen 📊
            </Typography>

            <Typography sx={{ color: "#22C55E" }}>
              Ingresos: ${totalIngresos}
            </Typography>

            <Typography sx={{ color: "#EF4444" }}>
              Gastos: ${totalGastos}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontWeight: "bold",
                color: balance >= 0 ? "#22C55E" : "#EF4444",
              }}
            >
              Balance: ${balance}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={() => setMostrarHistorial(!mostrarHistorial)}
            sx={{
              mt: 4,
              background: "linear-gradient(135deg, #6366F1, #A78BFA)",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {mostrarHistorial ? "Ocultar historial" : "Ver historial"}
          </Button>
        </Box>

        {mostrarHistorial && (
          <TableContainer
            component={Paper}
            sx={{
              mt: 4,
              background: "#161B22",
              border: "1px solid #1F2937",
              borderRadius: 3,
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#A78BFA", fontWeight: "bold" }}>
                    Tipo
                  </TableCell>
                  <TableCell sx={{ color: "#A78BFA", fontWeight: "bold" }}>
                    Cantidad
                  </TableCell>
                  <TableCell sx={{ color: "#A78BFA", fontWeight: "bold" }}>
                    Descripción
                  </TableCell>
                  <TableCell sx={{ color: "#A78BFA", fontWeight: "bold" }}>
                    Fecha
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {historial.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        color: item.tipo === "ingreso" ? "#22C55E" : "#EF4444",
                        fontWeight: "bold",
                      }}
                    >
                      {item.tipo}
                    </TableCell>

                    <TableCell sx={{ color: "white" }}>
                      ${item.cantidad}
                    </TableCell>

                    <TableCell sx={{ color: "white" }}>
                      {item.descripcion}
                    </TableCell>

                    <TableCell sx={{ color: "#9CA3AF" }}>
                      {item.fecha}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>

      <Footer />
    </Box>
  );
}

export default Gastos;