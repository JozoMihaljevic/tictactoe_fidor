/*
 * Use this file to implement your application store solution.
 *
 * Use any storage solution you like, even plain JavaScript is allowed. We have set this up to
 * use Redux for now.
 *
 * The store must implement the business logic for:
 *  - handling the players (entering player names, switching players, etc)
 *  - handling the game logic (winner & draw result)
 *  - resetting or starting a new game
 */
import { identity } from 'ramda';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/* eslint-disable-next-line no-underscore-dangle */
const devtoolExtension = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) || identity;
const CREATE_BOARD = 'CREATE_BOARD';
const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
const SET_ACTIVE_PLAYER = 'SET_ACTIVE_PLAYER';
const SET_WINNER = 'SET_WINNER';

export function createBoard() {
  return {
    type: CREATE_BOARD,
  };
}

export function setFieldValue(fieldId, playerNumber) {
  return {
    type: SET_FIELD_VALUE,
    fieldId,
    playerNumber,
  };
}

function setWinner(playerNumber) {
  return {
    type: SET_WINNER,
    playerNumber,
  };
}

export function setActivePlayer(playerNumber) {
  return {
    type: SET_ACTIVE_PLAYER,
    playerNumber,
  };
}

function generateBoard() {
  const board = [];
  for (let i = 0; i < 9; i += 1) {
    board.push(null);
  }
  return board;
}

function isSameValue(f1, f2, f3) {
  if (f1 === null || f2 === null || f3 === null) return null;
  if (f1 === f2 && f1 === f3) {
    return f1;
  }
  return null;
}

function checkWinner(board) {
  let allFieldsChecked = true;
  for (let i = 0; i < board.length; i += 1) {
    if (!board[i]) {
      allFieldsChecked = false;
      break;
    }
  }

  const winner = isSameValue(board[0], board[1], board[2])
    || isSameValue(board[0], board[3], board[6])
    || isSameValue(board[0], board[4], board[8])
    || isSameValue(board[1], board[4], board[7])
    || isSameValue(board[2], board[5], board[8])
    || isSameValue(board[2], board[4], board[6])
    || isSameValue(board[3], board[4], board[5])
    || isSameValue(board[6], board[7], board[8]);

  if (winner !== null) return winner;

  if (winner === null && allFieldsChecked) {
    return 'draw';
  }

  return null;
}

export const setFieldValueAndChangeActivePlayer = fieldId => (dispatch, getState) => {
  const playerNumber = getState().activePlayer;
  const currentBoardValue = getState().board[fieldId];
  if (currentBoardValue) {
    return;
  }
  dispatch(setFieldValue(fieldId, playerNumber));
  let nextPlayerNumber = playerNumber;
  if (playerNumber === 1) {
    nextPlayerNumber = 2;
  } else {
    nextPlayerNumber = 1;
  }
  const winner = checkWinner(getState().board);
  if (winner) {
    return dispatch(setWinner(winner)); // eslint-disable-line
  }
  return dispatch(setActivePlayer(nextPlayerNumber)); // eslint-disable-line
};

const initialState = {
  board: [],
  activePlayer: null,
  winner: null,
};

const gameReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CREATE_BOARD:
      return Object.assign({}, state, {
        board: generateBoard(),
        activePlayer: 1,
        winner: null,
      });

    case SET_FIELD_VALUE:
      return Object.assign({}, state, {
        board: state.board.map((field, index) => {
          if (index === action.fieldId && !field) {
            return action.playerNumber;
          }
          return field;
        }),
      });

    case SET_ACTIVE_PLAYER:
      return Object.assign({}, state, {
        activePlayer: action.playerNumber,
      });

    case SET_WINNER:
      return Object.assign({}, state, {
        winner: action.playerNumber,
      });

    default:
      return state;
  }
};

export default createStore(gameReducer, devtoolExtension(), applyMiddleware(thunk));
