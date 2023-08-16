import React, { useState } from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../assest/info/Info";
import userData from "@/constants/data";
import { useTheme } from "@emotion/react";
export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1
            className={`text-6xl lg:text-9xl max-w-lg font-bold  my-20 md:my-0 ${
              theme === "dark" ? "md:text-white" : "md:text-black"
            }text-center lg:text-left`}
          >
            Project List
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <Box>
        <Grid container display={"flex"} justifyContent={"center"}>
          {info.portfolio.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <PortfolioBlock
                image={project.image}
                live={project.live}
                source={project.source}
                title={project.title}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
