import { useEffect, useState } from "react";
import { Stack, TextField } from "@mui/material";
import { useSettings } from "../hooks/use-settings";
import { useSaveSettings } from "../hooks/use-save-settings";
import { LoadingButton } from "@mui/lab";

function SettingForm({ onSubmit }: { onSubmit: () => void }) {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { data: settings, isLoading } = useSettings();
  const saveSettings = useSaveSettings();

  useEffect(() => {
    if (settings) {
      setTitle(settings.title);
      setMessage(settings.message);
    }
  }, [settings]);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!message) {
      alert("메시지를 입력해주세요.");
      return;
    }
    if (message.length > 30) {
      alert("메시지는 30자 이하여야 합니다.");
      return;
    }
    saveSettings.mutate({ title, message });
    onSubmit();
  };

  return (
    <Stack onSubmit={handleSubmit} component="form" spacing={2} mt={1}>
      <TextField
        label="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요."
        size="small"
        autoFocus
      />
      <TextField
        label="기본 메시지"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="기본 메시지를 입력해주세요."
        size="small"
      />
      <LoadingButton type="submit" variant="soft" loading={isLoading}>
        저장
      </LoadingButton>
    </Stack>
  );
}

export default SettingForm;
