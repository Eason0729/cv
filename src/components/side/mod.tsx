import { component$ } from "@builder.io/qwik";
import { Contact } from "./Contact";
import { Skill } from "./Skill";

export const Side = component$(() => {
  return (
    <div class="p-11 lg:p-6 lg:bg-sky-200 h-full">
      <Contact />
      <Skill />
    </div>
  );
});
