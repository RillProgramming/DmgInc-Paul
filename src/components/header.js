import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

const githubBase = "/DmgInc-Paul/";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="devops">
                    <a href="https://dmginc.gg/clubs/6-devops/" target="blank">DevOps</a>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to={githubBase}>home</Link>
                        </li>
                        <li>
                            <Link to={{githubBase} + "trivia"}>trivia</Link>
                        </li>
                    </ul>

                </nav>

            </header>
        );
    }
}

export default Header;