import { RouteComponentProps } from 'react-router-dom';
import { User } from 'firebase';
import { PayloadAction } from 'typesafe-actions';

export interface ButtonProps {
    title: string;
}
export interface MenuProps {
    onActionClick: (action: string) => void;
}
export interface UserInfoProps {
    totalBalance: number;
    userPhotoUrl: string;
    userName: string;
}

export interface AuthProps extends RouteComponentProps {
    userSignedIn: (user: User | null) => PayloadAction<string, User | null>;
}
