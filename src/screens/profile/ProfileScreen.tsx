import React, { useEffect, useState } from "react";
import EditProfile from "./EditProfile";
import  EditExperience  from "./EditExperience";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useDispatch } from "react-redux";
import { onGetEmployeeProfileData } from "../../redux/actions/profileEmployeeActions";
import PositionItem from "../../components/vacantPosition/positionItem";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && 
        
          children
        
      }
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const ProfileScreen = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(onGetEmployeeProfileData())
},[])

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Profile Components"
        className={classes.tabs}
      >
        <Tab label="General information" {...a11yProps(0)}/>
        <Tab label="Experience" {...a11yProps(1)}/>
        <Tab label="Education" {...a11yProps(2)}/>
        <Tab label="Languages" {...a11yProps(3)}/>
        <Tab label="Skills" {...a11yProps(4)}/>
      </Tabs>

      <TabPanel value={value} index={0}>
        <EditProfile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EditExperience />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PositionItem/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Edit Languages
      </TabPanel>
      <TabPanel value={value} index={4}>
        Edit Skiils
      </TabPanel>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    width: undefined,
    height: undefined,
    marginTop:100,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default ProfileScreen;
