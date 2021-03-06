import { graphql, StaticQuery } from "gatsby"
import React from "react"
import "../styles/footer.less"

const Footer = () => (
  <footer>
    <StaticQuery
      query={UPYunQuery}
      render={data => {
        return (
          <a
            href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="upyun"
          >
            本网站由 <img src={data.file.publicURL} alt="又拍云" /> 提供 CDN
            加速/云储存服务
          </a>
        )
      }}
    />
    <div>
      <a
        href="http://www.beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        鲁ICP备 19006085 号
      </a>
      <span> / </span>
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37132102371392"
        target="_blank"
        rel="noopener noreferrer"
      >
        鲁公网安备 37132102371392 号
      </a>
    </div>
  </footer>
)

export default Footer

export const UPYunQuery = graphql`
  query UPYunQuery {
    file(name: { regex: "/又拍云/" }) {
      publicURL
    }
  }
`
