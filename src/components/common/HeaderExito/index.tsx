import { Flex, Header } from '@vtex/store-ui';
import React from 'react';
import LogoExito from './LogoExito';

import SearchBar from '../SearchBar'
import Login from '../../auth'
import Minicart from '../../cart';
import MenuHamburguesa from './MenuHamburguesa';

const HeaderExito = () => {
    const variant = 'headerExito' 
    return(
    <Header variant={`${variant}.container`}>
        <Flex variant={`${variant}.flexLogo`}>
            <MenuHamburguesa/>
            <LogoExito/>
        </Flex>
        <Flex>
            <SearchBar/>
        </Flex>
        <Flex variant={`${variant}.flex`}>
            <Login/>
            <Minicart/>
        </Flex>
    </Header>
    );
};

export default HeaderExito;