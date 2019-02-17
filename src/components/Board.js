import React, { Component } from 'react';
import { connect } from 'react-redux';
import Field from './Field';
import { setFieldValueAndChangeActivePlayer, createBoard } from '../store/index';

class Board extends Component {
  componentDidMount() {
    this.props.createBoard(); // eslint-disable-line
  }

  render() {
    const {
      board,
      onFieldClick,
      winner,
      createBoard, // eslint-disable-line
    } = this.props;

    let winnerText = '';
    let boardClassName = 'Board';
    if (winner === 'draw') {
      winnerText = 'Draw';
      boardClassName += ' DisabledBoard';
    } else if (winner === 1 || winner === 2) {
      winnerText = `Player ${winner} won!`;
      boardClassName += ' DisabledBoard';
    }

    return (
      <div className="BoardFrame">
        <div className="Board-wrapper">
          <div className="WinnerText">{winnerText}</div>
          <div className={boardClassName}>
            {board
              && board.map((value, index) => (
                <Field onClick={onFieldClick} fieldValue={value} fieldId={index} key={index} /> // eslint-disable-line
              ))}
          </div>
          {winner && (
            <div className="text-center">
              <button type="button" className="btn btn-primary btn-lg" onClick={() => createBoard()}>
                Play again
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.board,
  winner: state.winner,
});

const mapDispatchToProps = dispatch => ({
  onFieldClick: fieldId => dispatch(setFieldValueAndChangeActivePlayer(fieldId)),
  createBoard: () => dispatch(createBoard()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
