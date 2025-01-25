import { Send } from "@mui/icons-material";
import { IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import SocketManager from "../../../config/socketConfig";
import { setMessages } from "../../../redux/slices/messageSlice";
import {
  setChatUser,
  setIsChatUserLoading,
} from "../../../redux/slices/userSlice";
import { RootState } from "../../../redux/store";
import { MessageInterface, UserInterface } from "../../../types";
import { generateMessageModel } from "../../../utils/messageModelGenerator";

const Messages = () => {
  const { isSocketConnected, chatUser, currentUser } = useSelector(
    (state: RootState) => state.user
  );
  const { messages } = useSelector((state: RootState) => state.message);
  const [message, setMessage] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cookies] = useCookies();
  const location = useLocation();
  const dispatch = useDispatch();
  const iUserId = cookies["user.sid"];
  const rUserId = location.pathname.slice(1);

  // useEffect to handle messages socket
  useEffect(() => {
    const socket = SocketManager.getInstance();
    try {
      let messageModel = generateMessageModel(iUserId, rUserId);
      socket.on(messageModel, (data: MessageInterface[]) => {
        console.log("messages 1", data);
        if (data.length > 0) {
          dispatch(setMessages({ data }));
        }
      });
      messageModel = generateMessageModel(rUserId, iUserId);
      socket.on(messageModel, (data: MessageInterface[]) => {
        console.log("messages 2", data);
        if (data.length > 0) {
          dispatch(setMessages({ data }));
        }
      });
      if (chatUser) {
        socket.emit("messagesFetch", { recipientId: chatUser!.id });
      }
    } catch (e) {
      let message = "Some Error Occured";
      if (e instanceof Error) {
        message = e.message;
      }
      alert(message);
    }
  }, [location, cookies, dispatch, iUserId, rUserId, chatUser]);

  // useEffect to fetch recipient user data
  useEffect(() => {
    const fetchChatUser = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/user/get-user/${rUserId}`,
        {
          credentials: "include",
        }
      );
      const data: { status: boolean; data: UserInterface; message: string } =
        await res.json();
      if (!data.status) {
        throw new Error(data.message);
      }
      dispatch(setChatUser({ data: data.data }));
      dispatch(setIsChatUserLoading(false));
    };
    try {
      dispatch(setIsChatUserLoading(true));
      // if (!isSocketConnected) {
      //   throw new Error("Socket Not Connected!");
      // }
      fetchChatUser();
    } catch (e) {
      let message = "Some Error Occured";
      if (e instanceof Error) {
        message = e.message;
      }
      console.log(message);
      dispatch(setIsChatUserLoading(false));
      dispatch(setChatUser({ data: null }));
    }
  }, [isSocketConnected, dispatch, rUserId]);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // message send event handler on Enter Key Press On Message Textbox
  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!event.ctrlKey && event.key === "Enter") {
      event.preventDefault();
      sendMessageHandler();
    } else if (event.ctrlKey && event.key === "Enter") {
      setMessage((prev) => `${prev}\n`);
    }
  };

  // handle message send
  const sendMessageHandler = async () => {
    const socket = SocketManager.getInstance();
    if (!message) {
      return;
    }
    const newMessage = {
      receiver: chatUser!.id,
      message,
    };
    socket.emit("messages", newMessage);
    setMessage("");
  };

  return (
    <Stack p={"1rem 0"} sx={{ height: "100%", position: "relative" }}>
      <Stack
        gap={".5rem"}
        sx={{ overflowY: "scroll", pb: "3rem" }}
        ref={scrollRef}
      >
        {messages.map((messageItem, index) => {
          const { sender, message, createdAt } = messageItem;

          const isSender = sender === currentUser!.id;

          return (
            <Stack
              component={Paper}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              gap={".5rem"}
              margin={"0 .5rem"}
              padding={"1rem .5rem"}
              // flexDirection={isSender ? "row" : "row-reverse"}
              key={index}
              width={"80%"}
              alignSelf={isSender ? "flex-start" : "flex-end"}
              sx={{
                bgcolor: isSender ? "primary.main" : "#e7e7e7",
                color: isSender ? "whitesmoke" : "text.secondary",
              }}
            >
              {/* <Avatar sx={{ bgcolor: isSender ? "primary.main" : "skyblue" }}>
                {isSender ? currentUser!.name[0] : chatUser?.name[0]}
              </Avatar> */}
              <div>
                <Typography variant="subtitle1">{message}</Typography>
                <Typography variant="caption">
                  {dayjs(createdAt).format("hh:mm A")}
                </Typography>
              </div>
            </Stack>
          );
        })}
      </Stack>

      {/* textbox for message */}
      <Stack
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "transparent",
        }}
      >
        <TextField
          placeholder="Enter a Message"
          size="small"
          multiline={true}
          maxRows={3}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton
                  color="primary"
                  onClick={() => sendMessageHandler()}
                >
                  <Send />
                </IconButton>
              ),
            },
          }}
          sx={{
            background: "whitesmoke",
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleEnterPress(e)
          }
        />
      </Stack>
    </Stack>
  );
};

export default Messages;
