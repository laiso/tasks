import React from 'react';

import { AppBar, Checkbox, Paper } from 'material-ui';
import { List, ListItem } from 'material-ui/List';

require('./App.css');

export default () => (
    <div>
        <AppBar title="Tasks"/>
        <Paper>
            <List>
                <ListItem primaryText="Item 1" leftCheckbox={<Checkbox />}/>
                <ListItem primaryText="Item 2" leftCheckbox={<Checkbox />}/>
                <ListItem primaryText="Item 3" leftCheckbox={<Checkbox />}/>
            </List>
        </Paper>
    </div>
);