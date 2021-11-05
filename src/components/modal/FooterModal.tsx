import { Box } from "@vtex/store-ui";
import React, {ReactNode} from "react";

interface FooterModalProps {
    children?: ReactNode;
}

const FooterModal = (props: FooterModalProps) => {
    const variant = 'modalExito'
    return (
    <Box  variant={`${variant}.body`}>
        {props.children}
    </Box>
  );
}
  
  export default FooterModal;