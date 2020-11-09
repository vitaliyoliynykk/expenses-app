import { createAction } from 'typesafe-actions';
import { User } from 'firebase';
import { USER_SIGNED_IN } from './constants';

export const userSignedIn = createAction(USER_SIGNED_IN)<User>();
