export interface MenuProps {
    handleClickOnChart?: () => void;
    handleClickOnAdd?: () => void;
    handleClickOnSettings?: () => void;
}

export interface ButtonProps {
    title: string;
}

export interface UserInfoProps {
    totalBalance: number;
}
