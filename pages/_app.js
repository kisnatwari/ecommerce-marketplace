import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";
import Navbar from "@/components/global/Navbar";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextNProgress />
      <div className='h-screen overflow-auto flex flex-col w-full'>
        <Navbar />
        <div className="flex grow w-full dark:bg-primary-900 ">
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
