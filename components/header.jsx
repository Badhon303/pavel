import React from "react"

const Header = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
        <a href="/demo/astro-boilerplate">
          <div className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="3" y="12" width="6" height="8" rx="1"></rect>
              <rect x="9" y="8" width="6" height="12" rx="1"></rect>
              <rect x="15" y="4" width="6" height="16" rx="1"></rect>
              <path d="M4 20h14"></path>
            </svg>
            Kamruzzaman
          </div>
        </a>
        <nav>
          <ul className="flex gap-x-3 font-medium text-gray-200">
            <li className="hover:text-white">
              <a href="https://www.facebook.com/mdkamruzzaman.pavel?mibextid=JRoKGi&_rdr">
                Facebook
              </a>
            </li>
            <li className="hover:text-white">
              <a href="http://linkedin.com/in/md-kamruzzaman-pavel-7406931b2">
                LinkedIn
              </a>
            </li>
            <li className="hover:text-white">
              <a href="https://wa.me/qr/MFOW7XGE6XETN1">WhatsApp</a>
            </li>
            <li className="hover:text-white">
              <a href="">+880 1929-356971</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
