const domain = "https://videos-learnfinance-fun.herokuapp.com";

export const BASE = domain;
export const LOGIN = `${domain}/user/login`;
export const SIGNUP = `${domain}/user/signup`;
export const GET_ALL_VIDEOS = `${domain}/video`;
export const GET_USER = `${domain}/user`;
export const GET_VIDEO = `${domain}/video/`;
export const INCREMENT_VIEW_COUNT = `${domain}/video/`;
export const GET_RATING = `${domain}/video/rate/all`;
export const GET_PLAYLIST = `${domain}/playlist/`;
export const DELETE_PLAYLIST = `${domain}/playlist/`;
export const LIKE_VIDEO = `${domain}/video/rate/like`;
export const UNLIKE_VIDEO = `${domain}/video/rate/unlike`;
export const DISLIKE_VIDEO = `${domain}/video/rate/dislike`;
export const UNDISLIKE_VIDEO = `${domain}/video/rate/undislike`;
export const GET_HISTORY = `${domain}/history`;
export const ADD_TO_HISTORY = `${domain}/history`;
export const CLEAR_HISTORY = `${domain}/history/clear`;
export const CREATE_PLAYLIST = `${domain}/playlist/create`;
export const ADD_TO_PLAYLIST = `${domain}/playlist/add`;
