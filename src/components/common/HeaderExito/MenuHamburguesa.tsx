import React, {useState} from 'react';
import { LocalizedLink, Box, Flex } from '@vtex/store-ui'

import IconHamburger from '../../icons/menuHamburguesa'

const MenuHamburguesa = () => {

    const [showList, setShowList] = useState(false)

    const onShow = () => {
        setShowList(!showList)
    }

    return (
        <div>
            <div onClick={onShow}>
                <IconHamburger/>
            </div>
            {showList && (
                <Box>
                    <Flex>
                        Categorias
                        <LocalizedLink to="/about">Vinos y Licores</LocalizedLink>
                    </Flex>
                    <Flex>
                        Servicios
                        <LocalizedLink to="/">Compra y Recoge</LocalizedLink>
                    </Flex>
                </Box>
            )}
        </div>
    )
};

export default MenuHamburguesa;