import Image from "next/image"
import web from "@/public/assets/images/web.png"
import facebook from "@/public/assets/images/facebook-icon.png"
import linkedin from "@/public/assets/images/linkedin-icon.png"
import whatsApp from "@/public/assets/images/wa.png"
import avatar from "@/public/assets/images/pavel.png"

const Hero = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
        <div>
          <h1 className="text-3xl font-bold">
            Hi there, I&apos;m{" "}
            <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Md. Kamruzzaman Pavel
            </span>{" "}
            👋
          </h1>
          <p className="mt-6 text-xl leading-9">
            Lthe Local President of{" "}
            <a
              className="text-cyan-400 hover:underline"
              href="https://www.facebook.com/JCIDhkUnited?mibextid=JRoKGi"
            >
              JCI Dhaka United,
            </a>{" "}
            where I lead impactful community projects aimed at driving positive
            change. I&apos;m also the proud owner of{" "}
            <a
              className="text-cyan-400 hover:underline"
              href="https://m.facebook.com/doubleglazingsolutions.bd?mibextid=JRoKGi"
            >
              Double Glazing Solutions
            </a>{" "}
            a leading window manufacturing company known for innovative and
            sustainable solutions. Our noise-reducing and energy-efficient
            windows, along with smart window options for enhanced privacy, have
            revolutionized the industry. It&apos;s a pleasure to combine my
            passion for community development with my entrepreneurial journey at
            Double Glazing Solutions.
          </p>
          <div className="mt-3 flex gap-1">
            <a href="https://dgs.com.bd">
              <Image
                className="h-10 w-10 mt-[6px] hover:translate-y-1"
                src={web}
                alt="Twitter icon"
                loading="lazy"
              />
            </a>
            <a href="https://www.facebook.com/mdkamruzzaman.pavel?mibextid=JRoKGi&_rdr">
              <Image
                className="h-12 w-12 hover:translate-y-1"
                src={facebook}
                alt="Facebook icon"
                loading="lazy"
              />
            </a>
            <a href="http://linkedin.com/in/md-kamruzzaman-pavel-7406931b2">
              <Image
                className="h-12 w-12 hover:translate-y-1"
                src={linkedin}
                alt="Linkedin icon"
                loading="lazy"
              />
            </a>
            <a href="https://wa.me/qr/MFOW7XGE6XETN1">
              <Image
                className="h-10 w-10 ms-1 mt-1 hover:translate-y-1"
                src={whatsApp}
                alt="whatsApp"
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
