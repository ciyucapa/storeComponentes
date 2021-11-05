export default {
    modalExito: {

        container: {
            width: "100vw", 
            height: "100vh", 
            position: "fixed", 
            top: 0, 
            left:0, 
            backgroundColor: "rgba(0,0,0,.5)", 
            padding: "40px", 
            display:"flex", 
            alignItems: "center", 
            justifyContent: "center"
        },
  
        wrapper: {
            width: "500px", 
            minHeight: "100px", 
            backgroundColor: "#fff", 
            position: "relative", 
            boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
            padding: 0
        },
  
        header: {
            height:"55px",
            background: "#f4f4f4",
            fontSize: "18px",
            color: "#222",
            padding:" 0 20px 0 28px",
            fontWeight: "400",
            alignItems: "center",
            display:"flex", 
            flexDirection: "row",
            justifyContent: "space-between"
        },

        body: {
            minHeight: "245px",
            padding: "24px",

        }
    },
  }
  