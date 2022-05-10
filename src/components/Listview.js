import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import truedata from '../Data/truedata.json';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '150ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

function ListView () {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {
                truedata.features.map((e) => (
                    <>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary= {e.Name}
                        secondary={
                            <React.Fragment>
                            
                            {e.Address}
                            <h5><a href={e.Website}>{e.Website}</a></h5>
                            </React.Fragment>
                        }
                        />
                        
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    </>
                    
                    
                ))
            }     
        </List>
      );

}

export default ListView;