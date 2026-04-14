import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Box, Typography, Container, Paper } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Enero', ingresos: 27, gastos: 12 },
  { name: 'Febrero', ingresos: 24, gastos: 15 },
  { name: 'Marzo', ingresos: 28, gastos: 10 },
  { name: 'Abril', ingresos: 25, gastos: 14 },
];

function Estadisticas() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, #021026 0%, #081a34 100%)" }}>
      <Header />

      <Container sx={{ flex: 1, py: 6 }}>
        <Typography variant="h3" color="white" textAlign="center" gutterBottom>
          Estadísticas del clima 📊
        </Typography>

        <Paper sx={{ p: 4, mt: 4, borderRadius: 4, background: "rgba(15, 32, 54, 0.94)", border: "1px solid rgba(56, 189, 248, 0.16)" }}>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  borderRadius: 12,
                  border: "1px solid rgba(148,163,184,0.24)",
                  fontSize: 14,
                  color: "#ffffff",
                  padding: "8px 12px",
                }}
                itemStyle={{ color: "#ffffff" }}
              />
              <Bar dataKey="ingresos" fill="#38bdf8" name="Temperatura" />
              <Bar dataKey="gastos" fill="#f97316" name="Precipitación" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}

export default Estadisticas;
