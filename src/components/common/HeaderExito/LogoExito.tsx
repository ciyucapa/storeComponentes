import React from 'react';
import { Image } from 'theme-ui';


import styles from './styles.json';

const LogoExito = () => {
    
    return(
        <Image 
            style={styles.logo}
            src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/1a3b0a6c-9865-4fc6-80ad-316a2fd748fd___50dc4199e8020554de79a91123175966.svg"
            alt= "logo exito"
        />
    )
;}

export default LogoExito