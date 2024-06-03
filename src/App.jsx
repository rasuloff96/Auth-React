//App.js

import './App.css';
import LoginButton from './companents/LoginButton';
import LogoutButton from './companents/LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <span className="appName">
                        React User Authentication</span>
                </div>
            </nav>
            <LoginButton />
            <LogoutButton />
        </>
    );
}

export default App;
