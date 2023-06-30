import React from "react";
import Style from "./Home.module.css";
import me from "../../assest/avatar.jpeg";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../assest/info/Info";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Intro() {
  // console.log(me);
  const { theme } = useTheme();
  let darkMode = theme === "dark";
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Image
        className={classNames(Style.avatar, Style.shadowed)}
        src={me}
        alt="image of developer"
        width={200}
        height={200}
        style={{
          layout: "responsive",
          objectFit: "cover",
          borderRadius: "50%",
          padding: "0.75rem",
          marginBottom: "1rem",
          marginRight: "2rem",
        }}
      />

      <Box
        style={{
          borderRadius: "1rem",
          background: darkMode
            ? "rgba(20, 20, 20, 0.5)"
            : "rgba(255, 255, 255, 0.2)",
          boxShadow: darkMode
            ? "0 0 10px 0 rgba(20, 20, 20, 0.5)"
            : "0 0 10px 0 rgba(255, 200, 255, 0.5)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          padding: "1rem 2rem",
          transition: "all 0.3s ease",
        }}
      >
        <div className={Style.H1}>
          <h1>
            Hi, I&apos;m{" "}
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {info.firstName}
            </span>
            <span className={Style.hand}>🤚</span>
          </h1>
        </div>
        <div className={Style.H2}>
          <h2>I&apos;m {info.position}.</h2>
        </div>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
