import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";

import dadosUsina from "../../data/dadosUsina.json";

import { PageContainer } from "./styles";

const Dashboard: React.FC = () => {
  const [selectedInterest, setSelectedInterest] = useState("tensao_V");

  return (
    <PageContainer>
      <AppBar className="Header" color="primary">
        <Toolbar>
          <img
            src="https://sharenergy.com.br/wp-content/uploads/2018/08/logo-Sharenergy-01.png"
            alt="SHARENERGY"
            className="HeaderLogo"
          />
        </Toolbar>
      </AppBar>
      <Typography className="Title" variant="h4">
        Grafico de dados da Usina
      </Typography>
      <Container className="Container">
        <FormControl className="FormContainer" component="fieldset">
          <FormLabel className="FormLabel" component="legend">
            Variável de interesse
          </FormLabel>
          <RadioGroup
            onChange={(e) => setSelectedInterest(e.target.value)}
            value={selectedInterest}
          >
            <FormControlLabel
              value="tensao_V"
              control={<Radio />}
              label="Tensão elétrica em volts"
            />
            <FormControlLabel
              value="corrente_A"
              control={<Radio />}
              label="Corrente elétrica em amperes"
            />
            <FormControlLabel
              value="potencia_kW"
              control={<Radio />}
              label="Potência gerada em kilowatts"
            />
            <FormControlLabel
              value="temperatura_C"
              control={<Radio />}
              label="Temperatura em graus Celsius"
            />
          </RadioGroup>
        </FormControl>
        <Paper elevation={4}>
          <VictoryChart width={800} height={300} theme={VictoryTheme.material}>
            <VictoryLine
              style={{
                data: { stroke: "#00a2a2" },
                parent: { border: "1px solid #eee" },
              }}
              data={dadosUsina}
              x="tempo_h"
              y={selectedInterest}
            />
          </VictoryChart>
        </Paper>
      </Container>
    </PageContainer>
  );
};

export default Dashboard;
