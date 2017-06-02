import React from 'react';
import PropTypes from 'prop-types'

import {Players} from './../api/players'; // Minimongo instance

export default class Player extends React.Component {
    render () {
        let itemClassName = `item item--position-${this.props.player.rank}`;
        let player = this.props.player;
        return (
            <div className={itemClassName} key={player._id}>
                <div className="player">
                    <div>
                        <h3 className="player__name">{player.name}</h3>
                        <p className="player__stats">
                            {this.props.player.position} place - has {player.score} point(s)
                        </p>
                    </div>
                    <div className="player__actions">
                        <button className="button button--round" onClick={() => {
                            Players.remove(player._id)
                        }}>X</button>
                        <button className="button button--round" onClick={() => {
                            Players.update(player._id,
                                           {$inc: {score: 1}})
                        }}>+1</button>
                        <button className="button button--round" onClick={() => {
                            Players.update(player._id,
                                           {$inc: {score: -1}})
                        }}>-1</button>
                    </div>
                </div>
            </div>
        )
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired,
};

