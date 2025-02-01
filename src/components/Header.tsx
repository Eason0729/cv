import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <div class="p-6 space-y-3 bg-sky-700 text-white font-semibold">
      <h2 class="text-2xl">邱繼叡(Eason)</h2>
      <p class="text-xl">
        Sophomore in CSIE NCKU.{" "}
        <span class="font-light">
          Seeking Intern opportunity for 2025 summer.
        </span>
      </p>
    </div>
  );
});
