import { MarkChatUnread } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SocketManager from "../../../config/socketConfig";
import {
  setIsRevalidateCurrentUserUtil,
  setUsers,
} from "../../../redux/slices/userSlice";
import { RootState } from "../../../redux/store";
import { UserInterface } from "../../../types";
import NoData from "./NoData";

const ActiveUsers = () => {
  const { users, currentUser } = useSelector((state: RootState) => state.user);
  const [cookies] = useCookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const socket = SocketManager.getInstance();
    try {
      socket.on("users", (data: UserInterface[]) => {
        console.log("users", data);
        dispatch(setUsers({ data, cookie: cookies["user.sid"] }));
        dispatch(setIsRevalidateCurrentUserUtil());
      });
    } catch (e) {
      let message = "Some Error Occured";
      if (e instanceof Error) {
        message = e.message;
      }
      alert(message);
    }
  }, []);

  return (
    <Stack
      sx={{
        justifyContent: "flex-start",
        p: "1rem",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      {users.length === 0 ? (
        <NoData />
      ) : (
        <List>
          {users.map((user, index) => {
            const { name, id } = user;

            const unRead = currentUser?.unreadMessages.includes(id);

            return (
              <React.Fragment key={index}>
                <ListItem
                  onClick={() => navigate(`/${id}`)}
                  sx={{
                    cursor: "pointer",
                    borderRadius: ".3rem",
                    "&:hover": {
                      bgcolor: "#e4e4e4",
                    },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar alt={name}>{name[0].toUpperCase()}</Avatar>
                  </ListItemAvatar>
                  <ListItemText sx={{ textTransform: "capitalize" }}>
                    {name}
                  </ListItemText>
                  {unRead && (
                    <MarkChatUnread fontSize="small" color="primary" />
                  )}
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })}
        </List>
      )}
    </Stack>
  );
};

export default ActiveUsers;
