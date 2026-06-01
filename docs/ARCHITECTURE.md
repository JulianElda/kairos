# Architecture

kairos is a weather app that delivers weather information based on the request location and optionally the device location.

# Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Frontend | SvelteKit                           |
| Hosting  | Vercel (`@sveltejs/adapter-vercel`) |
| Styling  | Tailwind CSS                        |
| Testing  | Vitest, `vitest-browser-svelte`     |
| Domain   | Custom subdomain via Cloudflare     |

# How it fits together

## Initial render

1. `src/routes/+page.server.ts` runs on the server during SSR.
2. It reads Vercel geolocation headers from the request:
   - `X-Vercel-IP-City`
   - `X-Vercel-IP-Latitude`
   - `X-Vercel-IP-Longitude`
3. If headers are missing, it uses empty values for city, latitude, and longitude (no SSR fallback coordinates).
4. It calls `getWeatherData()` in `src/lib/apis.ts` to request Open-Meteo data.
5. The page receives initial props: `city` and `weatherData`.

## Client-side location refresh

1. `src/lib/components/main.svelte` uses `onMount()` in the browser.
2. It checks `navigator.geolocation` and calls `getCurrentPosition()`.
3. If permission is granted, it concurrently:
   - fetches weather data for the device coordinates from Open-Meteo
   - reverse geocodes the coordinates through Nominatim
4. The UI updates with the fresh `data` and `location` values.

## Component structure

- `src/routes/+page.svelte` provides the initial page shell and metadata.
- `src/lib/components/main.svelte` orchestrates browser location discovery and loading state.
- Weather display components are split into:
  - `CurrentWeather`
  - `DetailedWeather`
  - `HourlyWeather`
  - `DailyWeather`
- Shared helpers and icons live under `src/lib/components/`.

## API contract

### Open-Meteo

- Endpoint: `https://api.open-meteo.com/v1/forecast`
- Query parameters used:
  - `current=temperature_2m,weather_code`
  - `daily=sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min,uv_index_max`
  - `hourly=temperature_2m,weather_code,uv_index,apparent_temperature,relative_humidity_2m,wind_direction_10m,wind_speed_10m`
  - `forecast_days=5`
  - `timezone=auto`
- Response typing is defined in `src/lib/types/weather.types.ts`.

### Nominatim

- Endpoint: `https://nominatim.openstreetmap.org/reverse`
- Used to translate latitude/longitude into a readable location name.
- `src/lib/apis.ts` sends `format=json` and `zoom=12`.

# Third party api

## open-meteo

[open-meteo](https://open-meteo.com/en/docs) provides weather forecasts for current, hourly, and daily metrics. A sample response is in `src/lib/types/weather.mocks.json`.

## Nominatim

[Nominatim](https://nominatim.openstreetmap.org) provides reverse geocoding for device coordinates.

# SvelteKit and deployment

- The app is implemented as a single SvelteKit route.
- Initial payload is server-rendered and hydrated in the browser.
- Client-side geolocation refresh keeps the experience up to date.
- The project is configured for Vercel deployment via `@sveltejs/adapter-vercel`.

# Project setup

Project setup is declared in `package.json` with scripts for:

- `build` (`vite build`)
- `dev` (`vite dev`)
- `check` (`svelte-kit sync && svelte-check --tsconfig ./tsconfig.json`)
- `format` (`oxfmt`)
- `lint` (`oxlint && eslint .`)
- `test` (`vitest`)
- `preview` (`vite preview`)

The repo uses:

- TypeScript and SvelteKit
- `oxfmt` for formatting
- `oxlint` and ESLint for linting
- `vitest` for unit/component tests
- `vitest-browser-svelte` for browser-aware Svelte test runs
- `@playwright/test` and `@vitest/browser-playwright` as available test tooling dependencies
- Husky for Git hook installation via the `prepare` script
- `nano-staged` in `.github/hooks/lint.json` to run precommit lint checks on unstaged files
