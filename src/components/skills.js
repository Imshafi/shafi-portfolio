import React from "react";
import { Treemap, ResponsiveContainer } from "recharts";
import "../assets/css/skills.css";

const Skills = (props) => {
  const data = [
    {
      name: "React Js",
      children: [
        {
          name: "React Js",
          size: 24593,
        },
        {
          name: "Axes",
          size: 1302,
        },
        {
          name: "AxisGridLine",
          size: 652,
        },
        {
          name: "AxisLabel",
          size: 636,
        },
        {
          name: "CartesianAxes",
          size: 6703,
        },
      ],
    },
    {
      name: "Html",
      children: [
        {
          name: "TooltipControl",
          size: 8435,
        },
        {
          name: "SelectionControl",
          size: 7862,
        },
        {
          name: "PanZoomControl",
          size: 5222,
        },
        {
          name: "HoverControl",
          size: 4896,
        },
        {
          name: "ControlList",
          size: 4665,
        },
        {
          name: "ClickControl",
          size: 3824,
        },
        {
          name: "ExpandControl",
          size: 2832,
        },
        {
          name: "DragControl",
          size: 2649,
        },
        {
          name: "AnchorControl",
          size: 2138,
        },
        {
          name: "Control",
          size: 1353,
        },
        {
          name: "IControl",
          size: 763,
        },
      ],
    },
    {
      name: "CSS",
      children: [
        {
          name: "HTML",
          size: 20544,
        },
        {
          name: "CSS",
          size: 19382,
        },
        {
          name: "DataStructure",
          size: 19788,
        },
        {
          name: "Redux",
          size: 10349,
        },
        {
          name: "EdgeSprite",
          size: 3301,
        },
        {
          name: "Javascript",
          children: [
            {
              name: "EdgeRenderer",
              size: 5569,
            },
            {
              name: "ShapeRenderer",
              size: 2247,
            },
            {
              name: "ArrowType",
              size: 698,
            },
            {
              name: "IRenderer",
              size: 353,
            },
          ],
        },
        {
          name: "ScaleBinding",
          size: 11275,
        },
        {
          name: "TreeBuilder",
          size: 9930,
        },
        {
          name: "DSA",
          size: 7147,
        },
      ],
    },
    {
      name: "events",
      children: [
        {
          name: "DataEvent",
          size: 7313,
        },
        {
          name: "SelectionEvent",
          size: 6880,
        },
        {
          name: "TooltipEvent",
          size: 3701,
        },
        {
          name: "VisualizationEvent",
          size: 2117,
        },
      ],
    },
    {
      name: "legend",
      children: [
        {
          name: "Javascript",
          size: 20859,
        },
        {
          name: "LegendRange",
          size: 10530,
        },
        {
          name: "LegendItem",
          size: 4614,
        },
      ],
    },
    {
      name: "operator",
      children: [
        {
          name: "distortion",
          children: [
            {
              name: "Distortion",
              size: 6314,
            },
            {
              name: "BifocalDistortion",
              size: 4461,
            },
            {
              name: "FisheyeDistortion",
              size: 3444,
            },
          ],
        },
        {
          name: "encoder",
          children: [
            {
              name: "PropertyEncoder",
              size: 4138,
            },
            {
              name: "Encoder",
              size: 4060,
            },
            {
              name: "ColorEncoder",
              size: 3179,
            },
            {
              name: "SizeEncoder",
              size: 1830,
            },
            {
              name: "ShapeEncoder",
              size: 1690,
            },
          ],
        },
        {
          name: "filter",
          children: [
            {
              name: "FisheyeTreeFilter",
              size: 5219,
            },
            {
              name: "VisibilityFilter",
              size: 3509,
            },
            {
              name: "GraphDistanceFilter",
              size: 3165,
            },
          ],
        },
        {
          name: "IOperator",
          size: 1286,
        },
        {
          name: "label",
          children: [
            {
              name: "Node js",
              size: 9956,
            },
            {
              name: "RadialLabeler",
              size: 3899,
            },
            {
              name: "StackedAreaLabeler",
              size: 3202,
            },
          ],
        },
        {
          name: "layout",
          children: [
            {
              name: "RadialTreeLayout",
              size: 12348,
            },
            {
              name: "NodeLinkTreeLayout",
              size: 12870,
            },
            {
              name: "CirclePackingLayout",
              size: 12003,
            },
            {
              name: "CircleLayout",
              size: 9317,
            },
            {
              name: "TreeMapLayout",
              size: 9191,
            },
            {
              name: "StackedAreaLayout",
              size: 9121,
            },
            {
              name: "SQL",
              size: 7881,
            },
            {
              name: "AxisLayout",
              size: 6725,
            },
            {
              name: "IcicleTreeLayout",
              size: 4864,
            },
            {
              name: "DendrogramLayout",
              size: 4853,
            },
            {
              name: "ForceDirectedLayout",
              size: 8411,
            },
            {
              name: "BundledEdgeRouter",
              size: 3727,
            },
            {
              name: "IndentedTreeLayout",
              size: 3174,
            },
            {
              name: "PieLayout",
              size: 2728,
            },
            {
              name: "RandomLayout",
              size: 870,
            },
          ],
        },
        {
          name: "OperatorList",
          size: 5248,
        },
        {
          name: "OperatorSequence",
          size: 4190,
        },
        {
          name: "OperatorSwitch",
          size: 2581,
        },
        {
          name: "Operator",
          size: 2490,
        },
        {
          name: "SortOperator",
          size: 2023,
        },
      ],
    },
  ];

  return (
    <div className="skills_main_blk">
      <div className="skills_sub_blk">
        {props?.isMobile ? (
          <h1>----------- Skills -----------</h1>
        ) : (
          <h1>------------------------- Skills ---------------------------</h1>
        )}
        <div className="skills_content_blk">
          <p>
            Dedicated and Innovative software engineer with 1 year experience in
            building, maintaining responsive sites as well as understanding and
            anticipating the agile infrastructure needs and creating an
            environment where development, quality assurance, staging &
            production work can proceed efficiently and securely.
            {/* <div className="skills_ul">
              <div>
                <ul>
                  <li>React js</li>
                  <li>Javascript</li>
                  <li>Redux</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <li>Node js</li>
              <li>SQL</li>
              <li>Mongo DB</li>
              <div>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Git</li>
                  <li>Jira</li>
                </ul>
              </div>
            </div> */}
          </p>
          <div className="skills_graph">
            <ResponsiveContainer
              width={props?.isMobile ? "100%" : 730}
              height={props?.isMobile ? 200 : 250}
              className="skills_graph_blk"
            >
              <Treemap
                data={data}
                dataKey="size"
                aspectRatio={4 / 3}
                stroke="#fff"
                fill="#215350"
              />
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
