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
                        {/* <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="../images/trial1.png" />
                        </ListItemAvatar> */}
                        <ListItemText
                        primary= {<b>{e.Name}</b>}
                        secondary={
                            <React.Fragment>
                            <h4>Address: {e.Address}</h4>
                            <h4>Phone: {e.Phone}</h4>
                            <h4>Rating out of 5: {e["Google Rating (out of 5)"]}</h4>
                            <h4>Review Count: {e["Number of reviews"]}</h4>
                            <h4><a href={e.Website}>{e.Website}</a></h4>
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