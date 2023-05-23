import { Component, ComponentProps, splitProps } from "solid-js";
import { createStore } from "solid-js/store";

import { SolidApexCharts } from "solid-apexcharts";

import * as S from "./styles";

interface GraphProps extends ComponentProps<"div"> {
  series: ApexAxisChartSeries;
  onPointSelected: (point: number[]) => void;
}

const Graph: Component<GraphProps> = (props) => {
  const [local, others] = splitProps(props, ["series", "onPointSelected"]);
  const [options] = createStore({
    colors: ["rebeccapurple"],
    stroke: {
      width: 3,
    },
    chart: {
      animations: {
        enabled: false,
      },
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        autoScaleYaxis: true,
      },
      events: {
        mouseMove: (event, chartContext, config) => {
          if (config.dataPointIndex === -1 || config.seriesIndex === -1) {
            return;
          }
          local.onPointSelected(
            config.config.series[config.seriesIndex].data[config.dataPointIndex]
          );
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: true,
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
      items: {
        display: "none",
      },
    },
    fill: {
      type: "solid",
      colors: ["transparent"],
    },
  });

  return (
    <S.Container {...others}>
      <SolidApexCharts
        width="100%"
        height="100%"
        type="bar"
        options={options}
        series={local.series}
      />
    </S.Container>
  );
};

export default Graph;
