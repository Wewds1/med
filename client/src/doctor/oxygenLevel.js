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

function createData(date, oxygen) {
  return { date, oxygen };
}

const OxygenGraph = (props) => {
  const theme = useTheme();
  const [oxygen, setOxygen] = useState([]);

  useEffect(() => {
    db.collection("patients")
      .doc(props.uid)
      .collection("oxygen")
      .onSnapshot((snapshot) => {
        setOxygen(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const data = [];
  {
    oxygen.map((oxygen) => {
      data.push(
        createData(
          new Date(oxygen.sentAt.seconds * 1000).toLocaleDateString("en-US"),
          oxygen.oxygen
        )
      );
    });
  }

  return (
    <React.Fragment>
      <Title>Oxygen Level</Title>
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
              Oxygen(%)
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="oxygen"
            activeDot={{ r: 8 }}
            stroke={theme.palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default OxygenGraph;
