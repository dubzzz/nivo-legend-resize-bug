import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const barProps = {
  data: [
    {
      reference: "Jan 20",
      "Product A": 37100,
      "Product B": 10600,
      "Product C": 5300,
    },
    {
      reference: "Feb 20",
      "Product A": 37100,
      "Product B": 10600,
      "Product C": 5300,
    },
    {
      reference: "Mar 20",
      "Product A": 37100,
      "Product B": 10600,
      "Product C": 5300,
    },
    {
      reference: "Apr 20",
      "Product A": 37100,
      "Product B": 10600,
      "Product C": 5300,
    },
    {
      reference: "May 20",
      "Product A": 37100,
      "Product B": 10600,
      "Product C": 5300,
    },
    {
      reference: "Jun 20",
      "Product A": 37100,
      "Product B": 10600,
      "Product C": 5300,
    },
    {
      reference: "Jul 20",
      "Product A": 25970,
      "Product B": 7420,
      "Product C": 3710,
    },
    {
      reference: "Aug 20",
      "Product A": 29680,
      "Product B": 8480,
      "Product C": 4240,
    },
    {
      reference: "Sep 20",
      "Product A": 37100,
      "Product B": 10600,
      "Product C": 5300,
    },
    {
      reference: "Oct 20",
      "Product A": 40810,
      "Product B": 11660,
      "Product C": 5830,
    },
    {
      reference: "Nov 20",
      "Product A": 48230,
      "Product B": 13780,
      "Product C": 6890,
    },
    {
      reference: "Dec 20",
      "Product A": 55650,
      "Product B": 15900,
      "Product C": 7950,
    },
  ],
  keys: ["Product A", "Product B", "Product C"],
  indexBy: "reference",
  padding: 0.3,
  theme: {
    axis: {
      ticks: {
        text: {
          fontFamily: "'Work Sans', sans-serif",
        },
      },
      legend: {
        text: {
          fontFamily: "'Work Sans', sans-serif",
        },
      },
    },
    dots: {
      text: {
        fontFamily: "'Work Sans', sans-serif",
      },
    },
    labels: {
      text: {
        fontFamily: "'Work Sans', sans-serif",
      },
    },
    legends: {
      text: {
        fontFamily: "'Work Sans', sans-serif",
      },
    },
  },
  borderColor: {
    from: "color",
    modifiers: [["darker", 1.6]],
  },
  axisTop: null,
  axisRight: null,
  labelTextColor: "#ffffff",
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "",
    legendPosition: "middle",
    legendOffset: -60,
  },
  axisBottom: {
    orient: "bottom",
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "",
    legendOffset: 36,
    legendPosition: "middle",
  },
  colors: [
    "#3943D6",
    "#1DD7A0",
    "#C9468D",
    "#252B89",
    "#FFB17A",
    "#00CFBF",
    "#5D6794",
    "#A587E4",
    "#FF9684",
    "#2A3D90",
    "#F26BC1",
    "#0090A9",
  ],
  labelSkipWidth: 12,
  labelSkipHeight: 12,
  groupMode: "grouped",
  layout: "vertical",
  enableLabel: true,
  enableGridX: false,
  enableGridY: true,
  borderRadius: 0,
  margin: {
    top: 50,
    right: 150,
    bottom: 50,
    left: 60,
  },
  legends: [
    {
      dataFrom: "keys",
      anchor: "bottom-right",
      direction: "column",
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 4,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: "left-to-right",
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [
        {
          on: "hover",
          style: {
            itemOpacity: 1,
          },
        },
      ],
    },
  ],
  animate: true,
  motionStiffness: 90,
  motionDamping: 15,
};

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <ResponsiveBar {...barProps} />
    </div>
  );
}
