import { HeaderMenuButtons } from '../blocks/HeaderMenuButtons';
import { HeaderButtons } from '../blocks/HeaderButtons';
import logo from '../../img/logo.png';
import { useContext } from 'react';
import { IsActiveMenuContext } from '../../context/IsActiveMenuContext';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { isActiveMenu } = useContext(IsActiveMenuContext);
  const navigate = useNavigate();

  return (
    <header className="header" id="header">
      <img
        onClick={() => navigate('/')}
        src={logo}
        alt="logo"
        className="header__logo"
      />
      {isActiveMenu ? <HeaderMenuButtons /> : <HeaderButtons />}
    </header>
  );
};
