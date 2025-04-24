"use client";

import React from "react";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
import { BsThreeDots, BsCameraVideo } from "react-icons/bs";
import { IoFilterOutline, IoCallOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { IoMdArrowRoundBack } from "react-icons/io";


type DemoMessage = {
  id: number;
  name: string;
  message: string;
  time: string;
  image: string;
  messages?: { id: number; message: string }[];
};

const demoMessages: DemoMessage[] = [
  {
    id: 1,
    name: "Sandra Boateng",
    message: "Hello, I’m struggling with my academic workload. Can I get help?",
    time: "12:20 pm",
    image: "/assets/african-american-woman-beige-suit-portrait.jpg",
  },
  {
    id: 2,
    name: "Kwame Asante",
    message: "Hey, I’d like to book a session with you regarding exam prep.",
    time: "9:45 am",
    image: "/assets/african-american-woman-beige-suit-portrait.jpg",
  },
  {
    id: 3,
    name: "Akua Mensah",
    message: "Hi, do you provide help with mental wellness too?",
    time: "8:10 am",
    image: "/assets/african-american-woman-beige-suit-portrait.jpg",
  },
];

export default function Messages() {
  const [selectedMessage, setSelectedMessage] =
    React.useState<DemoMessage | null>(null);
  const [inputMessage, setInputMessage] = React.useState("");
  const [inboxVisible, setInboxVisible] = React.useState(false); // for mobile toggle

  const sendMessage = () => {
    if (inputMessage.trim() === "" || !selectedMessage) return;
    setSelectedMessage((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        messages: [
          ...(prev.messages || []),
          { id: Date.now(), message: inputMessage },
        ],
      };
    });
    setInputMessage("");
  };

  return (
    <div className="h-[calc(100vh-5.5rem)] flex flex-col md:flex-row overflow-hidden">
      {/* Inbox Panel */}
      <div
        className={`${
          inboxVisible ? "flex" : "hidden"
        } md:flex flex-col px-2 gap-2 bg-white/5 w-full md:w-[25%] xl:max-w-[25%] overflow-y-auto xl:border-r h-full `}
      >
        <span className="flex justify-between items-center">
          <h1>Inbox</h1>
          <BsThreeDots className="cursor-pointer" size={20} />
        </span>

        <span className="flex justify-between items-center py-2 gap-4">
          <span className="flex items-center w-full gap-2 bg-white/10 border px-4 py-2 rounded-md">
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

        <ScrollArea>
          {demoMessages.map((chat) => (
            <div
              key={chat.id}
              className={`flex flex-col justify-between items-start gap-5 py-2 px-2 cursor-pointer hover:bg-gray-200 hover:dark:bg-white/10 rounded-md mb-5 ${
                selectedMessage?.id === chat.id
                  ? "bg-white/20"
                  : "hover:bg-white/10"
              }`}
              onClick={() => {
                setSelectedMessage(chat);
                setInboxVisible(false); // close inbox on mobile
              }}
            >
              <span className="flex justify-start w-full gap-2">
                <span className="flex justify-between items-start w-full">
                  <p className="font-medium">{chat.name}</p>
                  <p className="text-xs">{chat.time}</p>
                </span>
              </span>
              <p className="text-[12px] text-gray-700 dark:text-white">
                {chat.message.slice(0, 60)}...
              </p>

              <div className="flex justify-between items-center w-full">
                <span className="flex gap-2 items-center">
                  <div className="relative w-6 h-6">
                    <Image
                      src={chat.image}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    student
                  </Badge>
                </span>
                <Badge variant="secondary" className="text-xs rounded-full">
                  new
                </Badge>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Chat Panel */}
      <div className="flex flex-col flex-grow w-full md:w-[75%] ">
        {selectedMessage ? (
          <>
            {/* Header */}
            <div className="flex justify-between items-center bg-white/5 border-b lg:px-4 py-2">
              <span className="flex items-center gap-4  p-2">
                <span   onClick={() => setSelectedMessage(null)} className="cursor-pointer">
                  <IoMdArrowRoundBack size={22} />
                </span>
                <div className="relative w-6 h-6">
                  <Image
                    src={selectedMessage.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <p className="font-medium">{selectedMessage.name}</p>
              </span>

              <span className="flex gap-3">
                <IoCallOutline
                  size={22}
                  className="cursor-pointer hover:opacity-80"
                />
                <BsCameraVideo
                  size={22}
                  className="cursor-pointer hover:opacity-80"
                />
                <FiSearch
                  size={22}
                  className="cursor-pointer hover:opacity-80"
                />
              </span>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto px-4 py-3 space-y-2">
              {selectedMessage.messages?.map((message) => (
                <div key={message.id} className="flex justify-end">
                  <div className="bg-blue-500 text-white rounded-xl p-2 max-w-[80%] text-sm">
                    {message.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 px-4 py-3 border-t">
              <input
                className="flex-grow py-2 px-3 h-12 rounded-lg outline-none text-sm"
                type="text"
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <Button
                variant="default"
                onClick={sendMessage}
                className="h-11 min-w-[3rem] px-3"
              >
                <LuSend />
              </Button>
            </div>
          </>
        ) : (
          <div
            className={`${
              inboxVisible && "hidden"
            } flex flex-col items-center justify-center h-full text-center gap-3`}
          >
            <p className="text-lg">Select a chat to start messaging</p>
            <Button className="md:hidden" onClick={() => setInboxVisible(true)}>
              Open Inbox
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
