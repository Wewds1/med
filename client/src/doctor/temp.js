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

function createData(date, temperature) {
  return { date, temperature };
}

const TempGraph  = (props) => {
  const theme = useTheme();
  const [temperatures, setTemp] = useState([]);

  useEffect(() => {
    db.collection("patients")
      .doc(props.uid)
      .collection("temperature")
      .onSnapshot((snapshot) => {
        setTemp(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const data = [];
  {
    temperatures.map((temperature) => {
      data.push(
        createData(
          new Date(temperature.sentAt.seconds * 1000).toLocaleDateString("en-US"),
          temperature.temperature
        )
      );
    });
  }

  return (
    <React.Fragment>
      <Title>Body Temperature</Title>
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
              Temperature (°C)
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="temperature"
            activeDot={{ r: 10 }}
            stroke={theme.palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default TempGraph;
