import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

export const mainListItems = (
  <div>
    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <ListItem button>
        <ListItemIcon>
          <AccountTreeIcon />
        </ListItemIcon>
        <ListItemText primary="Tree" />
      </ListItem>
    </Link>
    <Link to="/board" style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Board" />
      </ListItem>
    </Link>
    <Link to="/test" style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Test" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <ListItem button>
        <ListItemIcon>
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
    <Link to="/settings" style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
  </div>
);
