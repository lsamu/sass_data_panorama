const components = {
  componentList: {
    chart: {
      name: "图表",
      children: [
        {
          id: "line",
          name: "折线图",
          img: import("@/assets/img/charts/line.png"),
        },
        {
          id: "histogram",
          name: "柱状图",
          img: import("@/assets/img/charts/histogram.png"),
        },
        {
          id: "bar",
          name: "条形图",
          img: import("@/assets/img/charts/bar.png"),
        },
        {
          id: "pie",
          name: "饼图",
          img: import("@/assets/img/charts/pie.png"),
        },
        {
          id: "ring",
          name: "环状图",
          img: import("@/assets/img/charts/ring.png"),
        },
        {
          id: "funnel",
          name: "漏斗图",
          img: import("@/assets/img/charts/funnel.png"),
        },
        {
          id: "radar",
          name: "雷达图",
          img: import("@/assets/img/charts/radar.png"),
        },
        {
          id: "map",
          name: "中国地图",
          img: import("@/assets/img/charts/map-china.png"),
        },
        {
          id: "liquidfill",
          name: "水球图",
          img: import("@/assets/img/charts/liquidfill.png"),
        },
      ],
    },
    text: {
      name: "文本",
      children: [
        {
          id: "text",
          name: "文本",
          img: import("@/assets/img/charts/text.png"),
        },
      ],
    },
    picture: {
      name: "图片",
      children: [
        {
          id: "image",
          name: "图片",
          img: import("@/assets/img/charts/image.png"),
        },
        {
          id: "music",
          name: "音乐",
          img: import("@/assets/img/charts/image.png"),
        },
      ],
    },
    tools: {
      name: "组件",
      children: [
        {
          id: "border",
          name: "边框",
          img: import("@/assets/img/charts/border.png"),
        },
      ],
    },
  },
};

export default components;