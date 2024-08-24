import React, { useState } from 'react';
import axios from 'axios';
import TextEditor from './TextEditor';

const ReplyBox = ({ threadId }) => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSend = () => {
        axios.post(`/api/reply/${threadId}`, {
            from: 'you@example.com',
            to,
            subject,
            body,
        })
            .then(() => alert('Reply sent successfully'))
            .catch(error => console.error('Error sending reply:', error));
    };

    const handleSave = (content) => {
        setBody(content);
        alert('Content saved');
    };

    const handleInsertVariable = (setContent) => {
        setContent(prev => prev + '{{Variable}}');
    };

    return (
        <div className="reply-box">
            <h2>Reply</h2>
            <input
                type="email"
                placeholder="To"
                value={to}
                onChange={(e) => setTo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <TextEditor
                onSave={handleSave}
                onInsertVariable={handleInsertVariable}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ReplyBox;
