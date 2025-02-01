import { Header } from "./components/Header";
import { Content } from "./components/content/mod";
import { Side } from "./components/side/mod";

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
          class="max-w-screen-lg shadow-2xl lg:mt-6 mx-auto bg-sky-100"
          id="pdf-root"
        >
          <Header />
          <div class="grid grid-cols-3 cursor-grab">
            <div class="col-span-3 lg:col-span-1">
              <Side />
            </div>
            <div class="col-span-3 lg:col-span-2">
              <Content />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
