import React from 'react';

const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Refrigeración</a>
            <div className="dropdown-menu text-center">
                <a className="dropdown-item" href="#">Air Cooling</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Water Cooling</a>
            </div>
        </li>
    );
}

export default Dropdown;
