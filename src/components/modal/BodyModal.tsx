import React, {ReactNode} from "react";

interface BodyModalProps {
    children?: ReactNode
}

const BodyModal = (props: BodyModalProps) => (
    <div>
        {props.children}
    </div>
    
  );
  
  export default BodyModal;