import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Title from "./dashboard/title";

function createData(date, pulse) {
  return { date, pulse };
}

const PulseGraph = (props) => {
  const theme = useTheme();
  const [pulse, setPulse] = useState([]);

  useEffect(() => {
    db.collection("patients")
      .doc(props.uid)
      .collection("pulse")
      .onSnapshot((snapshot) => {
        setPulse(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const data = [];
  {
    pulse.map((pulse) => {
      data.push(
        createData(
          new Date(pulse.sentAt.seconds * 1000).toLocaleDateString("en-US"),
          pulse.pulse
        )
      );
    });
  }

  return (
    <React.Fragment>
      <Title>Pulse Rate</Title>
      <ResponsiveContainer width="100%">
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis>
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Pulse Rate  (%)
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="pulse"
            activeDot={{ r: 8 }}
            stroke={theme.palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default PulseGraph;
