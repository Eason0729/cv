import { component$ } from "@builder.io/qwik";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Project } from "./Project";

export const Content = component$(() => {
  return (
    <div class="p-6 lg:bg-sky-50 h-full">
      <Education />
      <Experience />
      <Project />
    </div>
  );
});
