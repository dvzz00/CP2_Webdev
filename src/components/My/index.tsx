import React from "react";
import Image from "next/image";
import sociallinks from "../../../data/social-links";

const my = () => {
  return (
    <section className="pt-16 md:w">
      <div className="flex sm:items-center gap-5 flex-col sm:flex-row justify-start items-start">
        <Image
          src={"/images/romero.jpg"}
          width={70}
          height={70}
          alt="profile image"
          className="btn-bg rounded-full p-1"
        />

        <div>
          <h1 className="text-3xl mb-1 font-bold text-gray-1000">Oi, eu sou o Davi</h1>

          <p className="text-gray-600">
            Estudante 
            
          </p>
        </div>
      </div>
      <p className="py-5 text-gray-600 text-lg">
      Eu estudo Engenharia de Software na FIAP
      </p>

      <div className="flex gap-4">
        {sociallinks.map((item, i) => {
          return (
            <a
              key={i}
              className="btn-bg p-1 rounded-md hover:scale-105 duration-300 text-white"
              href={item.url}
              target="_blank"
              aria-label={`${item.name} link`}
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default my;
