import { createPortal } from 'react-dom'

function Navbar() {
    return createPortal(
        <div className="navbar-container">
            <nav className="navbar">
                <span className="nav-item active">
                    <span className="nav-label-active">Home</span>
                </span>

                <span className="nav-item">
                    <span className="nav-label">About</span>
                </span>

                <span className="nav-item">
                    <span className="nav-label">Gallery</span>
                </span>
            </nav>
        </div>,
        document.body
    )
}

export default Navbar