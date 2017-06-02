import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player'
import FlipMove from 'react-flip-move';


export default class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Add a player</p>
                </div>
            );
        } else {
            return showScores = this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>;
            });
        }
    }

    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        )
    }
}

PlayerList.PropTypes = {
    players: PropTypes.array.isRequired
}
