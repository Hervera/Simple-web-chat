import { useRef, useEffect } from 'react'

const useScrollToBottom = (messages) => {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    };
    
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return messagesEndRef;
}

export default useScrollToBottom;