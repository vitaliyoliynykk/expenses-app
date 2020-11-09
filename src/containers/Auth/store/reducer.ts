import * as actions from './actions';
import { User } from 'firebase';
import { ActionType } from 'typesafe-actions';
import { USER_SIGNED_IN } from './constants';

export type AuthAction = ActionType<typeof actions>;

interface AuthState {
    user: User | null;
}

const initialState = { user: null };

export function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case USER_SIGNED_IN:
            return { ...state, user: action.payload };
        default:
            return { ...state };
    }
}
