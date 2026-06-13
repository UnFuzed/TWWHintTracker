import { useState, useEffect } from 'react'

function InputBox() {
    const [hint, setHint] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter pressed:', hint);
        }
    }

    return (
        <div className="input-box">
            <input 
                type="text" 
                placeholder="Enter your hint here..." 
                size={100} 
                value={hint}
                onChange={(e) => setHint(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default InputBox