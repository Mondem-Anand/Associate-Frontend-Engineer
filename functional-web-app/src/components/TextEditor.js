import React, { useState } from 'react';

const TextEditor = ({ onSave, onInsertVariable }) => {
    const [content, setContent] = useState('');

    return (
        <div className="text-editor">
            <div className="editor-toolbar">
                <button onClick={() => onSave(content)}>SAVE</button>
                <button onClick={() => onInsertVariable(setContent)}>Variables</button>
            </div>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
        </div>
    );
};

export default TextEditor;
