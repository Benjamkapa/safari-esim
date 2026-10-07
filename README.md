# Safari eSim — expanded React frontend

This version expands the original prototype into a routed, multi-page, backend-ready application shell.

## Run

```bash
npm install
npm run dev
```

## Public routes
- `/` Home
- `/destinations` Full destination catalogue
- `/destinations/:code` Destination + packages
- `/plans` Plan catalogue alias
- `/checkout/:id` Checkout
- `/how-it-works`
- `/installation-guide`
- `/faq`
- `/support`
- `/contact`
- `/network-coverage`
- `/about`
- `/terms`
- `/privacy`
- `/refund-policy`

## Auth routes
- `/auth/login`
- `/auth/register`
- `/auth/forgot-password`

The auth service first attempts the configured backend API at `VITE_API_URL`, then falls back to a local demo session so the UI remains actionable before the backend is connected.

## Customer portal routes
- `/portal`
- `/portal/esims`
- `/portal/orders`
- `/portal/wallet`
- `/portal/profile`
- `/portal/support`
- `/portal/settings`

## Backend integration points
`src/services/api.ts` contains the Axios client and auth calls. Add `VITE_API_URL` to connect the frontend to your Fastify/Node API.

Expected auth endpoints:
- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/forgot-password`
- `GET /auth/me`
- `POST /auth/logout`

The payment, eSIM provisioning, profile updates, wallet top-up and support actions are deliberately structured as UI actions ready to be wired to backend endpoints.

## Brand / UI
The supplied theme is used throughout:
- Primary `#087FF5`
- Primary dark `#075BE8`
- Cyan `#08C5EB`
- Navy `#052A60`
- Orange `#FFA500`
- Gold `#FFC21C`
- Background `#F6FAFF`
- Surface `#FFFFFF`
- Surface blue `#EEF7FF`
- Text `#071D3D`
- Secondary text `#64748B`
- Border `#E4EDF7`
- Success `#16A66A`

The logo is now a transparent SVG (`public/safari-esim-logo.svg`) rather than a square image placed inside a wall/container.

Country flags are rendered as actual flag image assets and destination packages use a faded landmark image in the background.
