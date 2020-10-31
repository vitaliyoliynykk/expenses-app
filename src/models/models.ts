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
