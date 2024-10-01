import logo from '../../img/logo.png';
import React from 'react';

export const MainFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="" />
      <ul className="footer__links">
        <li className="footer__link uppercase">
          <a
            target="_blank"
            href="https://github.com/maksim-atanasov"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="footer__link uppercase">
          <a
            target="_blank"
            href="https://github.com/maksim-atanasov"
            rel="noreferrer"
          >
            Contacts
          </a>
        </li>
        <li className="footer__link uppercase">
          <a
            target="_blank"
            // eslint-disable-next-line max-len
            href="https://www.figma.com/design/BUusqCIMAWALqfBahnyIiH/Phone-catalog-(V2)-Original-Dark?node-id=0-1&node-type=canvas&t=ycl7iBfPaU9j5v1n-0"
            rel="noreferrer"
          >
            Rights
          </a>
        </li>
      </ul>
      <a className="footer__to-top small-text" onClick={scrollToTop}>
        Back to top <span className="footer__to-top-button slide-button"></span>
      </a>
    </footer>
  );
};
