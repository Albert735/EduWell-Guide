"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

// Define TabProps interface
interface TabProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

// Define TabsProps interface
interface TabsProps {
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
}

// Define TabButtonProps interface
interface TabButtonProps {
  id: string;
  title: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

// TabButton component
const TabButton: React.FC<TabButtonProps> = ({
  id,
  title,
  isActive,
  onClick,
}) => (
  <button
    className={`px-4 py-2 font-medium transition ${
      isActive
        ? "border-b-2 border-blue-500 text-blue-500"
        : "text-gray-600 hover:text-blue-500"
    }`}
    onClick={() => onClick(id)}
  >
    {title}
  </button>
);

// Tabs component
const Tabs: React.FC<TabsProps> = ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get("tab") as string | null;

  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    } else if (React.Children.count(children) > 0) {
      const firstChild = React.Children.toArray(children)[0];
      if (React.isValidElement<TabProps>(firstChild)) {
        setActiveTab(firstChild.props.id);
      }
    }
  }, [tabFromUrl, children]);

  const handleClick = (tabId: string) => {
    router.push(`?tab=${tabId}`, { scroll: false });
    setActiveTab(tabId);
  };

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex border-b space-x-4">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement<TabProps>(child)) return null;
          return (
            <TabButton
              key={child.props.id}
              id={child.props.id}
              title={child.props.title}
              isActive={activeTab === child.props.id}
              onClick={handleClick}
            />
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 border rounded-lg bg-white shadow">
        {
          (
            React.Children.toArray(children).find((child) => {
              if (React.isValidElement<TabProps>(child)) {
                return child.props.id === activeTab;
              }
              return false;
            }) as React.ReactElement<TabProps> | undefined
          )?.props.children
        }
      </div>
    </div>
  );
};

// Tab component
const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

export { Tabs, Tab };
