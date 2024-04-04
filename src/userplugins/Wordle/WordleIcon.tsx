import { ChatBarButton } from "@api/ChatButtons";
import { classNameFactory } from "@api/Styles";
import { cl } from "./utils";
import "./style.css";

export const WordleChatBarIcon: ChatBarButton = ({ isMainChat }) => {

    if (!isMainChat) return null;

    return (
        <ChatBarButton
            tooltip="Wordle!"
            onClick={e => {
                console.log('test');
            }}
        >
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 192"
                height={24}
                width={24}
                className={cl("chat-button")}
            >
                <path d="M172.94,0H19.06A19.08,19.08,0,0,0,0,19.06V172.94A19.08,19.08,0,0,0,19.06,192H172.94A19.08,19.08,0,0,0,192,172.94V19.06A19.08,19.08,0,0,0,172.94,0Zm8.95,19.06V60.63H131.37V10.11h41.57A9,9,0,0,1,181.89,19.06ZM70.74,121.26V70.74h50.52v50.52Zm50.52,10.11v50.52H70.74V131.37ZM60.63,121.26H10.11V70.74H60.63ZM70.74,60.63V10.11h50.52V60.63Zm60.63,10.11h50.52v50.52H131.37ZM19.06,10.11H60.63V60.63H10.11V19.06A9,9,0,0,1,19.06,10.11ZM10.11,172.94V131.37H60.63v50.52H19.06A9,9,0,0,1,10.11,172.94Zm162.83,8.95H131.37V131.37h50.52v41.57A9,9,0,0,1,172.94,181.89Z" />
                <rect className={cl("cls-1")} x="70.74" y="70.74" width="50.52" height="50.52" />
                <rect className={cl("cls-2")} x="131.37" y="70.74" width="50.52" height="50.52" />
                <rect className={cl("cls-2")} x="70.74" y="131.37" width="50.52" height="50.52" />
                <path className={cl("cls-2")} d="M10.11,172.94V131.37H60.63v50.52H19.06A9,9,0,0,1,10.11,172.94Z" />
                <path className={cl("cls-2")} d="M172.94,181.89H131.37V131.37h50.52v41.57A9,9,0,0,1,172.94,181.89Z" />
            </svg>
        </ChatBarButton>
    );
};
