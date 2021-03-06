require("prismjs/themes/prism-solarizedlight.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

exports.onRouteUpdate = () => {
  const block = document.querySelectorAll(".gatsby-highlight")
  const bars = document.querySelectorAll(".code-bar")
  if (block.length && !bars.length) {
    block.forEach(e => {
      const bar = document.createElement("div")
      bar.className = "code-bar"
      bar.textContent = e.dataset.language

      const copy = document.createElement("button")
      const copy$ = document.createElement("button")

      copy.className = "copy-button"
      copy$.className = "copy-button dollar"
      copy.textContent = "复制"
      copy$.textContent = "复制并去掉 $"

      copy.onclick = b => {
        const code =
          b.target.parentElement.parentElement.parentElement.lastElementChild
            .firstElementChild
        navigator.clipboard
          .writeText(code.textContent)
          .then(() => {
            b.target.textContent = "已复制"
          })
          .catch(err => {
            console.log("复制出错", err)
          })
      }
      copy$.onclick = b => {
        const code =
          b.target.parentElement.parentElement.parentElement.lastElementChild
            .firstElementChild
        navigator.clipboard
          .writeText(code.textContent.replace(/\$ /g, ""))
          .then(() => {
            b.target.textContent = "已复制"
          })
          .catch(err => {
            console.log("复制出错", err)
          })
      }

      const group = document.createElement("div")
      group.appendChild(copy)
      if (e.dataset.language === "bash") {
        group.appendChild(copy$)
      }
      bar.appendChild(group)

      const inner = e.firstElementChild
      e.insertBefore(bar, inner)
    })
  }

  const openSidebar = document.querySelector("#expand-aside")
  if (openSidebar) {
    openSidebar.addEventListener("click", () => {
      const aside = document.querySelector("aside")
      const header = document.querySelector("header")
      aside.classList.toggle("expand")
      header.classList.toggle("expand")
    })
  }

  const closeTips = document.querySelector("#close-tips")
  if (closeTips) {
    closeTips.addEventListener("click", () => {
      const outdatedTips = document.querySelector("#outdated-tips")
      outdatedTips.classList.add("hide")
    })
  }

  const openDialog = document.querySelector("#open-dialog")
  if (openDialog) {
    const dialog = document.querySelector("#home-dialog")
    const search = document.querySelector("#article-search")
    openDialog.addEventListener("click", () => {
      dialog.classList.add("show")
      setTimeout(() => {
        search.focus()
      }, 300)
    })

    window.addEventListener("keypress", e => {
      if (e.key === "/") {
        e.preventDefault()
        dialog.classList.toggle("show")
        if (dialog.classList.contains("show")) {
          setTimeout(() => {
            search.focus()
          }, 300)
        }
      }
    })
  }

  const closeDialog = document.querySelector("#close-dialog")
  if (closeDialog) {
    closeDialog.addEventListener("click", () => {
      const dialog = document.querySelector("#home-dialog")
      dialog.classList.remove("show")
    })
  }

  const closeSearch = document.querySelector("#close-search")
  if (closeSearch) {
    closeSearch.addEventListener("click", () => {
      const dialog = document.querySelector("#home-dialog")
      dialog.classList.remove("show")
    })
  }

  const article = document.querySelector("article")
  if (article) {
    const articleH1 = document.querySelector("article h1")
    const articleMeta = document.querySelector("#article-meta")
    article.insertBefore(articleH1, articleMeta)
  }
}
