import Image from "next/image"
import twitter from "@/public/assets/images/twitter-icon.png"
import facebook from "@/public/assets/images/facebook-icon.png"
import linkedin from "@/public/assets/images/linkedin-icon.png"
import whatsApp from "@/public/assets/images/youtube-icon.png"
import avatar from "@/public/assets/images/pavel.png"

const Hero = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
        <div>
          <h1 className="text-3xl font-bold">
            Hi there, I`&apos;`m{" "}
            <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Ixartz
            </span>{" "}
            👋
          </h1>
          <p className="mt-6 text-xl leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <a
              className="text-cyan-400 hover:underline"
              href="/demo/astro-boilerplate"
            >
              malesuada
            </a>{" "}
            nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit
            amet,{" "}
            <a
              className="text-cyan-400 hover:underline"
              href="/demo/astro-boilerplate"
            >
              consectetur
            </a>{" "}
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.
          </p>
          <div className="mt-3 flex gap-1">
            <a href="/demo/astro-boilerplate">
              <Image
                className="h-12 w-12 hover:translate-y-1"
                src={twitter}
                alt="Twitter icon"
                loading="lazy"
              />
            </a>
            <a href="/demo/astro-boilerplate">
              <Image
                className="h-12 w-12 hover:translate-y-1"
                src={facebook}
                alt="Facebook icon"
                loading="lazy"
              />
            </a>
            <a href="/demo/astro-boilerplate">
              <Image
                className="h-12 w-12 hover:translate-y-1"
                src={linkedin}
                alt="Linkedin icon"
                loading="lazy"
              />
            </a>
            <a href="/demo/astro-boilerplate">
              <Image
                className="h-12 w-12 hover:translate-y-1"
                src={whatsApp}
                alt="Youtube icon"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <Image
            className="h-80 w-64"
            src={avatar}
            alt="Avatar image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
