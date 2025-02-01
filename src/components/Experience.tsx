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
  descriptions: string[];
  tags: string[];
}

function ExperienceEntry(
  { title, url, date, price, descriptions, tags }: Data,
) {
  return (
    <div class="pb-4">
      <div class="md:flex justify-between items-center">
        <div>
          <h2 class="text-xl font-semibold">
            {title}
          </h2>
          {url
            ? (
              <div>
                {url}&nbsp; <BsLink45Deg />
              </div>
            )
            : null}
        </div>
        <div>
          <div>
            <div class="flex items-center lg:justify-end">
              <BsCalendar2 />&nbsp;{date}&nbsp;&nbsp;<BsPerson />&nbsp;{price}
            </div>
          </div>
          <div class="space-x-1 flex flex-wrap">
            {tags.map((tag) => (
              <span class="rounded-lg py-1 px-2 mt-1 text-white font-semibold text-sm bg-sky-700 hover:bg-orange-600 whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ul class="text-sm list-disc ml-5 leading-4">
        {descriptions.map((item) => (
          <li class="py-1">
            {item}
          </li>
        ))}
      </ul>
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
    tags: [],
  },
  {
    title: "SITCON Hour of Code",
    date: "Dec 2023",
    price: "Teaching Assistant",
    descriptions: [],
    tags: [],
  },
];

export const Experience = component$(() => {
  return (
    <>
      <a href="#experience">
        <div
          class="bg-sky-700 hover:bg-sky-400 rounded-full py-2 px-3 lg:mx-16 mx-3 mb-4 mt-6 text-lg font-semibold text-white text-center"
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
