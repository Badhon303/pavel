import Image from "next/image"
import dgs from "@/public/assets/images/dgs.png"
import jci from "@/public/assets/images/jci.png"
import maps from "@/public/assets/images/project-maps.png"

const HighLight = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="mb-6 text-2xl font-bold">
        Recent{" "}
        <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
          <div className="shrink-0">
            <a href="https://www.facebook.com/JCIDhkUnited?mibextid=JRoKGi">
              <Image
                className="h-24 w-36 hover:translate-y-1"
                src={jci}
                alt="Project Web Design"
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <div className="flex flex-col items-center gap-y-2 md:flex-row">
              <a
                className="hover:text-cyan-400"
                href="https://www.facebook.com/JCIDhkUnited?mibextid=JRoKGi"
              >
                <div className="text-xl font-semibold">JCI</div>
              </a>
              <div className="ml-3 flex gap-2">
                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                  Free Library Setup
                </div>
                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">
                  Project Green Cox&apos;s Bazar
                </div>
                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">
                  Alokito Jibon
                </div>
                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                  Rise Project
                </div>
              </div>
            </div>
            <div className="mt-3 text-gray-400">
              As the Local President of JCI Dhaka United, I lead impactful
              community projects focused on driving positive change. Our
              initiatives include: <br /> <br />
              1. Free Library Setup: Establishing libraries for underprivileged
              children in schools to promote learning. <br /> 2. Project Green
              Cox&apos;s Bazar: A tree plantation program along the beach side
              road to enhance the environment. <br /> 3. Alokito Jibon:
              Supporting the education of poor children by taking responsibility
              for their studies. <br /> 4. Rise Project: Providing business
              opportunities to families to help them earn money and reset their
              lives. <br /> 5. Member Training: Conducting soft skills training,
              business grooming, and leadership development programs for our
              members. <br /> <br /> Through these projects and training
              programs, we aim to foster education, environmental
              sustainability, economic empowerment, and personal development
              within our community.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
          <div className="shrink-0">
            <a href="https://m.facebook.com/doubleglazingsolutions.bd?mibextid=JRoKGi">
              <Image
                className="h-32 w-36 hover:translate-y-1"
                src={dgs}
                alt="Project Fire"
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <div className="flex flex-col items-center gap-y-2 md:flex-row">
              <a
                className="hover:text-cyan-400"
                href="https://m.facebook.com/doubleglazingsolutions.bd?mibextid=JRoKGi"
              >
                <div className="text-xl font-semibold">DGS</div>
              </a>
              <div className="ml-3 flex-col md:flex-row gap-2">
                <div className="flex gap-2 mb-2">
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-violet-400 text-violet-900">
                    Noise-Reducing Windows
                  </div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-emerald-400 text-emerald-900">
                    Energy-Efficient Windows
                  </div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900">
                    Smart Windows
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                    Aluminium and uPVC Options
                  </div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">
                    Glass Roofs
                  </div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">
                    Smart Home Solutions
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-gray-400">
              At Double Glazing Solutions, with over 10 years of experience in
              the window manufacturing industry, we specialize in providing
              innovative and sustainable window solutions that enhance comfort
              and energy efficiency. Our key products include: <br /> <br />
              1. Noise-Reducing Windows: Our double glazing windows
              significantly reduce outside noise, creating a quieter indoor
              environment. <br />
              2. Energy-Efficient Windows: Designed to keep rooms cooler in the
              summer and warmer in the winter, our windows help reduce energy
              costs. <br />
              3. Smart Windows: Operable via remote or voice control, these
              windows offer enhanced privacy by automatically frosting, which
              excites and delights our customers. <br />
              4. Aluminium and uPVC Options: Our windows are available in both
              aluminium and uPVC options, providing flexibility and choice to
              our customers. <br />
              5. Glass Roofs: We also offer glass roofs to modernize the look of
              buildings, adding a touch of elegance and style. <br />
              6. Smart Home Solutions: Our smart home solutions include smart
              home automation, smart parking systems, and smart gardening
              features, providing convenience and efficiency to homeowners.{" "}
              <br /> <br />
              In addition to our innovative window solutions, we are committed
              to providing comprehensive smart home and modernization options
              for our clients, backed by a decade of industry experience. <br />
              Additionally, we have a trading business and supply high-quality
              hospital products through another venture, further expanding our
              reach and impact in the market.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
          <div className="shrink-0">
            <a href="/demo/astro-boilerplate">
              <Image
                className="h-36 w-36 hover:translate-y-1"
                src={maps}
                alt="Project Maps"
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <div className="flex flex-col items-center gap-y-2 md:flex-row">
              <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                <div className="text-xl font-semibold">Project 3</div>
              </a>
              <div className="ml-3 flex gap-2">
                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                  Astro.js
                </div>
                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-indigo-400 text-indigo-900">
                  Bootstrap
                </div>
                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                  TypeScript
                </div>
              </div>
            </div>
            <p className="mt-3 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse bibendum. Nunc non posuere consectetur, justo erat
              semper enim, non hendrerit dui odio id enim.
            </p>
          </div>
        </div>  */}
      </div>
    </div>
  )
}

export default HighLight
