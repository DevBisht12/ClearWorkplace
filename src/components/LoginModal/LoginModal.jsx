import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { Link } from "react-router-dom";

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <p variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Login
      </p>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 0,
            boxShadow: "lg",
            paddingBottom: "1rem",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            sx={{
              padding: "1rem 2rem",
            }}
          >
            Signup
          </Typography>
          <ListItem sx={{ display: "flex", flexDirection: "column" }}>
            <ListItemButton
              sx={{
                padding: "0.5rem 2rem",
              }}
              onClick={() => setOpen(false)}
            >
              <Link to="/Employer-login">Login as employer</Link>
            </ListItemButton>
            <ListItemButton
              sx={{
                padding: "0.5rem 2rem",
              }}
              onClick={() => setOpen(false)}
            >
              <Link to="/User-login">Login as user</Link>
            </ListItemButton>
          </ListItem>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
