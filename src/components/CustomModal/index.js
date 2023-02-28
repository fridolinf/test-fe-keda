import { Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "600px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0.5,
  borderRadius: 3,
};
const CustomModal = ({ children, openModal, closeModal }) => {
  return (
    <Modal
      id="custom-modal"
      sx={{ zIndex: 100000 }}
      open={openModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <Fade in={openModal}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
