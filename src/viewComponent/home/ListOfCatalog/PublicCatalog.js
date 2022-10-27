import * as React from 'react';
import { useNavigate, } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//===========================================
//===========================================
import { PublicList, PersonalList } from '../data';
//===========================================
//===========================================
export default function PublicCatalog ({isOpen}) {
//===========================================
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
//===========================================  
  const handle = (index,props) => {
    navigate(index)
  }

//===========================================
  return (
    <List>
      {PublicList.map((item) => (
        <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: isOpen ? 'initial' : 'center',
              px: 2.5,
            }}
            content={item.name}
            onClick={(props) => handle(item.path,props)}
          > 
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              sx={{ opacity: isOpen ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}