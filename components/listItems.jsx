import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ElderlyIcon from '@mui/icons-material/Elderly';
//import Link from '@mui/material/Link'
import { NavLink } from 'react-router-dom';


export const mainListItems = (
  <React.Fragment>
    <NavLink to="/adminDashboard">
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Main" />
    </ListItemButton>
    </NavLink>
    <ListItemButton>
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <ListItemText primary="Doctors" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <RecordVoiceOverIcon />
      </ListItemIcon>
      <ListItemText primary="Reporters" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ElderlyIcon />
      </ListItemIcon>
      <ListItemText primary="Patients" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <VaccinesIcon />
      </ListItemIcon>
      <ListItemText primary="Medicins" />
    </ListItemButton>
    <NavLink to="/admin">
    <ListItemButton>
      <ListItemIcon>
        <AdminPanelSettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Admins" />
    </ListItemButton>
    </NavLink>
  </React.Fragment>
);

