import { component$ } from "@builder.io/qwik";
import {
  BsBriefcase,
  BsCalendar2,
  BsLink45Deg,
  BsPerson,
} from "@qwikest/icons/bootstrap";

interface Data {
  title: string;
  date: string;
  price: string;
  url?: string;
  descriptions?: string[];
  tags?: string[];
}

function ExperienceEntry(
  { title, url, date, price, descriptions, tags }: Data,
) {
  return (
    <div class="pb-4">
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
          <ul class="text-sm list-disc ml-5 leading-4">
            {(descriptions || []).map((item) => (
              <li class="py-1">
                {item}
              </li>
            ))}
          </ul>
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
      {tags && tags.length > 0 && (
        <div class="text-white space-x-1 flex flex-wrap overflow-hidden text-sm font-semibold py-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              class="rounded-lg py-1 px-2 bg-sky-700 hover:bg-orange-600 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

const datas: Data[] = [
  {
    title: "Hackathon Junior Taiwan 2021",
    date: "Aug 2021",
    price: "UI/UX",
    url: "https://github.com/info-rubbish/2021-summer",
    descriptions: [
      "Solve SDGs problem with an online study platform",
    ],
    tags: ["Vue", "Javascript", "Golang", "Docker"],
  },
  {
    title: "Meichu Hackathon 2024",
    date: "Oct 2024",
    price: "NXP 2nd Prize",
    url: "https://github.com/info-rubbish/meichu2024",
    descriptions: [
      "Implement a bus tracking system with i.MX RT1060 Evaluation Kit",
      "Develop a PWA for user to track the bus in real-time",
    ],
    tags: ["Rust", "Nuttx", "Typescript", "React"],
  },
  {
    title: "Google Developer Student Club",
    date: "2023 - 2024",
    price: "GCP SIG",
    url: "https://github.com/gdsc-ncku/sync-focus",
    descriptions: [
      "Develop a web app (sync focus) to record browser usage",
    ],
    tags: ["GCP", "Python", "RabbitMQ", "FastAPI", "Browser Extension"],
  },
  {
    title: "Rust Learning Group(CCNS)",
    date: "2023 - 2024",
    price: "Lead",
    url: "https://github.com/Eason0729/rust-slide",
    descriptions: [
      "Organize biweekly meeting to learn Rust",
    ],
  },
  {
    title: "SITCON Hour of Code",
    date: "Dec 2023",
    price: "Teaching Assistant",
  },
];

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

      {datas.map((entry) => <ExperienceEntry {...entry} />)}
    </>
  );
});
//
