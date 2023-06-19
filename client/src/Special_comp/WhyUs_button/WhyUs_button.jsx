import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './WhyUs_but.css' 
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function YourParentComponent() {
  // Rest of your code...

  return (
    <div>
      {/* Use the CustomizedMenus component */}
      <CustomizedMenus />

      {/* Use the Categories_item component */}
      <Categories_item />
    </div>
  );
}
export function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        // onClick={handleClick}
        
        onMouseEnter={handleOpenMenu}
       
        style={{background:'transparent',color:'black',textTransform: 'none' }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Why E-Shoppy
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       
        style={{padding:'1rem'}}
      >
        
        <MenuItem  disableRipple>
          {/* <EditIcon /> */}
          1.<h4>Extensive Product Selection.</h4>
        </MenuItem>  
        <MenuItem  disableRipple>
          {/* <FileCopyIcon /> */}
          2.<h4>User-Friendly Interface.</h4> 
        </MenuItem>
        {/* <Divider sx={{ }} /> */}
        <MenuItem  disableRipple>
          {/* <ArchiveIcon /> */}
          {/* Archive */}
          3.<h4>Secure and Reliable Payment Processing.</h4>
        </MenuItem>
        <MenuItem  disableRipple>
          {/* <MoreHorizIcon />
          More */}
          4.<h4>Excellent Customer Support.</h4>
        </MenuItem>
        <MenuItem  disableRipple>
          {/* <MoreHorizIcon />
          More */}
          5. <h4>Trusted by over 200,000 small businesses for 20+ years</h4>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
 export function Categories_item() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        // onClick={handleClick}
        
        onMouseEnter={handleOpenMenu}
       
        style={{background:'transparent',color:'black',textTransform: 'none' }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Categories
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       
        style={{padding:'1rem'}}
      >
        
        <MenuItem  disableRipple>
          {/* <EditIcon /> */}
          1.<h4>Man</h4>
        </MenuItem>  
        <MenuItem  disableRipple>
          {/* <FileCopyIcon /> */}
          2.<h4>Woman</h4> 
        </MenuItem>
        {/* <Divider sx={{ }} /> */}
        <MenuItem  disableRipple>
          {/* <ArchiveIcon /> */}
          {/* Archive */}
          3.<h4>Kids</h4>
        </MenuItem>
        <MenuItem  disableRipple>
          {/* <MoreHorizIcon />
          More */}
          4.<h4>Electonics.</h4>
        </MenuItem>
        <MenuItem  disableRipple>
          {/* <MoreHorizIcon />
          More */}
          5. <h4>Sale</h4>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}