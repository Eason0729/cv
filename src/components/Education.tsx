import { component$ } from "@builder.io/qwik";
import { BsBook } from "@qwikest/icons/bootstrap";

export const Education = component$(() => {
  return (
    <>
      <a href="#education">
        <div
          class="bg-sky-700 hover:bg-sky-400 rounded-full py-2 px-3 lg:mx-16 mx-3 mb-4 mt-6 text-lg font-semibold text-white text-center"
          id="education"
        >
          <span class="h-6 w-6 mr-3 inline-block">
            <BsBook />
          </span>
          Education
        </div>
      </a>
      <h2 class="text-xl font-semibold">
        Bachelor's in Computer Science and Engineering
      </h2>
      <h3 class="text-lg mt-3">成功大學National Cheng Kung University</h3>
      <ul class="m-3 ml-7 list-disc">
        {[
          "Member of CCNS(電腦網路愛好社)",
          "Encouragement of Privileged High School Students Scholarship",
          "Member of NCKUCTF(資安社)",
          "Member of Information group at BT&D² Team",
        ].map((item) => (
          <li>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
});
