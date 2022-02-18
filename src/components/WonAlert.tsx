import { WinAlert } from "../styled/Card.styles";

type Props = {
    handleBtnClick: () => void;
};

export const Alert = ({ handleBtnClick }: Props) => {
    return (
        <>
            <WinAlert>
                <h1>Winner!!!</h1>
                <button onClick={handleBtnClick}>Try Again</button>
            </WinAlert>
        </>
    );
};
