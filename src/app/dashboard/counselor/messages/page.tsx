"use client";

import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { BsThreeDots } from "react-icons/bs";
import { IoFilterOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import { Button } from "@/components/ui/button";

// Defining the structure of a chat message.
type DemoMessage = {
  id: number;
  name: string;
  message: string;
  time: string;
  image: string;
  messages?: { id: number; message: string }[];
};

// Sample data for demo messages.
const demoMessages: DemoMessage[] = [
  {
    id: 1,
    name: "John Doe",
    message: "Hello, how are you?",
    time: "2:30 PM",
    image: "/assets/young-student-working-assignment.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "I'm doing well, thanks for asking.",
    time: "2:35 PM",
    image: "/assets/young-student-working-assignment.jpg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    message: "I'm good, how about you?",
    time: "2:40 PM",
    image: "/assets/young-student-working-assignment.jpg",
  },
  {
    id: 4,
    name: "Alice Williams",
    message: "I'm doing great, thanks for asking.",
    time: "2:45 PM",
    image: "/assets/young-student-working-assignment.jpg",
  },
  {
    id: 5,
    name: "Charlie Brown",
    message: "I'm good, how about you?",
    time: "2:50 PM",
    image: "/assets/young-student-working-assignment.jpg",
  },
  {
    id: 6,
    name: "Emily Davis",
    message: "I'm doing well, thanks for asking.",
    time: "2:55 PM",
    image: "/assets/young-student-working-assignment.jpg",
  },
  {
    id: 7,
    name: "Michael Wilson",
    message: "I'm good, how about you?",
    time: "3:00 PM",
    image: "/assets/young-student-working-assignment.jpg",
  },
];

export default function Messages() {
  // State to track the selected chat.
  const [selectedMessage, setSelectedMessage] =
    React.useState<DemoMessage | null>(null);
  // State for the user's input in the message field.
  const [inputMessage, setInputMessage] = React.useState("");

  // Function to handle sending a message.
  const sendMessage = () => {
    if (inputMessage.trim() === "" || !selectedMessage) return; // Prevent sending empty messages.

    setSelectedMessage((prev: DemoMessage | null) => {
      if (!prev) return null; // If no chat is selected, do nothing.

      return {
        ...prev,
        messages: [
          ...(prev.messages || []), // Keep existing messages.
          {
            id: Date.now(), // Unique ID for new message.
            message: inputMessage, // Store user input.
          },
        ],
      };
    });
    setInputMessage(""); // Clear input after sending.
  };

  return (
    <div className="h-[calc(100vh-5.5rem)]">
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-[100vw] overflow-hidden"
      >
        <ResizablePanel
          defaultSize={25}
          minSize={20}
          maxSize={25}
          className="flex flex-col px-2 gap-2 bg-white/5  flex-shrink-0 w-[25%] max-w-[25%]"
        >
          <span className="flex justify-between items-center">
            <h1>Chats</h1>
            <BsThreeDots className="cursor-pointer" size={20} />
          </span>
          <span className="flex justify-between items-center py-2 gap-4">
            <span className="flex justify-between items-center w-[20rem] gap-2 bg-white/10 border  px-4 py-2 rounded-md">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none w-full"
              />
              <FiSearch size={20} />
            </span>

            <IoFilterOutline className="cursor-pointer" size={20} />
          </span>
          <hr className="w-full" />

          {demoMessages.map((chat: DemoMessage) => (
            <div
              key={chat.id}
              className={`flex justify-between items-center gap-2 py-2 px-2 cursor-pointer rounded-md ${
                selectedMessage?.id === chat.id
                  ? "bg-white/20"
                  : "hover:bg-white/10"
              }`}
              onClick={() => setSelectedMessage(chat)}
            >
              <span className="flex gap-2">
                <div className="relative w-[3rem] h-[3rem]">
                  <Image
                    src={chat.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <span className="flex flex-col justify-start items-start">
                  <p className="font-medium">{chat.name}</p>
                  <p className="text-sm text-gray-400">{chat.message}</p>
                </span>
              </span>
              <span className="flex flex-col items-end gap-2">
                <p className="text-xs text-gray-400">{chat.time}</p>
                <span className="w-[1.2rem] text-xs text-center h-[1rem] bg-blue-300 rounded-full">
                  3
                </span>
              </span>
            </div>
          ))}
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel>
          {selectedMessage ? (
            <div className="flex justify-between h-full flex-col gap-2">
              <div className="flex justify-between items-center bg-white/5 border-b">
                <span className="flex gap-2 py-4 px-4">
                  <div className="relative w-[3rem] h-[3rem]">
                    <Image
                      src={selectedMessage.image}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>

                  <span className="flex flex-col justify-start items-start">
                    <p className="font-medium">{selectedMessage.name}</p>
                    <p className="text-sm text-gray-400">online</p>
                  </span>
                </span>

                <span className="flex gap-3 pr-4">
                  <span className="hover:bg-white/10 p-3  rounded-md">
                    <IoCallOutline size={24} className="cursor-pointer " />
                  </span>
                  <span className="hover:bg-white/10 p-3  rounded-md">
                    <BsCameraVideo size={24} className="cursor-pointer" />
                  </span>

                  <span className="hover:bg-white/10 p-3  rounded-md">
                    <FiSearch size={24} className="cursor-pointer" />
                  </span>
                </span>
              </div>

              <div>
                <div>
                  {selectedMessage.messages?.map((message) => (
                    <div key={message.id} className="flex gap-2 p-4">
                      {message.message}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 rounded-lg px-3">
                  <input
                    className="w-full py-2 px-3 h-12 rounded-lg outline-none"
                    type="text"
                    placeholder="Type a message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                  />
                  <Button
                    variant={"default"}
                    onClick={sendMessage}
                    className="flex h-11"
                  >
                    <LuSend />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Select a chat to start messaging
            </div>
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
