const pages = {
  overview: {
    type: "folders",
    items: [
      { name: "全部作品", page: "allWork", folderType: "preview" },
      { name: "UIUX设计", page: "uiux", folderType: "preview" },
      { name: "平面设计", page: "graphic", folderType: "preview" },
      { name: "ZINE", page: "zine", folderType: "preview" },
      { name: "摄影", page: "photo", folderType: "warning" },
      { name: "工作经验", page: "workExp", folderType: "warning" },
      { name: "Links", page: "links", folderType: "warning" },
    ],
  },

  allWork: {
    type: "gallery",
    items: [
      { image: "./images/work-01.jpg", title: "DSCF2692.jpg", desc: "作品展示" },
      { image: "./images/work-02.jpg", title: "DSCF2693.jpg", desc: "作品展示" },
      { image: "./images/work-03.jpg", title: "DSCF2694.jpg", desc: "作品展示" },
      { image: "./images/work-04.jpg", title: "DSCF2695.jpg", desc: "作品展示" },
      { image: "./images/work-05.jpg", title: "DSCF2696.jpg", desc: "作品展示" },
      { image: "./images/work-06.jpg", title: "DSCF2697.jpg", desc: "作品展示" },
    ],
  },

  uiux: {
    type: "gallery",
    items: [
      { image: "./images/uiux-01.jpg", title: "UIUX Project 01", desc: "网页界面设计" },
      { image: "./images/uiux-02.jpg", title: "UIUX Project 02", desc: "移动端界面设计" },
      { image: "./images/uiux-03.jpg", title: "UIUX Project 03", desc: "交互原型设计" },
    ],
  },

  graphic: {
    type: "gallery",
    items: [
      { image: "./images/graphic-01.jpg", title: "Poster 01", desc: "平面海报设计" },
      { image: "./images/graphic-02.jpg", title: "Poster 02", desc: "字体与版式设计" },
      { image: "./images/graphic-03.jpg", title: "Poster 03", desc: "视觉实验" },
    ],
  },

  zine: {
    type: "gallery",
    items: [
      { image: "./images/zine-01.jpg", title: "ZINE 01", desc: "独立出版物" },
      { image: "./images/zine-02.jpg", title: "ZINE 02", desc: "杂志版式设计" },
      { image: "./images/zine-03.jpg", title: "ZINE 03", desc: "摄影书设计" },
    ],
  },

  photo: {
    type: "masonry",
    items: [

      { image: "./images/photo-01.jpg", title: "Photo 01" },
      { image: "./images/photo-02.jpg", title: "Photo 02" },
      { image: "./images/photo-03.jpg", title: "Photo 03" },
      { image: "./images/photo-04.jpg", title: "Photo 04" },
      { image: "./images/photo-05.jpg", title: "Photo 05" },
      { image: "./images/photo-06.jpg", title: "Photo 06" },
      { image: "./images/photo-07.jpg", title: "Photo 07" },
      { image: "./images/photo-08.jpg", title: "Photo 08" },
      { image: "./images/photo-09.jpg", title: "Photo 09" },
      { image: "./images/photo-10.jpg", title: "Photo 10" },
      { image: "./images/photo-11.jpg", title: "Photo 11" },
      { image: "./images/photo-12.jpg", title: "Photo 12" },

    ],
  },

  workExp: {
    type: "archive",
    title: "工作经验",
    items: [
      {
        page: "exp2025",
        title: "2025.7 - 至今",
        subtitle: "当前工作 / 项目经历",
        desc: "这里可以放你最近一段工作经历、项目职责、产出成果和作品链接。",
      },
      {
        page: "exp2023",
        title: "2023.7 - 2025.6",
        subtitle: "阶段工作档案",
        desc: "这里可以放该阶段的主要岗位、项目内容、负责事项和成果总结。",
      },
      {
        page: "exp2022",
        title: "2022.11 - 2023.5",
        subtitle: "早期工作档案",
        desc: "这里可以放早期经历、实习内容、课程项目或其他相关记录。",
      },
    ],
  },

  exp2025: {
    type: "info",
    title: "2025.7 - 至今",
    desc: "这里填写你 2025.7 至今的工作经历详情。",
  },

  exp2023: {
    type: "info",
    title: "2023.7 - 2025.6",
    desc: "这里填写你 2023.7 - 2025.6 期间的工作经历详情。",
  },

  exp2022: {
    type: "info",
    title: "2022.11 - 2023.5",
    desc: "这里填写你 2022.11 - 2023.5 期间的经历详情。",
  },

  links: {
    type: "links",
    items: [
      { name: "YouTube", url: "https://www.youtube.com/" },
      { name: "SoundCloud", url: "https://soundcloud.com/" },
      { name: "Instagram", url: "https://www.instagram.com/" },
      { name: "Bandcamp", url: "https://bandcamp.com/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/" },
    ],
  },
};

const content = document.querySelector("#content");
const menus = document.querySelectorAll(".menu[data-page]");

function renderPage(pageName) {
  const page = pages[pageName];

  if (!page) {
    content.innerHTML = `
      <section class="info-page">
        <h1>页面不存在</h1>
        <p>没有找到这个页面内容。</p>
      </section>
    `;
    return;
  }

  if (page.type === "folders") {
    renderFolders(page.items);
  }

  if (page.type === "gallery") {
    renderGallery(page.items);
  }

  if (page.type === "masonry") {
    renderMasonry(page.items);
  }

  if (page.type === "archive") {
    renderArchive(page.title, page.items);
  }

  if (page.type === "info") {
    renderInfo(page.title, page.desc);
  }

  if (page.type === "links") {
    renderLinks(page.items);
  }
}

function renderFolders(items) {
  content.innerHTML = `
    <section class="folder-grid">
      ${items
        .map((item) => {
          const isWarning = item.folderType === "warning";

          return `
            <div class="folder folder-click" data-open="${item.page}">
              <div class="folder-icon ${isWarning ? "folder-warning" : ""}">
                ${
                  isWarning
                    ? `<div class="folder-sign"></div>`
                    : `<div class="folder-preview"></div>`
                }
              </div>
              <p>${item.name}</p>
            </div>
          `;
        })
        .join("")}
    </section>
  `;

  document.querySelectorAll(".folder-click").forEach((folder) => {
    folder.addEventListener("click", () => {
      const targetPage = folder.dataset.open;
      setActiveMenuByPage(targetPage);
      renderPage(targetPage);
    });
  });
}

function renderGallery(items) {
  content.innerHTML = `
    <section class="gallery-grid">
      ${items
        .map(
          (item) => `
            <div class="gallery-card">
              <div class="gallery-image">
                <img src="${item.image}" alt="${item.title}" />
              </div>
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </div>
          `
        )
        .join("")}
    </section>
  `;
}

function renderMasonry(items) {
  content.innerHTML = `
    <section class="masonry-page">
      <div class="masonry-grid">
        ${items
          .map(
            (item) => `
              <div class="masonry-card">
                <img src="${item.image}" alt="${item.title}" />
                <p>${item.title}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderArchive(title, items) {
  content.innerHTML = `
    <section class="archive-page">
      <h1>${title}</h1>

      <div class="archive-grid">
        ${items
          .map(
            (item) => `
              <div class="archive-card" data-open="${item.page}">
                <div class="archive-file">
                  <div class="archive-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div class="archive-info">
                  <h3>${item.title}</h3>
                  <h4>${item.subtitle}</h4>
                  <p>${item.desc}</p>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;

  document.querySelectorAll(".archive-card").forEach((card) => {
    card.addEventListener("click", () => {
      const targetPage = card.dataset.open;
      setActiveMenuByPage(targetPage);
      renderPage(targetPage);
    });
  });
}

function renderInfo(title, desc) {
  content.innerHTML = `
    <section class="info-page">
      <h1>${title}</h1>
      <p>${desc}</p>
    </section>
  `;
}

function renderLinks(items) {
  content.innerHTML = `
    <section class="links-page">
      ${items
        .map(
          (item) => `
            <a class="link-card" href="${item.url}" target="_blank">
              ${item.name}
            </a>
          `
        )
        .join("")}
    </section>
  `;
}

function clearActiveMenu() {
  menus.forEach((menu) => {
    menu.classList.remove("active");
  });
}

function setActiveMenuByPage(pageName) {
  clearActiveMenu();

  const targetMenu = document.querySelector(`.menu[data-page="${pageName}"]`);

  if (targetMenu) {
    targetMenu.classList.add("active");
  }
}

menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    const pageName = menu.dataset.page;

    clearActiveMenu();
    menu.classList.add("active");

    renderPage(pageName);
  });
});

renderPage("overview");