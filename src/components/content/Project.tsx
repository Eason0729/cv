import { component$ } from "@builder.io/qwik";
import { BsLink45Deg, BsPinAngle } from "@qwikest/icons/bootstrap";

interface Data {
  title: string;
  url?: string;
  tags: string[];
  descriptions: string[];
}

function ProjectEntry(
  { title, url, tags, descriptions }: Data,
) {
  return (
    <div class="pb-4">
      <h2 class="text-xl font-semibold">
        {title}
      </h2>
      {url
        ? (
          <div class="grid grid-cols-5 items-center">
            <a
              href="https://github.com/mdcpp/mdoj"
              class="hover:text-blue-500 col-span-5 lg:col-span-3 text-lg font-light"
            >
              {url}&nbsp;<BsLink45Deg />
            </a>
            <div class="col-span-5 lg:col-span-2 text-white text-sm font-semibold py-2">
              <div class="lg:justify-end space-x-1 flex flex-wrap overflow-hidden">
                {tags.map((tag) => (
                  <span class="rounded-lg py-1 px-2 mt-1 bg-sky-700 hover:bg-orange-600 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
        : (
          <div class="col-span-5 lg:col-span-2 text-white text-sm font-semibold py-2">
            <div class="space-x-1 flex flex-wrap overflow-hidden">
              {tags.map((tag) => (
                <span class="rounded-lg py-1 px-2 mt-1 bg-sky-700 hover:bg-orange-600 whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

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
    title: "Website to schedule chemistry data analysis",
    tags: ["Typescript", "Kubernetes", "Yunikorn", "React"],
    descriptions: [
      "Similar to Apache Airflow but less powerful(also less complex to use).",
      "Avoid manual intervention between one analysis process and another.",
      "Run 5 different ML-based chemistry analysis on 8 machines.",
    ],
  },
  {
    title: "Grpc(grpc-web) services for a contest-management website",
    url: "https://github.com/mdcpp/mdoj",
    tags: ["gRPC", "Rust", "Sandbox", "FUSE", "Docker"],
    descriptions: [
      "Developed a contest-management website with grpc services for real-time communication.",
      "Implemented a contest management system with a real-time leaderboard.",
      "Developed a web-based Editor for the contest.",
    ],
  },
  {
    title: "Website for study resource",
    url: "https://tlds.functionxyz.eu.org/",
    tags: ["Firebase", "Serverless", "Node.js"],
    descriptions: [
      "Assist schoolmates in locating resources through the development of a website.",
      "Used by schoolmates, with over ten study notes within a month of release",
    ],
  },
  {
    title: "Dependency-free http reverse proxy",
    url: "https://github.com/Eason0729/simple-reverse-proxy",
    tags: ["Multithreading", "System Programming", "Rust"],
    descriptions: [
      "Developed a dependency-free http reverse proxy with multithreading support.",
      "Implemented a simple load balancer with round-robin algorithm that reach 40000 request per seconds.",
      "Implemented coroutine-based async I/O using executor-reactor model.",
    ],
  },
  {
    title: "Novel translation website",
    url: "https://github.com/Eason0729/novel-tralslate",
    tags: ["Web", "Typescript", "CI/CD", "React", "Crawler", "Docker"],
    descriptions: [
      "Developed a novel translation pipeline with LLM.",
      "Implemented a website for novel reading with a simple UI.",
      "Set up a CI/CD pipeline with Gitea Actions.",
    ],
  },
];

export const Project = component$(() => {
  return (
    <>
      <a href="#project">
        <div
          class="bg-sky-700 hover:bg-sky-400 rounded-full py-2 lg:mx-16 px-3 mx-3 mb-4 mt-6 text-lg font-semibold text-white text-center"
          id="project"
        >
          <span class="h-6 w-6 mr-3 inline-block">
            <BsPinAngle />
          </span>
          Side Project
        </div>
      </a>
      {datas.map((entry) => <ProjectEntry {...entry} />)}
    </>
  );
});
