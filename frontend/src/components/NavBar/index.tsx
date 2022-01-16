import { ReactComponent as GitHubIcon } from 'assets/img/GitHub.svg';
import './styles.css'

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Neur0mnce">
                        <div className="dsmovie-contact-container">
                            <GitHubIcon />
                            <p className="dsmovie-contact-link">/Neur0mnce</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;