import { Home } from "@mui/icons-material";
import {
  Fade,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Slide,
} from "@mui/material";
import Link from "next/link";
import { memo, useEffect, useState } from "react";

const data = [
  {
    subheader: "Bureau",
    items: [
      {
        title: "Tableau de bord",
        Icon: <Home className="h-6" />,
        link: "/",
      },
    ],
  },
];

function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(null);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="flex">
      <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
        <div
          className={`bg-gray-800 !text-white sticky top-0 px-4 pt-10 h-screen flex-grow max-w-[300px] ${
            width < 800 && "!fixed z-50 w-full"
          } `}>
          <h1 className="text-3xl text-center">Logo</h1>
          {data.map((item, index) => (
            <List
              key={index}
              className="!mb-2"
              subheader={
                <ListSubheader
                  sx={{ background: "transparent", color: "#fff" }}>
                  {item.subheader}
                </ListSubheader>
              }>
              {item.items.map((item, index) => (
                <Link href={item.link} passHref key={index}>
                  <ListItemButton>
                    <ListItemIcon className="!text-white">
                      {item.Icon}
                    </ListItemIcon>
                    <ListItemText key={index}>{item.title}</ListItemText>
                  </ListItemButton>
                </Link>
              ))}
            </List>
          ))}
        </div>
      </Slide>
      {width < 768 && (
        <Fade in={isOpen}>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 transition-all duration-300 bg-black bg-opacity-25 backdrop-blur-sm"
          />
        </Fade>
      )}
      <div className="flex-grow transition-all duration-200">{children}</div>
    </div>
  );
}

export default memo(Layout);
