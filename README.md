# Emmanuel Agida International — Website

A simple, responsive informational website for Emmanuel Agida International (EAI). The site presents EAI's organizational profile, services (consultancy, programs), events, media, case studies, and philanthropy efforts. It follows a consistent header/navigation/footer design and uses plain HTML, CSS and a small amount of JavaScript for UI behavior.

**Tech stack**
- HTML5
- CSS3 (variables, responsive breakpoints)
- Vanilla JavaScript (navigation toggle, active link highlighting)
- Font Awesome for icons

**Live pages (workspace)**
- `index.html` — Home
- `about.html` — Organizational profile
- `consultancy.html` — Consultancy services
- `programs.html` — Programs & offerings
- `consortium.html` — Consortium page
- `case.html` — Case studies
- `philanthropy.html` — Emmanuel Agida Foundation (philanthropy)
- `pub.html` — Events / publications
- `media.html` — Media (videos, podcasts, press)
- `contact.html` — Contact page
- `privacy-policy.html` — Privacy Policy (legal)
- `terms-and-conditions.html` — Terms & Conditions (legal)

All pages share `style.css`, `script.js`, and the `images/` folder.

**Project features & notes**
- Responsive header with a hamburger menu for small screens.
- CSS variables defined at the top of `style.css` for easy theming (primary, accent, text colors).
- Navigation and footer follow a single-page layout pattern: consistent header, hero/page-header, content sections, and footer.
- Footer includes links to Privacy Policy and Terms & Conditions.
- Accessibility tips: semantic headings, adequate touch target sizes on mobile, and readable color contrast using the provided color variables.

How to run locally
1. Open the project folder in your editor or file explorer.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari). No build step or server is required for basic browsing.

Development notes
- To add a new page that matches the site design: copy an existing page (e.g., `about.html`), update the page title and page-header content, add the page to the navigation list in the header of each page, and add a footer link if needed.
- CSS: `style.css` contains breakpoints at 1024px, 768px, and 480px. For navbar responsiveness, the mobile menu is controlled by the `.menu-toggle` button and `nav.open` class (see `script.js`).
- Icons: include Font Awesome link in the head of new pages: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`.

Contributing
- Fork or branch the repository.
- Follow the existing HTML/CSS structure and naming conventions.
- Keep changes minimal and focused; test responsiveness across common viewports.

Contact
- For site updates or content changes: info@eainternational.net

License
- No license file included. If you want an open-source license (e.g., MIT), add a `LICENSE` file and update this README.

---

If you'd like, I can:
- add a small local development server recipe (e.g., `npx http-server`) to the README,
- create a `CONTRIBUTING.md` with guidelines, or
- generate a small favicon and include it in the header of all pages.

