import { Button } from "@vtex/store-ui";
import React, {useState} from "react";
import Modal from "src/components/modal";

const HomeCarrulla = () => {
    const [showModal, setShowModal] = useState(false);
    const onShow = () => {
        setShowModal(!showModal);
        console.log("Clcik")
    }

    return(
       <div>
           <Button onClick={onShow}>MODAL</Button>  
            <Modal/>
       </div>
    )
}
  
  export default HomeCarrulla;