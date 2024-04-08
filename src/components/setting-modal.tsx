import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import { useAuthContext } from "../auth/hooks";
import Iconify from "./iconify";
import LoginForm from "./login-form";
import LogoutButton from "./logout-button";
import SettingForm from "./setting-form";

function SettingModal() {
  const { currentUser } = useAuthContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Iconify icon="mdi:settings" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>설정</DialogTitle>
        <DialogContent sx={{ minWidth: 300, minHeight: 200 }}>
          {currentUser ? (
            <>
              <SettingForm onSubmit={handleClose} />
              <Stack spacing={2} mt={1.5}>
                <LogoutButton />
              </Stack>
            </>
          ) : (
            <LoginForm />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit" variant="contained">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SettingModal;
