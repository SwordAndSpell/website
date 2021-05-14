// Node modules.
import React from "react"
// Relative imports.
import facebook from "../../../static/images/facebook.svg"
import instagram from "../../../static/images/instagram.svg"
import twitter from "../../../static/images/twitter.svg"
import { Wrapper } from "./styles"

const Footer = () => {
  return (
    <Wrapper>
      <div className="background" />

      {/* Top Divider */}
      <div className="divider" />

      {/* Copyright */}
      <section>
        <p>
          Copyright © {new Date().getFullYear()}
          <br />
          Built with ⚔️ by{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/srsuddath"
          >
            @srsuddath
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/kelsonic"
          >
            @kelsonic
          </a>
          .
        </p>
      </section>

      {/* Social Media */}
      <section>
        <h2>Social Media</h2>
        <ul>
          <li>
            <img alt="twitter" src={twitter} />
          </li>
          <li>
            <img alt="facebook" src={facebook} />
          </li>
          <li>
            <img alt="instagram" src={instagram} />
          </li>
        </ul>
      </section>
    </Wrapper>
  )
}

export default Footer
