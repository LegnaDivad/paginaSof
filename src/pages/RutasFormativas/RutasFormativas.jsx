import Layout from "../../components/Layout/Layout";
import "./RutasFormativas.css";
import ArcoRecrea from "../../components/ArcoRecrea/ArcoRecrea";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import MotionReveal from "../../components/animations/MotionReveal";

function RutasFormativas() {
  return (
    <Layout>
      <MotionReveal index={1}>
        <div className="rutas-formativas-header">
          <h1>Rutas Formativas</h1>
          <p>¡Conoce cada una de nuestras rutas formativas!</p>
        </div>
      </MotionReveal>

      <ArcoRecrea>
        <Card className="card" sx={{ maxWidth: 300 }}>
          <div className="card-content">
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#FC083B" }}
            >
              Rutas Formativas
            </Typography>
            <p>¡Conoce cada una de nuestras rutas formativas!</p>
          </div>
        </Card>
      </ArcoRecrea>
    </Layout>
  );
}

export default RutasFormativas;
