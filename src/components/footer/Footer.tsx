import {
    FacebookLogoIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
    XLogoIcon,
    YoutubeLogoIcon
} from "@phosphor-icons/react";
 
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-900 px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                <div>
                    <p className="text-sm text-slate-400">© {year} Tech Nexus.</p>
                    <p className="text-xs text-slate-400">
                        Esta empresa e todas as informações são fictícias e criadas exclusivamente para fins educacionais.
                    </p>
                </div>
<nav className="flex gap-4">
<a
            className="text-slate-400 hover:text-blue-700 transition-all"
            href="#"
            title="Facebook"
            aria-label="Facebook"
>
<FacebookLogoIcon size={22} weight="fill" />
</a>
<a
            className="text-slate-400 hover:text-blue-700 transition-all"
            href="#"
            title="Instagram"
            aria-label="Instagram"
>
<InstagramLogoIcon size={22} weight="fill" />
</a>
<a
            className="text-slate-400 hover:text-blue-700 transition-all"
            href="#"
            title="Twitter"
            aria-label="Twitter"
>
<XLogoIcon size={22} weight="fill" />
</a>
<a
            className="text-slate-400 hover:text-blue-700 transition-all"
            href="#"
            title="LinkedIn"
            aria-label="LinkedIn"
>
<LinkedinLogoIcon size={22} weight="fill" />
</a>
<a
            className="text-slate-400 hover:text-blue-700 transition-all"
            href="#"
            title="LinkedIn"
            aria-label="LinkedIn"
>
<YoutubeLogoIcon size={22} weight="fill" />
</a>
</nav>
</div>
</footer>
  );
}