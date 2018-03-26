import {
  LOGIN_FROM_JWT_SUCCESS,
  RECEIVE_ME,
  REMOVE_TOKEN,
  EDIT_ME_DETAILS,
  SET_ACCOUNTS_LIST,
  SET_NETWORK_ID,
  SET_SIGNED_MESSAGES,
  SET_WEB3_AVAILABILITY,
  RECEIVE_USER_DETAIL,
  REQUEST_MY_FOLLOWERS,
  RECEIVE_MY_FOLLOWERS,
  REQUEST_MY_FOLLOWINGS,
  RECEIVE_MY_FOLLOWINGS
} from '../actions/users';
import update from 'immutability-helper';
const INITIAL_STATE = {
  authenticated: false,
  me: {
    nickname: '',
    email: ''
  },
  isWeb3Available: false,
  signedMessages: {},
  jwt: null,
  network_id: null,
  accounts_list: [],

  cards: [],
  cards_loading: false,

  user_detail: {},

  followers: [],
  followers_loading: false,

  followings: [],
  followings_loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_WEB3_AVAILABILITY:
      return {
        ...state,
        isWeb3Available: action.isAvailable
      };
    case SET_NETWORK_ID:
      return {
        ...state,
        network_id: action.network_id
      };
    case SET_ACCOUNTS_LIST:
      return {
        ...state,
        accounts_list: action.accounts
      };
    case SET_SIGNED_MESSAGES:
      return {
        ...state,
        signedMessages: action.signedMessages
      };
    case LOGIN_FROM_JWT_SUCCESS:
      return {
        ...state,
        authenticated: true,
        jwt: action.token
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        authenticated: false,
        jwt: null
      };
    case RECEIVE_ME:
      return {
        ...state,
        me: action.me
      };
    case REQUEST_MY_FOLLOWERS:
      return {
        ...state,
        followers_loading: true
      };
    case RECEIVE_MY_FOLLOWERS:
      return {
        ...state,
        followers: action.followers,
        followers_loading: false
      };
    case REQUEST_MY_FOLLOWINGS:
      return {
        ...state,
        followings_loading: true
      };
    case RECEIVE_MY_FOLLOWINGS:
      return {
        ...state,
        followings: action.followings,
        followings_loading: false
      };
    case EDIT_ME_DETAILS:
      return update(state, {
        me: {
          [action.key]: { $set: action.value }
        }
      });
    case RECEIVE_USER_DETAIL:
      return update(state, {
        user_detail: {
          [action.userId]: { $set: action.user }
        }
      });
    default:
      return state;
  }
}
