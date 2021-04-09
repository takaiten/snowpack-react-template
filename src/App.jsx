import React, { useState, useEffect } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => setCount(count + 1), 1000);
        return () => clearTimeout(timer);
    }, [count, setCount]);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    This page has been open for <code>{count}</code> seconds.
                </p>
            </header>
        </div>
    );
};

export default App;
