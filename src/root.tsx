import { Header } from "./components/Header";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";

import "./global.css";

export default function Home() {
  return (
    <>
      <head>
        <title>CV - Eason(邱繼叡)</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div
          class="max-w-screen-lg shadow-2xl lg:mt-6 mx-auto bg-sky-50"
          id="pdf-root"
        >
          <Header />
          <div class="p-6">
            <Contact />
            <Education />
            <Experience />
            <Project />
          </div>
        </div>
      </body>
    </>
  );
}
