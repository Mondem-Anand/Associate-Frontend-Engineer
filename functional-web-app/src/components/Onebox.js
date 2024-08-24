import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Onebox = () => {
    const [threads, setThreads] = useState([]);
    const [selectedThread, setSelectedThread] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/onebox/list')
            .then(response => setThreads(response.data))
            .catch(error => console.error('Error fetching threads:', error));
    }, []);

    const handleDelete = (threadId) => {
        axios.delete(`/api/onebox/${threadId}`)
            .then(() => setThreads(threads.filter(thread => thread.id !== threadId)))
            .catch(error => console.error('Error deleting thread:', error));
    };

    const handleKeyPress = (event) => {
        if (event.key === 'd' && selectedThread) {
            handleDelete(selectedThread);
        }
        if (event.key === 'r' && selectedThread) {
            navigate(`/reply/${selectedThread}`);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedThread]);

    return (
        <div className="onebox-container">
            <h1>Onebox</h1>
            <ul>
                {threads.map(thread => (
                    <li
                        key={thread.id}
                        onClick={() => setSelectedThread(thread.id)}
                        style={{ background: selectedThread === thread.id ? 'lightgray' : 'white' }}
                    >
                        {thread.subject}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Onebox;
