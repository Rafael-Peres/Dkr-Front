import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import { InputBase } from '@material-ui/core';

import './styles.css';

class PageFooter extends Component {
  render() {
    return (
      <div className="pagefooter-container">
        <div className="pagefooter-content">
          <div className="pagefooter-menu">
            <ul>
              <li>
                <Link to="/jobs" style={{ cursor: 'pointer' }}>
                  Vagas
                </Link>
              </li>
              <li>
                <Link style={{ cursor: 'pointer' }}>Sobre</Link>
              </li>
              <li>
                <Link style={{ cursor: 'pointer' }}>Blog</Link>
              </li>
              <li>
                <Link style={{ cursor: 'pointer' }}>Contato</Link>
              </li>
              <li>
                <Link to="/signin" style={{ cursor: 'pointer' }}>
                  Login
                </Link>
              </li>
              <li>
                <Link style={{ cursor: 'pointer' }}>Termos de uso</Link>
              </li>
              <li>
                <Link style={{ cursor: 'pointer' }}>
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div className="vagas-container">
            <div>
              <span>Receba dicas sobre vagas em seu e-mail</span>
              <input
                placeholder="Digite seu E-mail"
                type="text"
                id="inputVagas"
                name="inputVagas"
              />
              <button className="button" type="submit">
                Enviar
              </button>
            </div>
            <div>
              <span>
                Copyright © Reseinn - Recruitment, Selection e Innovation 2020.
              </span>
            </div>
          </div>
          <div className="contato-container">
            <span>Contato@reseinn.com.br</span>
            <span>(11) 2222-2222</span>
            <span>(11) 9 9999-9999</span>
            <ul>
              <li>
                <FacebookIcon style={{ color: 'white' }} />
              </li>
              <li>
                <LinkedInIcon style={{ color: 'white' }} />
              </li>
              <li>
                <InstagramIcon style={{ color: 'white' }} />
              </li>
              <li>
                <YouTubeIcon style={{ color: 'white' }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PageFooter;
