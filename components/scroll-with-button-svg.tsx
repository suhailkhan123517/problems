"use client";

import { useRef } from "react";
import { Button } from "./ui/button";

// Define the structure of the programming language objects
interface ProgrammingLanguage {
  id: number;
  title: string;
  description: string;
}

const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: 1,
    title: "JavaScript",
    description:
      "JavaScript is a versatile, high-level programming language commonly used for web development, both on the client-side and server-side.",
  },
  {
    id: 2,
    title: "Python",
    description:
      "Python is an easy-to-read, high-level programming language with dynamic semantics, often used for web and software development, automation, and data analysis.",
  },
  {
    id: 3,
    title: "Java",
    description:
      "Java is a widely-used, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
  },
  {
    id: 4,
    title: "C++",
    description:
      "C++ is an extension of the C programming language, designed for system programming, game development, and applications requiring high-performance graphics.",
  },
  {
    id: 5,
    title: "C#",
    description:
      "C# is a modern, object-oriented programming language developed by Microsoft for building a wide range of enterprise applications that run on the .NET Framework.",
  },
  {
    id: 6,
    title: "Ruby",
    description:
      "Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity, well known for its Ruby on Rails web framework.",
  },
  {
    id: 7,
    title: "Go",
    description:
      "Go (or Golang) is a statically typed programming language designed by Google for high-performance, concurrent applications with efficient memory management.",
  },
  {
    id: 8,
    title: "Rust",
    description:
      "Rust is a systems programming language focused on safety, speed, and concurrency, with an emphasis on preventing memory errors such as null pointer dereferencing.",
  },
  {
    id: 9,
    title: "PHP",
    description:
      "PHP is a popular server-side scripting language designed for web development but also used as a general-purpose programming language.",
  },
  {
    id: 10,
    title: "TypeScript",
    description:
      "TypeScript is a superset of JavaScript that adds static types, enabling developers to catch type errors early in the development process.",
  },
];

export const ScrollWithButtonSvg = () => {
  const containerRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleScrollTo = (id: number) => {
    const targetElement = containerRefs.current[id];
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="w-60 bg-blue-600 flex flex-col gap-3 h-full p-5">
          {programmingLanguages.map((item) => (
            <Button key={item.id} onClick={() => handleScrollTo(item.id)}>
              {item.title}
            </Button>
          ))}
        </div>

        <div className="bg-red-500 flex-1 flex flex-col gap-10 px-20 overflow-auto py-20">
          {programmingLanguages.map((item) => (
            <div
              ref={(el) => {
                containerRefs.current[item.id] = el;
              }}
              key={item.id}
              className="rounded-md bg-rose-200"
            >
              <div className="h-[500px] p-10">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
