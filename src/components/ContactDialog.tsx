import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Link, Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactDialog = ({ buttonText }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        color="inherit"
        style={{
          justifyContent: "flex-start",
          display: "flex",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        {buttonText}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Контакт:</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="h5" sx={{ marginBottom: "20px" }}>
              <Link href="tel:0877885226" sx={{ textDecoration: "none" }}>
                0877885226
              </Link>
            </Typography>
            <Typography variant="h6">
              Адрес: гр. Асеновград, ул. Хан Аспарух 13
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Затвори
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactDialog;
