# 05-notehub

React + TypeScript NoteHub homework. Axios services, TanStack Query queries/mutations, React Paginate, Formik + Yup, use-debounce and CSS Modules.
Teacher styles: https://github.com/goitacademy/react-notehub-styles/tree/hw-05 (license included).

## Obtain your NoteHub token

The TMDB token from previous assignments does NOT work here.

1. Open https://notehub-public.goit.study/api/docs
2. Expand POST /auth, click Try it out, enter your own email in the JSON request, then Execute.
3. Copy the returned token.
4. Copy `.env.example` to `.env` beside package.json and fill `VITE_NOTEHUB_TOKEN=your_token` (no Bearer prefix).
   The API supplies a personal collection with sample notes. Never commit `.env`.

## Run

Node.js 22.12+ or compatible newer version.
`npm ci`
`npm run dev`

## Verify

`npm run build` — TypeScript and production build.
`npm run format:check` — Prettier.

- Initial load displays notes, up to 12 per page; pagination appears for multiple pages.
- Search waits 300 ms and resets the page to 1. Clearing the input restores all notes.
- Previous results remain visible during pagination.
- Create note opens a portal modal. Test Cancel, Escape, backdrop, and clicking inside.
- Title: required, 3–50 characters; content: up to 500; tag: required, Todo/Work/Personal/Meeting/Shopping.
- Successful creation refreshes the query cache, closes the form and returns to the full list, page 1.
- Delete removes a note on the server and invalidates the list cache. Deleting the last item on a non-first page moves to the previous page.
- Simulate a failed request: errors are displayed; failed creation retains input for retry.

## Publish

Create a NEW GitHub repository `05-notehub`, clone it, then copy the contents of this folder into it. Keep its .git. Do not copy node_modules, dist, or .env.
Push and import `05-notehub` into Vercel: framework Vite, build `npm run build`, output `dist`.
Add Environment Variable Key `VITE_NOTEHUB_TOKEN`, Value your NoteHub token only. Deploy. If added later, Redeploy.
Check all actions on the live site. Submit GitHub URL and permanent production URL from Domains, ending in .vercel.app. Wait 5 minutes after the last push.

The token is not bundled. Real API checks require your own token. VITE variables are embedded in the browser bundle.

## Verification performed

TypeScript, Vite production build and Prettier passed. A DOM simulation with mocked Axios responses verified initial listing, pagination, deletion of the last note on a page, required/minimum title validation, successful creation and cache refresh, modal Escape/scroll cleanup, debounced search and page reset, and request error/recovery without React console errors. Real NoteHub requests and visual browser checks require separate verification.
