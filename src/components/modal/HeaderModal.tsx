import React, {ReactNode} from "react";
import {Box} from "@vtex/store-ui";

interface HeaderModalProps {
    title?: string,
    children?: ReactNode
}

const HeaderModal = (props: HeaderModalProps) => {
    const variant = 'modalExito'
    return (
    <Box variant={`${variant}.header`}>
        <div>{props.title}</div>
        <div>{props.children}</div>
    </Box>
);
};
  
export default HeaderModal;