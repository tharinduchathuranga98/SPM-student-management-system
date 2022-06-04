import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import './chat.css';

const chat = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
            height = "100vh"
            projectID = "62dc84cf-8c8b-4ea4-bfb4-e34d48e3dd33"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}           
        />
    );
}

export default chat;