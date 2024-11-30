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

      <div class="mt-3 text-base">
        <h3 class="font-light mb-1">Programming Languages</h3>
        <ul class="font-bold pl-2">
          <li>
            <Rating name="Rust" dark={5} />
          </li>
          <li>
            <Rating name="Typescript" dark={4} />
          </li>
          <li>
            <Rating name="Javascript" dark={4} />
          </li>
          <li>
            <Rating name="SQL" dark={3} />
          </li>
          <li>
            <Rating name="Python" dark={3} />
          </li>
          <li>
            <Rating name="Java" dark={3} />
          </li>
          <li>
            <Rating name="CSS" dark={2} />
          </li>
        </ul>
      </div>
      <div class="mt-3 text-base">
        <h3 class="font-light mb-1">Tech Stacks</h3>
        <ul class="font-bold pl-2">
          <li>
            <Rating name="Tonic(gRPC)" dark={5} />
          </li>
          <li>
            <Rating name="Express.js" dark={4} />
          </li>
          <li>
            <Rating name="DuckDB" dark={4} />
          </li>
          <li>
            <Rating name="Oak" dark={4} />
          </li>
          <li>
            <Rating name="Axum" dark={4} />
          </li>
          <li>
            <Rating name="React" dark={3} />
          </li>
          <li>
            <Rating name="Vue" dark={2} />
          </li>
          <li>
            <Rating name="Axum" dark={2} />
          </li>
          <li>
            <Rating name="Parquet" dark={1} />
          </li>
        </ul>
      </div>
      <div class="mt-3 text-base">
        <h3 class="font-light mb-1">Operating Systems</h3>
        <ul class="font-bold pl-2">
          <li>
            <Rating name="Fedora" dark={5} />
          </li>
          <li>
            <Rating name="Ubuntu" dark={4} />
          </li>
          <li>
            <Rating name="Windows" dark={3} />
          </li>
          <li>
            <Rating name="MacOS" dark={1} />
          </li>
        </ul>
      </div>
      <div class="mt-3 text-base">
        <h3 class="font-light mb-1">Tools</h3>
        <ul class="font-bold pl-2">
          <li>
            <Rating name="Git" dark={5} />
          </li>
          <li>
            <Rating name="Kubernetes" dark={4} />
          </li>
          <li>
            <Rating name="Docker" dark={4} />
          </li>
          <li>
            <Rating name="Proxmox VE" dark={2} />
          </li>
        </ul>
      </div>
    </>
  );
});
