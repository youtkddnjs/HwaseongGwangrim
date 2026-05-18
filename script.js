const STORAGE_KEY = "hw_listings";
const AUTH_KEY = "hw_admin_logged_in";
const REQUEST_KEY = "hw_service_requests";
const NEW_ALERT_KEY = "hw_hide_new_alert";

const company = {
  name: "화성광림(주)",
  address: "경기 화성시 팔탄면 제암고주로 134-6",
  tel: "031-354-4482",
  fax: "050-2233-1114",
  phone: "010-5250-5364",
};

const baseListings = [
  {
    id: "kl-1204ex",
    title: "5톤 광림 집게차 1204EX",
    type: "집게차",
    ton: "5톤",
    year: "2018년",
    mileage: "142,000km",
    price: "상담문의",
    status: "판매중",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "광림 장비가 장착된 5톤 집게차입니다. 현장 운행과 적재 작업에 바로 투입하기 좋은 사양이며 실차 확인 후 세부 상태를 안내해드립니다.",
  },
  {
    id: "grab-35-cover",
    title: "3.5톤 집게차 자동덮개",
    type: "집게차",
    ton: "3.5톤",
    year: "2020년",
    mileage: "88,500km",
    price: "상담문의",
    status: "입고예정",
    image:
      "https://images.unsplash.com/photo-1506306460327-3164753b74c7?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1506306460327-3164753b74c7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "도심 운행과 소규모 현장 작업에 적합한 3.5톤 집게차입니다. 자동덮개 사양으로 적재물 관리가 편합니다.",
  },
  {
    id: "cargo-crane-8",
    title: "8톤 카고크레인 특장",
    type: "카고크레인",
    ton: "8톤 이상",
    year: "2019년",
    mileage: "115,000km",
    price: "상담문의",
    status: "판매중",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506306460327-3164753b74c7?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "중량물 인양과 장거리 운행을 함께 고려한 카고크레인 매물입니다. 작업 반경과 장비 용량은 상담 시 확인 가능합니다.",
  },
  {
    id: "grab-25-compact",
    title: "2.5톤 광림 집게차 소형",
    type: "집게차",
    ton: "2.5톤",
    year: "2021년",
    mileage: "64,000km",
    price: "상담문의",
    status: "판매중",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506306460327-3164753b74c7?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "소형 현장과 좁은 진입로 운행에 적합한 2.5톤급 집게차입니다. 실제 차량 상태와 장비 사양은 상담 시 안내합니다.",
  },
  {
    id: "grab-5t-auto",
    title: "5톤 집게차 자동덮개 사양",
    type: "집게차",
    ton: "5톤",
    year: "2017년",
    mileage: "176,000km",
    price: "상담문의",
    status: "판매중",
    image:
      "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "자동덮개 사양을 갖춘 5톤 집게차 매물입니다. 폐기물, 고철, 조경 현장 운행에 맞춰 확인 가능합니다.",
  },
  {
    id: "special-35",
    title: "3.5톤 특장 작업차",
    type: "특장차",
    ton: "3.5톤",
    year: "2022년",
    mileage: "51,000km",
    price: "상담문의",
    status: "입고예정",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "현장 작업용 특장 구성 매물입니다. 적재함 구성과 작업 장비 상태는 실차 확인 후 자세히 안내합니다.",
  },
];

const newTruckListings = [
  {
    id: "new-grab-5t",
    title: "광림 5톤 집게차 신차 상담",
    type: "집게차",
    ton: "5톤",
    year: "신차",
    mileage: "0km",
    price: "견적 상담",
    status: "신차상담",
    image:
      "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "고철, 폐기물, 목재 운반 현장에 많이 검토되는 5톤급 집게차 신차 상담입니다. 작업 환경에 맞춰 집게 사양, 적재함, 보조 장치를 함께 안내합니다.",
  },
  {
    id: "new-grab-35t",
    title: "광림 3.5톤 집게차 신차 상담",
    type: "집게차",
    ton: "3.5톤",
    year: "신차",
    mileage: "0km",
    price: "견적 상담",
    status: "신차상담",
    image:
      "https://images.unsplash.com/photo-1506306460327-3164753b74c7?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1506306460327-3164753b74c7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "도심 운행, 조경, 소규모 수거 현장에 적합한 3.5톤급 집게차 상담입니다. 운행 조건과 적재물에 맞춰 필요한 사양을 비교합니다.",
  },
  {
    id: "new-cargo-crane",
    title: "광림 카고크레인 신차 상담",
    type: "카고크레인",
    ton: "맞춤 상담",
    year: "신차",
    mileage: "0km",
    price: "견적 상담",
    status: "신차상담",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506306460327-3164753b74c7?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "중량물 인양, 적재, 현장 이동 조건을 기준으로 카고크레인 신차 사양을 상담합니다. 크레인 용량과 작업 반경을 함께 검토합니다.",
  },
  {
    id: "new-special-body",
    title: "광림 특장차 맞춤 제작 상담",
    type: "특장차",
    ton: "맞춤 상담",
    year: "신차",
    mileage: "0km",
    price: "견적 상담",
    status: "신차상담",
    image:
      "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "작업 목적에 맞춰 적재함, 보조 장치, 장비 구성을 검토하는 특장차 신차 상담입니다.",
  },
  {
    id: "new-grab-8t",
    title: "광림 8톤 이상 대형 집게차 상담",
    type: "집게차",
    ton: "8톤 이상",
    year: "신차",
    mileage: "0km",
    price: "견적 상담",
    status: "신차상담",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "대형 적재와 고하중 작업을 고려한 8톤 이상 집게차 신차 상담입니다. 현장 조건에 맞춰 사양을 검토합니다.",
  },
  {
    id: "new-crane-light",
    title: "소형 카고크레인 신차 상담",
    type: "카고크레인",
    ton: "3.5톤",
    year: "신차",
    mileage: "0km",
    price: "견적 상담",
    status: "신차상담",
    image:
      "https://images.unsplash.com/photo-1506306460327-3164753b74c7?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1506306460327-3164753b74c7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1000&q=80",
    ],
    description:
      "도심 작업과 소형 인양 작업에 적합한 카고크레인 신차 상담입니다. 차체 크기와 장비 용량을 함께 비교합니다.",
  },
];

const currentFile = window.location.pathname.split("/").pop() || "index.html";
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");

const isAdmin = () => localStorage.getItem(AUTH_KEY) === "true";
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const normalizeSiteChrome = () => {
  document.querySelectorAll(".brand").forEach((brand) => {
    brand.setAttribute("href", "./index.html");
    brand.setAttribute("aria-label", "화성광림 홈");
    brand.innerHTML = `
      <span class="brand-mark">HK</span>
      <span>
        <strong>화성광림</strong>
        <small>KWANGLIM DEALER</small>
      </span>
    `;
  });

  const nav = document.querySelector(".main-nav");
  if (nav) {
    const items = [
      ["about.html", "회사소개", "./about.html"],
      ["new-trucks.html", "신차", "./new-trucks.html"],
      ["inventory.html", "보유 매물", "./inventory.html"],
      ["service.html", "상담/정비", "./service.html"],
      ["contact.html", "오시는 길", "./contact.html"],
    ];

    nav.innerHTML = [
      ...items.map(([key, label, href]) => {
        const active =
          key === currentFile || (currentFile === "" && key === "index.html")
            ? ' aria-current="page"'
            : "";
        return `<a href="${href}"${active}>${label}</a>`;
      }),
      '<a class="admin-only" href="./admin-requests.html">문의관리</a>',
      '<a class="admin-only" href="./admin-new.html">매물등록</a>',
    ].join("");
  }

  document.querySelectorAll(".header-call").forEach((link) => {
    link.textContent = `상담문의 ${company.tel}`;
    link.setAttribute("href", `tel:${company.tel}`);
  });

  document.querySelectorAll(".site-footer").forEach((footer) => {
    footer.innerHTML = `
      <div>
        <strong>${company.name}</strong>
        <p>광림 집게차 공식 대리점 · 신차 상담 및 보유 중고 특장차 판매</p>
        <p>${company.address}</p>
      </div>
      <address>
        <span>TEL : <a href="tel:${company.tel}">${company.tel}</a></span><br />
        <span>FAX : ${company.fax}</span><br />
        <span>PHONE : <a href="tel:${company.phone}">${company.phone}</a></span>
      </address>
      <a class="auth-link admin-entry" href="./admin-login.html" aria-label="관리자 로그인">관리자</a>
    `;
  });

  document.querySelectorAll('select[name="type"]').forEach((select) => {
    const current = select.value;
    select.innerHTML = `
      <option value="">전체</option>
      <option value="집게차">집게차</option>
      <option value="카고크레인">카고크레인</option>
      <option value="특장차">특장차</option>
    `;
    select.value = current;
  });

  document.querySelectorAll('select[name="ton"]').forEach((select) => {
    const current = select.value;
    select.innerHTML = `
      <option value="">전체</option>
      <option value="2.5톤">2.5톤</option>
      <option value="3.5톤">3.5톤</option>
      <option value="5톤">5톤</option>
      <option value="8톤 이상">8톤 이상</option>
    `;
    select.value = current;
  });
};

const getStoredListings = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (error) {
    return [];
  }
};

const getStoredRequests = () => {
  try {
    return JSON.parse(localStorage.getItem(REQUEST_KEY) || "[]");
  } catch (error) {
    return [];
  }
};

const saveRequests = (requests) => {
  localStorage.setItem(REQUEST_KEY, JSON.stringify(requests));
};

const getListings = () => [...getStoredListings(), ...baseListings];
const getDetailUrl = (id) => `./detail.html?id=${encodeURIComponent(id)}`;
const getNewDetailUrl = (id) => `./new-detail.html?id=${encodeURIComponent(id)}`;

const listingCard = (item) => `
  <article class="truck-card">
    <a href="${getDetailUrl(item.id)}" aria-label="${escapeHtml(item.title)} 상세 보기">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />
      <div class="truck-body">
        <span class="status">${escapeHtml(item.status || "판매중")}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <dl>
          <div><dt>연식</dt><dd>${escapeHtml(item.year)}</dd></div>
          <div><dt>주행</dt><dd>${escapeHtml(item.mileage)}</dd></div>
          <div><dt>톤수</dt><dd>${escapeHtml(item.ton)}</dd></div>
        </dl>
        <strong>${escapeHtml(item.price)}</strong>
      </div>
    </a>
  </article>
`;

const newListingCard = (item) => `
  <article class="truck-card">
    <a href="${getNewDetailUrl(item.id)}" aria-label="${escapeHtml(item.title)} 상세 보기">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />
      <div class="truck-body">
        <span class="status">${escapeHtml(item.status)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <dl>
          <div><dt>차종</dt><dd>${escapeHtml(item.type)}</dd></div>
          <div><dt>톤수</dt><dd>${escapeHtml(item.ton)}</dd></div>
          <div><dt>구분</dt><dd>${escapeHtml(item.year)}</dd></div>
        </dl>
        <strong>${escapeHtml(item.price)}</strong>
      </div>
    </a>
  </article>
`;

const applyAuthState = () => {
  document.body.classList.toggle("is-admin", isAdmin());
  document.querySelectorAll(".auth-link").forEach((link) => {
    if (isAdmin()) {
      link.textContent = "로그아웃";
      link.setAttribute("href", "#logout");
    } else {
      link.textContent = "관리자 로그인";
      link.setAttribute("href", "./admin-login.html");
    }
  });
};

const renderListings = () => {
  const container = document.querySelector("[data-listings]");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const mode = container.dataset.listings;
  const typeFilter = params.get("type") || "";
  const tonFilter = params.get("ton") || "";

  document.querySelectorAll("[data-filter]").forEach((filter) => {
    filter.value = params.get(filter.dataset.filter) || "";
  });

  let listings = getListings();
  if (typeFilter) listings = listings.filter((item) => item.type === typeFilter);
  if (tonFilter) listings = listings.filter((item) => item.ton === tonFilter);
  if (mode === "featured") listings = listings.slice(0, 8);

  container.innerHTML = listings.length
    ? listings.map(listingCard).join("")
    : '<div class="empty-state">조건에 맞는 매물이 없습니다.</div>';
};

const renderNewListings = () => {
  const container = document.querySelector("[data-new-listings]");
  if (!container) return;
  container.innerHTML = newTruckListings.map(newListingCard).join("");
};

const renderDetail = () => {
  const detail = document.querySelector("[data-detail]");
  if (!detail) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const item = getListings().find((listing) => listing.id === id);

  if (!item) {
    detail.innerHTML = `
      <a class="detail-back" href="./inventory.html">목록으로 돌아가기</a>
      <div class="empty-state">매물을 찾을 수 없습니다.</div>
    `;
    return;
  }

  document.title = `${item.title} | 화성광림`;
  const images = [...new Set([item.image, ...(item.images || [])])].filter(Boolean);
  detail.innerHTML = `
    <a class="detail-back" href="./inventory.html">목록으로 돌아가기</a>
    <div class="detail-main">
      <div class="detail-gallery">
        <img src="${escapeHtml(images[0])}" alt="${escapeHtml(item.title)} 대표 이미지" />
        <div class="thumb-grid">
          ${images
            .slice(1)
            .map(
              (image, index) =>
                `<img src="${escapeHtml(image)}" alt="${escapeHtml(item.title)} 추가 이미지 ${index + 1}" loading="lazy" />`,
            )
            .join("")}
        </div>
      </div>
      <aside class="detail-summary">
        <span class="status">${escapeHtml(item.status || "판매중")}</span>
        <h1>${escapeHtml(item.title)}</h1>
        <dl class="detail-specs">
          <div><dt>차종</dt><dd>${escapeHtml(item.type)}</dd></div>
          <div><dt>톤수</dt><dd>${escapeHtml(item.ton)}</dd></div>
          <div><dt>연식</dt><dd>${escapeHtml(item.year)}</dd></div>
          <div><dt>주행거리</dt><dd>${escapeHtml(item.mileage)}</dd></div>
        </dl>
        <div class="detail-price">${escapeHtml(item.price)}</div>
        <p class="detail-description">${escapeHtml(item.description)}</p>
        <div class="hero-actions">
          <a class="primary-button" href="tel:${company.phone}">전화 상담</a>
          <a class="secondary-button light" href="./inventory.html">다른 매물 보기</a>
        </div>
      </aside>
    </div>
  `;
};

const renderNewDetail = () => {
  const detail = document.querySelector("[data-new-detail]");
  if (!detail) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const item = newTruckListings.find((listing) => listing.id === id);

  if (!item) {
    detail.innerHTML = `
      <a class="detail-back" href="./new-trucks.html">신차 목록으로 돌아가기</a>
      <div class="empty-state">신차 정보를 찾을 수 없습니다.</div>
    `;
    return;
  }

  document.title = `${item.title} | 화성광림`;
  const images = [...new Set([item.image, ...(item.images || [])])].filter(Boolean);
  detail.innerHTML = `
    <a class="detail-back" href="./new-trucks.html">신차 목록으로 돌아가기</a>
    <div class="detail-main">
      <div class="detail-gallery">
        <img src="${escapeHtml(images[0])}" alt="${escapeHtml(item.title)} 대표 이미지" />
        <div class="thumb-grid">
          ${images
            .slice(1)
            .map(
              (image, index) =>
                `<img src="${escapeHtml(image)}" alt="${escapeHtml(item.title)} 참고 이미지 ${index + 1}" loading="lazy" />`,
            )
            .join("")}
        </div>
      </div>
      <aside class="detail-summary">
        <span class="status">${escapeHtml(item.status)}</span>
        <h1>${escapeHtml(item.title)}</h1>
        <dl class="detail-specs">
          <div><dt>차종</dt><dd>${escapeHtml(item.type)}</dd></div>
          <div><dt>톤수</dt><dd>${escapeHtml(item.ton)}</dd></div>
          <div><dt>구분</dt><dd>${escapeHtml(item.year)}</dd></div>
          <div><dt>주행거리</dt><dd>${escapeHtml(item.mileage)}</dd></div>
        </dl>
        <div class="detail-price">${escapeHtml(item.price)}</div>
        <p class="detail-description">${escapeHtml(item.description)}</p>
        <div class="hero-actions">
          <a class="primary-button" href="./service.html">신차 상담예약</a>
          <a class="secondary-button light" href="./new-trucks.html">다른 신차 보기</a>
        </div>
      </aside>
    </div>
  `;
};

const bindFilters = () => {
  const filterForm = document.querySelector(".filter-form");
  if (!filterForm) return;

  filterForm.addEventListener("change", () => {
    const params = new URLSearchParams();
    filterForm.querySelectorAll("[data-filter]").forEach((filter) => {
      if (filter.value) params.set(filter.dataset.filter, filter.value);
    });
    window.location.href = `./inventory.html${params.toString() ? `?${params}` : ""}`;
  });
};

const bindAuth = () => {
  document.addEventListener("click", (event) => {
    const link = event.target.closest(".auth-link");
    if (!link || link.getAttribute("href") !== "#logout") return;
    event.preventDefault();
    localStorage.removeItem(AUTH_KEY);
    applyAuthState();
    window.location.replace("./index.html");
  });

  const loginForm = document.querySelector(".admin-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      localStorage.setItem(AUTH_KEY, "true");
      window.location.href = "./inventory.html";
    });
  }
};

const guardAdminPage = () => {
  if (document.body.dataset.requiresAdmin === "true" && !isAdmin()) {
    window.location.replace("./admin-login.html");
  }
};

const bindAdminForm = () => {
  const form = document.querySelector("[data-admin-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const image = data.get("image").trim();
    const extraImages = data
      .get("images")
      .split(/\r?\n/)
      .map((url) => url.trim())
      .filter(Boolean);

    const listing = {
      id: `custom-${Date.now()}`,
      title: data.get("title").trim(),
      type: data.get("type"),
      ton: data.get("ton").trim(),
      year: data.get("year").trim(),
      mileage: data.get("mileage").trim(),
      price: data.get("price").trim(),
      status: "판매중",
      image,
      images: [image, ...extraImages],
      description: data.get("description").trim(),
    };

    const stored = getStoredListings();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([listing, ...stored]));
    window.location.href = getDetailUrl(listing.id);
  });
};

const bindRequestForm = () => {
  const form = document.querySelector("[data-request-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const result = document.querySelector("[data-request-result]");
    const request = {
      id: `request-${Date.now()}`,
      category: data.get("category"),
      name: data.get("name").trim(),
      phone: data.get("phone").trim(),
      date: data.get("date"),
      vehicle: data.get("vehicle"),
      message: data.get("message").trim(),
      createdAt: new Date().toISOString(),
    };

    saveRequests([request, ...getStoredRequests()]);
    form.reset();
    if (result) {
      result.textContent = "문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.";
    }
  });
};

const renderAdminRequests = () => {
  const container = document.querySelector("[data-admin-requests]");
  if (!container) return;
  if (!isAdmin()) {
    window.location.replace("./admin-login.html");
    return;
  }

  const activeCategory =
    document.querySelector("[data-request-filter].is-active")?.dataset.requestFilter || "전체";
  const requests = getStoredRequests();
  const filtered =
    activeCategory === "전체"
      ? requests
      : requests.filter((request) => request.category === activeCategory);

  container.innerHTML = filtered.length
    ? filtered
        .map(
          (request) => `
            <article class="request-item">
              <div>
                <span class="status">${escapeHtml(request.category)}</span>
                <h3>${escapeHtml(request.name)} · ${escapeHtml(request.phone)}</h3>
                <p>${escapeHtml(request.message)}</p>
                <dl>
                  <div><dt>관심 차종</dt><dd>${escapeHtml(request.vehicle || "-")}</dd></div>
                  <div><dt>희망 상담일</dt><dd>${escapeHtml(request.date || "미정")}</dd></div>
                  <div><dt>접수일</dt><dd>${escapeHtml(new Date(request.createdAt).toLocaleString("ko-KR"))}</dd></div>
                </dl>
              </div>
              <button type="button" class="delete-button" data-delete-request="${escapeHtml(request.id)}">삭제</button>
            </article>
          `,
        )
        .join("")
    : '<div class="empty-state">해당 카테고리의 문의가 없습니다.</div>';
};

const bindAdminRequests = () => {
  const panel = document.querySelector("[data-admin-panel]");
  if (!panel) return;
  if (!isAdmin()) {
    window.location.replace("./admin-login.html");
    return;
  }

  panel.addEventListener("click", (event) => {
    const filter = event.target.closest("[data-request-filter]");
    if (filter) {
      document.querySelectorAll("[data-request-filter]").forEach((button) => {
        button.classList.toggle("is-active", button === filter);
      });
      renderAdminRequests();
      return;
    }

    const deleteButton = event.target.closest("[data-delete-request]");
    if (!deleteButton) return;
    const id = deleteButton.dataset.deleteRequest;
    saveRequests(getStoredRequests().filter((request) => request.id !== id));
    renderAdminRequests();
  });

  renderAdminRequests();
};

const bindNewAlert = () => {
  const alert = document.querySelector("[data-new-alert]");
  if (!alert) return;

  if (localStorage.getItem(NEW_ALERT_KEY) === "true") {
    alert.remove();
    return;
  }

  alert.classList.add("is-visible");
  alert.querySelector("[data-dismiss-new-alert]")?.addEventListener("click", () => {
    localStorage.setItem(NEW_ALERT_KEY, "true");
    alert.remove();
  });
};

window.addEventListener("pageshow", () => {
  if (document.body.dataset.requiresAdmin === "true" && !isAdmin()) {
    window.location.replace("./admin-login.html");
  }
});

normalizeSiteChrome();

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

applyAuthState();
guardAdminPage();
bindAuth();
bindFilters();
bindAdminForm();
bindRequestForm();
bindAdminRequests();
bindNewAlert();
renderListings();
renderNewListings();
renderDetail();
renderNewDetail();
