import { component$, JSXChildren } from "@builder.io/qwik";
import {
  BsAward,
  BsBriefcase,
  BsCalendar2,
  BsLink45Deg,
  BsPerson,
} from "@qwikest/icons/bootstrap";

function ExperienceEntry(
  { title, url, children }: {
    title: string;
    url?: string;
    children: JSXChildren[] | JSXChildren;
  },
) {
  if (children === undefined) children = [];
  if (!Array.isArray(children)) children = [children];
  return (
    <div class="grid grid-cols-5 cursor-grab items-center py-2">
      <a
        href={url}
        class="col-span-5 lg:col-span-3 items-center"
      >
        <h3
          class={url
            ? "text-xl font-semibold text-blue-900 hover:text-blue-500"
            : "text-xl font-semibold"}
        >
          {title}
          {url && (
            <span class="ml-2">
              <BsLink45Deg />
            </span>
          )}
        </h3>
      </a>
      <div class="col-span-5 lg:col-span-2 font-semibold">
        <div class="px-6 lg:px-0 lg:float-right min-w-40">
          {children.map((attr) => (
            <div class="lg:justify-between flex items-center">
              {attr}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Experience = component$(() => {
  return (
    <>
      <a href="#experience">
        <div
          class="bg-sky-700 hover:bg-sky-400 rounded-full py-2 lg:mx-16 px-3 mx-3 mb-4 mt-6 text-lg font-semibold text-white text-center"
          id="experience"
        >
          <span class="h-6 w-6 mr-3 inline-block">
            <BsBriefcase />
          </span>
          Experience
        </div>
      </a>

      <ExperienceEntry
        title="Hackathon Junior Taiwan 2021"
        url="https://github.com/info-rubbish/2021-summer"
      >
        <>
          <BsCalendar2 />&nbsp;Aug 2021
        </>
        <>
          <BsPerson />&nbsp;UI/UX
        </>
      </ExperienceEntry>

      <ExperienceEntry
        title="Meichu Hackathon 2024"
        url="https://github.com/info-rubbish/2021-summer"
      >
        <>
          <BsCalendar2 />&nbsp;Oct 2024
        </>
        <>
          <BsAward />&nbsp;NXP 2nd Prize
        </>
      </ExperienceEntry>

      <ExperienceEntry
        title="Google Developer Student Club"
        url="https://github.com/gdsc-ncku/sync-focus"
      >
        <>
          <BsCalendar2 />&nbsp;2023 - 2024
        </>
        <>
          <BsPerson />&nbsp;GCP SIG
        </>
      </ExperienceEntry>
      <ExperienceEntry title="SITCON Hour of Code">
        <>
          <BsCalendar2 />&nbsp;Dec 2023
        </>
        <>
          <BsPerson />&nbsp;Teaching Assistant
        </>
      </ExperienceEntry>
    </>
  );
});
//
