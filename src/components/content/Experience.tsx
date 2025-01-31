import { component$, JSXChildren } from "@builder.io/qwik";
import {
  BsAward,
  BsBriefcase,
  BsCalendar2,
  BsLink45Deg,
  BsPerson,
} from "@qwikest/icons/bootstrap";

function ExperienceEntry(
  { title, url, date, price }: {
    title: string;
    url?: string;
    date?: string;
    price?: string;
  },
) {
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
          <div class="lg:justify-between flex items-center">
            <BsCalendar2 />&nbsp;{date}
          </div>
          <div class="lg:justify-between flex items-center">
            <BsPerson />&nbsp;{price}
          </div>
        </div>
      </div>
    </div>
  );
}

interface Data {
  [key: string]: {
    date: string;
    price: string;
    url?: string;
  };
}

const data: Data = {
  "Hackathon Junior Taiwan 2021": {
    date: "Aug 2021",
    price: "UI/UX",
    url: "https://github.com/info-rubbish/2021-summer",
  },
  "Meichu Hackathon 2024": {
    date: "Oct 2024",
    price: "NXP 2nd Prize",
    url: "https://github.com/info-rubbish/meichu2024",
  },
  "Rust Learning Group(CCNS)": {
    date: "2023 - 2024",
    price: "Lead",
    url: "https://github.com/Eason0729/rust-slide",
  },
  "Google Developer Student Club": {
    date: "2023 - 2024",
    price: "GCP SIG",
    url: "https://github.com/gdsc-ncku/sync-focus",
  },
  "SITCON Hour of Code": {
    date: "Dec 2023",
    price: "Teaching Assistant",
  },
};

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

      {Object.entries(data).map(([title, { date, price, url }]) => (
        <ExperienceEntry
          title={title}
          date={date}
          price={price}
          url={url}
        />
      ))}
    </>
  );
});
//
