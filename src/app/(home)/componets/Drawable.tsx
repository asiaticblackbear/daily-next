'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


interface TemporaryDrawerProps {
    isOpen?: boolean;
    onClose: () => void;
}


function TemporaryDrawer({isOpen, onClose}: TemporaryDrawerProps) {
    /*const [state, setState] = React.useState(isOpen);*/
    /*console.log(state)*/
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                onClose()
            };

    const list = (anchor: Anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <main id="drawer-container">
            <React.Fragment>
                {/*<Button onClick={toggleDrawer("left", true)}>버튼</Button>*/}
                <Drawer
                    anchor={"left"}
                    open={isOpen}
                    onClose={toggleDrawer("left", false)}
                    /*PaperProps={{ style: { position: 'relative' } }}
                    BackdropProps={{ style: { position: 'relative' } }}
                    ModalProps={{
                        container: document.getElementById('drawer-container'),
                        style: { position: 'relative' }
                    }}*/
                >
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </main>
    );
}

export default TemporaryDrawer