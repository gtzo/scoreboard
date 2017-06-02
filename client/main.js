import React from 'react';
import ReactDOM from 'react-dom';
import App from './../imports/ui/App'

import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from './../imports/api/players'; // Minimongo instance


Meteor.startup(() => {
    let title = 'Scoreboard';
    Tracker.autorun(() => {
        let players = Players.find({}, {sort: {"score": -1 }}).fetch(); 
        let positionedPlayers = calculatePlayerPositions(players);
        ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
    });
});
