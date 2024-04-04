import { ChatBarButton } from "@api/ChatButtons";


export const WordleChatBarIcon: ChatBarButton = ({ isMainChat }) => {

  if (!isMainChat) return null;

  return (
    <ChatBarButton
      tooltip="Wordle!"
      onClick={e => {
        console.log('test');
      }}
    >
      <h1>sup</h1>
    </ChatBarButton>
  );
};