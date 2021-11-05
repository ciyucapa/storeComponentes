import React, {Fragment} from "react";
import { Box, Button } from "@vtex/store-ui";

import HeaderModal from './HeaderModal';
import FooterModal from './FooterModal';
import BodyModal from './BodyModal';

const Modal = () => {
    const variant = 'modalExito'

    return (
    <Fragment>
        <Box variant={`${variant}.container`}>
            <Box variant={`${variant}.wrapper`}>
                <HeaderModal title="Hacemos todo más fácil">
                    <Button>X</Button>
                </HeaderModal>
                <BodyModal/>
                <FooterModal>
                    <Button>Confirmar</Button>
                </FooterModal>
            </Box>
        </Box>
    </Fragment>
    );
};
  
export default Modal;