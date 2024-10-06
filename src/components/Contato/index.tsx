"use client";
import sociallinks from "../../../data/social-links";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contato = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Por favor preencha todos os campos!");
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: name,
          to_name: "",
          message: message,
          reply_to: email,
        },
        options
      );

      if (res.status === 200) {
        toast.success("Mensagem enviada com sucesso!");
        setData({ name: "", email: "", message: "" });
        console.log("Mensagem enviada com sucesso!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Problema ao enviar a mensagem!");
    }
  };

  return (
    <main className="px-5  max-w-[800px] mx-auto flex-1">
      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-16 ">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensagem
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={3}
                value={message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-bg w-full px-4 py-2 rounded-lg text-white hover:bg-purple-500"
            >
              Enviar
            </button>
          </form>

          <div className="">
            <h3 className="text-xl font-bold mb-3"></h3>
            <p className="text-gray-700">
            Sinta-se à vontade para se conectar comigo em qualquer uma dessas plataformas.
            </p>
            <div className="flex gap-4 pt-4">
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

            <div className="mt-8">
              <h3 className="text-xl font-medium mt-4 mb-2 text-gray-700">
                Email
              </h3>
              <a href="mailto:coderamrin@gmail.com" className="text-gray-600">
                davifmvieira@gmail.com
              </a>

              <h3 className="text-xl font-medium mt-4 mb-2 text-gray-700">
                Numero
              </h3>
              <a href="tel:+8801621419010" className="text-gray-600">
                +55 (11)932442704
              </a>

              <h3 className="text-xl font-medium mt-4 mb-2 text-gray-700">
                Localidade
              </h3>
              <p className="text-gray-600">São Paulo, Brasil</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
