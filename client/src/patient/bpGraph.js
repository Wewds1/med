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

function createData(date, bloodLevel) {
  return { date, bloodLevel };
}

const BPGraph = (props) => {
  const theme = useTheme();
  const [bloodLevels, setBloodLevels] = useState([]);

  useEffect(() => {
    db.collection("patients")
      .doc(props.uid)
      .collection("bloodPressureLevel")
      .onSnapshot((snapshot) => {
        setBloodLevels(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const data = [];
  {
    bloodLevels.map((blood) => {
      data.push(
        createData(
          new Date(blood.sentAt.seconds * 1000).toLocaleDateString("en-US"),
          blood.bloodLevel
        )
      );
    });
  }

  return (
    <React.Fragment>
      <Title>Blood Pressure</Title>
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
              Blood Pressure
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="bloodLevel"
            activeDot={{ r: 8 }}
            stroke={theme.palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default BPGraph;