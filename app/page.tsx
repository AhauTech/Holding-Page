"use client";

import { useEffect, useState } from "react";

export default function Home() {
const [domain, setDomain] = useState("");
const [dark, setDark] = useState(true);

useEffect(() => {
setDomain(window.location.hostname);
}, []);

useEffect(() => {
  document.documentElement.classList.toggle("dark", dark);
}, [dark]);

return ( <main className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-200 transition-colors duration-500 ease-in-out **:transition-colors **:duration-500">


  {/* HEADER */}
  <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
    <div className="flex items-center gap-2">
      <img
        src="/logo.svg"
        alt="Ahau Tech"
        className="h-20 w-20 object-contain"
      />
      <span className="text-2xl font-bold tracking-tight">
        Ahau{" "}
        <span className="bg-linear-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
          Tech
        </span>
</span>
    </div>

    <button
      onClick={() => setDark(!dark)}
      className="text-sm px-3 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  </header>

  {/* CONTENT */}
  <section className="flex-1 flex items-center justify-center px-6">
    <div className="text-center max-w-md w-full">

      {/* Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-72 w-72 bg-emerald-500/20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Status */}
      <h1 className="flex items-center justify-center gap-2 text-xl font-medium">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        Dominio activo
      </h1>

      {/* Domain */}
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        {domain || "Cargando..."}
      </p>

      {/* Message */}
      <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Este dominio está correctamente configurado.
        <br />
        Próximamente se publicará contenido aquí.
      </p>

      {/* Links */}
      <div className="mt-6 flex justify-center gap-6 text-sm">
        <a
          href="https://google.com"
          target="_blank"
          className="hover:opacity-80 transition"
        >
          Portafolio
        </a>
        <a
          href="mailto:labs@ahautech.com"
          className="hover:opacity-80 transition"
        >
          Contacto
        </a>
      </div>

    </div>
  </section>

  {/* FOOTER */}
  <footer className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 text-center text-xs text-neutral-500">
    © {new Date().getFullYear()} Ahau Tech
  </footer>

</main>
);
}
