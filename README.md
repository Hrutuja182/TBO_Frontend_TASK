##  GitHub Repository

https://github.com/Hrutuja182/TBO_Frontend_TASK.git

## Local Setup Guide

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Hrutuja182/TBO_Frontend_TASK.git

## 2. Install dependencies
npm install or npm i

## 3. start the frontend
npm run dev

## 4. start the mock API server
cd mock-server
npm install
npm start



1.Which tools did you choose and why?
I choose following tools:
1.React (with TypeScript): It’s a powerful and flexible UI library that allows me to break down the UI into manageable components. TypeScript helps catch bugs early and improves code clarity — especially useful when working with APIs.

2.Vite: For its incredibly fast development server and build performance. It makes setup and iterations smooth and quick — a perfect fit for time-limited projects.

3.Tailwind CSS: A utility-first CSS framework that helps build responsive and consistent designs without writing too much custom CSS. It makes prototyping and styling much faster.

4.Axios: For handling API requests, as it provides a cleaner and more readable syntax than the native fetch.

5.Jest & React Testing Library: To write unit tests for the core logic and components — ensuring code reliability.

2.How would you collaborate with a backend developer if the API is not ready yet?
If the backend is not ready yet,here is how I would approach collaboration:
Agree on a shared API contract early, using tools like Swagger (OpenAPI) or Postman Collections. This way, I know what data to expect, even if it's not live yet.

Create mock data locally or use a mock server (like the one provided here) to simulate API responses during frontend development.

Stay in close communication — daily standups or async messages (e.g., Slack) — to track changes in the API and resolve misunderstandings quickly.

If the backend team can provide static JSON files, I can connect those locally and swap the API endpoint later.

3.What potential sources of error do you expect with this API design?
Some common risks I handled with this API:
Missing or null values in the response (e.g., mainImage, title.en, or artist.name.en might be undefined).

Image loading errors — a broken or empty URL could disrupt the UI, so I added a fallback image.

Pagination handling — unclear pagination format or missing meta information can make it tricky to implement accurate navigation.

Hardcoded IDs — if filter values like artist IDs aren’t available from the API, hardcoding becomes a temporary workaround and could lead to mismatches.

Inconsistent data structure — if the response shape changes over time or isn't properly versioned, it could break the frontend.

4.How could the UI be made more accessible?
Semantic HTML: Using proper tags like <label>, <button>, and headings helps screen readers understand the page structure.

Alt text: All images include meaningful alt descriptions or fallbacks to help visually impaired users.

Responsive layout: Tailwind’s utility classes help ensure the app works well on mobile and assistive devices.

Color contrast: The dark mode theme is styled with high-contrast colors to support users with low vision.

ARIA roles/labels (to be added): Dynamic content like pagination or filter results could be wrapped in aria-live regions to inform screen readers of updates.

Keyboard navigation: All form controls are accessible via keyboard, and buttons have clear focus states.




