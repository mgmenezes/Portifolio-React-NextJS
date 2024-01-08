"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TAB_DATA = [
  {
    label: "Skills",
    content: (
      <ul>
        <li className="pb-2 font-semibold">- ReactJs</li>
        <li className="pb-2 font-semibold">- Typescript</li>
        <li className="pb-2 font-semibold">- TailwindCSS</li>
        <li className="pb-2 font-semibold">- React Testing Library / Jest</li>
      </ul>
    ),
  },
  {
    label: "Education",
    content: (
      <ul>
        <li className="pb-2 font-semibold">
          - Bachelor Computer Science Unifg
        </li>
      </ul>
    ),
  },
  {
    label: "Experience",
    content: (
      <ul>
        <li className="pb-2 font-semibold">
          - Software Engineer Liferay (July/21 - Dec/23)
        </li>
        <li className="pb-2 font-semibold">
          - DevOps at Sauter Digital (Dec/20 - Jun/21)
        </li>
        <li className="pb-2 font-semibold">
          - Software Engineer at Procenge (Jan/19 - Dec/20)
        </li>
      </ul>
    ),
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab className="text-white" label="Skills" {...a11yProps(0)} />
          <Tab className="text-white" label="Education" {...a11yProps(1)} />
          <Tab className="text-white" label="Experience" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="mt-8">
          {TAB_DATA.map((items) => {
            if (items.label === "Skills") {
              return <div key={items.content}>{items.content}</div>;
            }
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="mt-8">
          {TAB_DATA.map((items) => {
            if (items.label === "Education") {
              return <div key={items.content}>{items.content}</div>;
            }
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="mt-4">
          {TAB_DATA.map((items) => {
            if (items.label === "Experience") {
              return <div key={items.content}>{items.content}</div>;
            }
          })}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
