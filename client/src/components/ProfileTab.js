import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProfileAlimentatie from '../modules/ProfileAlimentatie/Alimentatie';
import ProfileAnalize from '../modules/ProfileAnalize/Analize';
import ProfileBoli from '../modules/ProfileBoli/Boli';
import ProfileMedicamente from '../modules/ProfileMedicamente/Medicamente';
import { isAuthenticated, webAuth } from '../auth/auth0';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ height: '100%' }}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!isAuthenticated()) return navigate('/');
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', padding: '32px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'>
          <Tab label='Alimentatie' {...a11yProps(0)} />
          <Tab label='Analize' {...a11yProps(1)} />
          <Tab label='Boli' {...a11yProps(2)} />{' '}
          <Tab label='Medicamente' {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProfileAlimentatie />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileAnalize />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProfileBoli />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProfileMedicamente />
      </TabPanel>
    </Box>
  );
}
