import { component$ } from "@builder.io/qwik";

function Rating(
  { name, dark, light }: { name: string; dark?: number; light?: number },
) {
  return (
    <div class="flex justify-between">
      <div>{name}</div>
      <div>
        {Array(dark ?? 0).fill(0).map(() => (
          <span class="w-4 h-4 bg-sky-800 hover:bg-orange-600 rounded-full inline-block ml-1">
          </span>
        ))}
        {Array(light ?? (5 - (dark ?? 0))).fill(0).map(() => (
          <span class="w-4 h-4 bg-white hover:bg-orange-600 rounded-full inline-block ml-1">
          </span>
        ))}
      </div>
    </div>
  );
}

const data = {
  "Programming Languages": [
    { name: "Rust", dark: 5 },
    { name: "Typescript", dark: 5 },
    { name: "Javascript", dark: 4 },
    { name: "Python", dark: 3 },
    { name: "SQL", dark: 3 },
    { name: "C", dark: 3 },
  ],
  "Tech Stacks": [
    { name: "gRPC", dark: 5 },
    { name: "Express.js", dark: 4 },
    { name: "Axum", dark: 4 },
    { name: "Oak", dark: 4 },
    { name: "DuckDB", dark: 4 },
    { name: "Sea-orm", dark: 4 },
    { name: "denodb", dark: 4 },
    { name: "drizzle", dark: 3 },
    { name: "Postgres", dark: 4 },
    { name: "React", dark: 4 },
    { name: "Vue", dark: 2 },
    { name: "TailwindCSS", dark: 3 },
  ],
  "Operating Systems": [
    { name: "Fedora", dark: 5 },
    { name: "Ubuntu", dark: 4 },
    { name: "Windows", dark: 3 },
  ],
  "Tools": [
    { name: "Git", dark: 5 },
    { name: "Docker", dark: 4 },
    { name: "Kubernetes", dark: 4 },
  ],
};

export const Skill = component$(() => {
  return (
    <>
      <a href="#skill">
        <div
          class="bg-sky-700 hover:bg-sky-400 rounded-full py-2 px-3 mx-3 text-lg font-semibold text-white text-center"
          id="skill"
        >
          Skill
        </div>
      </a>

      <div class="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {Object.entries(data).map(([title, items]) => (
          <div class="text-base">
            <h3 class="font-light mb-1">{title}</h3>
            <ul class="font-bold px-2">
              {items.map((item) => (
                <li>
                  <Rating {...item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
});
