import { useState, type FormEvent } from "react";

interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData(INITIAL_FORM);
  };

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 sm:text-5xl">
          Fale Conosco
        </h1>
        <p className="mt-3 text-base text-slate-500">
          Entre em contato para discutir parcerias, soluções enterprise ou
          dúvidas técnicas.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-xl border border-slate-200 bg-white p-8 text-left shadow-sm"
        >
          <div className="mb-5">
            <label
              htmlFor="fullName"
              className="mb-1 block text-sm font-semibold text-slate-800"
            >
              Nome Completo
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Jane Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-semibold text-slate-800"
            >
              Email Corporativo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@empresa.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-1 block text-sm font-semibold text-slate-800"
            >
              Assunto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Soluções Enterprise"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-semibold text-slate-800"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Como podemos ajudar a escalar seu negócio?"
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
