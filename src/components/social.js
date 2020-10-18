import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  FaInstagram as Instagram,
  FaGithub as Github,
  FaWhatsapp as Whatsapp,
  FaRegEnvelope as Email
} from 'react-icons/fa'

const Icons = {
  Instagram,
  Github,
  Whatsapp,
  Email
}

const Social = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialLinks {
              label
              url
            }
          }
        }
      }
    `
  )

  return (
    <ul className="flex space-x-8 m-0 p-0 list-none">
      {site.siteMetadata.socialLinks.map((social, i) => {
        const Icon = Icons[social.label]

        return (
          <li key={i}>
            {social.url && (
              <a
                href={social.url}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-default hover:text-highLight"
              >
                <div>
                  <Icon size="26px" />
                </div>
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Social