import { component$ } from "@builder.io/qwik";
import { BsGithub, BsLinkedin, BsMailbox } from "@qwikest/icons/bootstrap";

export const Contact = component$(() => {
  return (
    <>
      <a href="#contact">
        <div
          class="bg-sky-700 hover:bg-sky-400 rounded-full py-2 px-3 lg:mx-16 mx-3 mb-4 mt-6 text-lg font-semibold text-white text-center"
          id="contact"
        >
          Contact
        </div>
      </a>

      <div class="my-3 text-base font-bold">
        <ul>
          <a href="https://www.linkedin.com/in/%E9%82%B1%E9%98%BF%E7%9D%BF/">
            <li>
              <BsLinkedin /> https://www.linkedin.com/in/邱阿睿
            </li>
          </a>
        </ul>
        <ul>
          <a href="mailto:easonqq0000@gmail.com">
            <li>
              <BsMailbox />
              <span class="ml-2">mailto:easonqq0000@gmail.com</span>
            </li>
          </a>
        </ul>
        <ul>
          <a href="https://github.com/Eason0729/">
            <li>
              <BsGithub />
              <span class="ml-2">https://github.com/Eason0729/</span>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
});
