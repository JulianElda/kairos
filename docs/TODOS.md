# TODOS

- add favicon

# Known limitations

- There is no dedicated UI for geolocation permission denial or error states.
- The app does not persist cached weather responses.
- When Vercel geolocation headers are absent and the browser/device either doesn't support geolocation or the user denies permission, the app receives no coordinates and may show no weather data.
