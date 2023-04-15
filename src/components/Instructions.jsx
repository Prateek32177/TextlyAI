import React from"react"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "../App.css"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    bgcolor: 'white',
 borderRadius:"10px",
    boxShadow: 24,
    overflow:"auto",
    maxHeight:"60vh",
    p: 4,
  };

export default function Instruction(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    return (
        <>
           <Tooltip title="Instruction's" >
      <IconButton style={{width:"25px",height:"25px"}}  onClick={handleOpen}>
        <InfoOutlinedIcon style={{color:"white",cursor:"pointer",width:"20px",height:"20px"}} />
      </IconButton>
    </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="instructions" >
            <h5>Instruction</h5>
       <p>Limitation : May occasionally generate incorrect information</p>
       <ul>
        <li>Paste or type any data you want to classify, organize or categoriezed</li>
        <li>Currently we are providing output in 3 types Table, Excel and JSON </li>
        <li>For Better Output use filter section , its highly recommended to use for accurate response
            <ul>
                <li>Enter Keywords that defines category or type of your data like food menu, education, or something which is related to your data helps in generating accurate response for the data</li>
           <li>Enter Keywords for column header in which you want to categorieze your data, it willgenerate accordingly with table or excel headers you entered</li>
            </ul>
        </li>
       </ul>
       <strong>All these are recommended and not mandatory fields , to generate better result</strong>
        </Box>
      </Modal>
        </>
    )
}