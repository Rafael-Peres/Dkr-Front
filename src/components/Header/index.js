import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import './styles.css';

class PageHeader extends Component {
    render() {
        return (
            <div className="pageheader-container">
                <div className="pageheader-content">
                    <div className="pageheader-menu">
                        <span>reseinn</span>
                        <ul>
                            <li>Vagas</li>
                            <li>Sobre</li>
                            <li>Blog</li>
                            <li>Contato</li>
                        </ul>
                    </div>

                    <div className="buttons-container">
                        <Link>Área do candidato</Link>
                        <Link>Área do recrutador</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageHeader;