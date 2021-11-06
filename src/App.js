import { Container, Typography } from "@material-ui/core";
import { BarraNavegacion, Tarjeta } from "./components";

function App() {
  return (
    <>
      <BarraNavegacion />
      <Container>
        <Typography variant="h6" gutterBottom>
          Edit this page
        </Typography>
        <Typography variant="h3" gutterBottom>
          React Templates
        </Typography>
        <Typography variant="body1">
          Blablablabla Blablablabla Blablablabla Blablablabla Blablablabla
          Blablablabla Blablablabla Blablablabla Blablablabla Blablablabla{" "}
        </Typography>

        <Tarjeta />
      </Container>
    </>
  );
}

export default App;
