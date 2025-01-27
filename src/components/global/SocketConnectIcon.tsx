import { Circle } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SocketConnectIcon = () => {
  const { isSocketConnected, currentUser } = useSelector(
    (state: RootState) => state.user
  );
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);

  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Tooltip
        open={isTooltipOpen}
        disableFocusListener={true}
        disableHoverListener={true}
        disableTouchListener={true}
        title={
          isSocketConnected
            ? `Logged In as ${currentUser?.name || "User"}`
            : `Disconnected From Server`
        }
      >
        <IconButton
          onClick={() => setIsTooltipOpen(!isTooltipOpen)}
          onBlur={() => setIsTooltipOpen(false)}
          size="large"
          sx={{ color: isSocketConnected ? "whitesmoke" : "gray" }}
        >
          <Circle />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default SocketConnectIcon;
