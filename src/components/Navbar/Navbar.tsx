import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ShareIcon from '@material-ui/icons/Share';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [navIndex, setNavIndex] = useState(0);
  return (
    <BottomNavigation
      value={navIndex}
      onChange={(event, newValue) => setNavIndex(newValue)}
      showLabels
    >
      <BottomNavigationAction
        label="Reproducir"
        icon={<OndemandVideoIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Compartir"
        icon={<ShareIcon />}
        component={Link}
        to="/compartir"
      />
    </BottomNavigation>
  );
}
