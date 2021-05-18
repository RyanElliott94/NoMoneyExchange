import { useEffect, useState } from "react";
import CustomModal from "../Extras/CustomModal";
import Navbar from "./Navbar";
import { notification } from "../../Services/notificationService";
const $ = require("jquery");

export default function Messages() {
    const [hasNickname, setHasNickname] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [showNotification, setShowNotification] = useState(false);
    const [notificationContent, setNotificationContent] = useState(null);
    const [isRecipient, setIsRecipient] = useState(false);
    const nickname = sessionStorage.getItem("nickname");
    const recipient = sessionStorage.getItem("recipient");

    notification.emit("user_connected", nickname);

    notification.on("user_connected", data => {
        sessionStorage.setItem("recipient", data.otherUser != nickname ? data.otherUser : "");
    });
    
    useEffect(() => {
        if(sessionStorage.getItem("nickname")){
            setHasNickname(true);
        }else{
            setHasNickname(false);
        }

        notification.on("new_message", data => {
            if(data.sender != nickname) {
                setIsRecipient(true);
            }else{
                setIsRecipient(false);
            }

            $(".message-box").append(sortBubbles(data, 'left'));
            setNotificationContent((<p>You have a new message by {data.sender}</p>));
            setShowNotification(true);
        });

    }, []);

    const sortBubbles = (data, position) => {
        return `<div class="message-item ${position}" id=${data.sender}>
        <div class="message-content">
            <p>${data.message}</p>
        </div>
            </div>`
    }

    const handleSubmitMessage = e => {
        notification.emit("new_message_update", {
            sender: nickname,
            sendTo: recipient,
            message: newMessage
        });
        setIsRecipient(false);
        $(".message-box").append(sortBubbles({sender: recipient, message: newMessage}, 'right'));
    }

    return (
        <div className="message-main">
            <CustomModal showModal={showNotification} closeModal={() => setShowNotification(false)} content={notificationContent}/>
            <Navbar />
            {hasNickname ? <div className="messages-content">
                <div className="message-title">
                    <p>Messages</p>
                </div>
                <div className="message-box">
                </div>
                <div className="message-options">
                <div className="form-group">
                        <textarea className="form-control" rows="10" placeholder="Enter your message...." onChange={e => setNewMessage(e.target.value)}></textarea>
                        <button className="send-msg-btn" onClick={handleSubmitMessage}>Send Message</button>
                    </div>
                </div>
            </div> : <div className="enter-nickname">
                <div className="enter-nickname-main">
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" placeholder="Enter a nickname..." onChange={e => sessionStorage.setItem("nickname", e.target.value)}></input>
                    <button className="submit-nickname-btn" onClick={() => setHasNickname(true)}>Submit</button>
                </div>
                    </div>}
        </div>
    )
}

// UNUSED - KEEP JUST IN CASE
// FOR LOCAL DATA - USE THIS
// setMessageList(state => state ? [...state, {
        //     sender: nickname,
        //     message: newMessage
        // }] : [{sender: nickname,
        //     message: newMessage}]);

// FOR SERVER DATA - USE THIS
// setMessageList(state => state ? [...state, {
            //     sender: data.sender,
            //     message: data.message
            // }] : [{sender: data.sender,
            //     message: data.message}]);