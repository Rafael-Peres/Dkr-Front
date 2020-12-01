import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class PageHeader extends Component {
  render() {
    return (
      <div className="pageheader-container">
        <div className="pageheader-content">
          <div className="pageheader-menu">
            <span>reseinn</span>
            <ul>
              <li>
                <Link>Vagas</Link>
              </li>
              <li>
                <Link>Sobre</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Contato</Link>
              </li>
            </ul>
          </div>

          <div className="buttons-container">
            <Link>Área do candidato</Link>
            <Link>Área do recrutador</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
