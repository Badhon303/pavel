import React from "react"

const Footer = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="border-t border-gray-600 pt-5">
        <div className="text-sm text-gray-200">
          © Copyright 2024 by Kamruzzaman. Projects Built with ♥ by{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://creativedesignsguru.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kamruzzaman
          </a>
          .
        </div>
      </div>
    </div>
  )
}

export default Footer
