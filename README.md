In the project directory, run:

`yarn install`, then `yarn start` or `yarn dev`

Open [http://localhost:3000](http://localhost:3000) in a browser to view the app. It should look like [https://app.halliday.xyz/onramp-launcher](https://app.halliday.xyz/onramp-launcher).

## Walkthrough
The relevant part of the code is in `src/App.tsx`.
Simply call `openHallidayOnramp` with a Halliday API Key and a Verifier Client ID (provided to you by the Halliday team), and the onramp flow will pop up in a new window.
