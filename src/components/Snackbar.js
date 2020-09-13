import React from "react"
import "../styles/Snackbar.less"

const Snackbar = ({ children, id }) => (
  <section className="snackbar" id={id}>
    {children}
    <button id="close-snackbar" aria-label="关闭消息条">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          fillRule="evenodd"
          fill="#FFFFFF"
          d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
        ></path>
      </svg>
    </button>
  </section>
)

export default Snackbar