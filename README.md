# Landing Page

Show my professional sites in minimal, accessible and performant way.
Setup on brandable jackhowa.com

## Goals

- [x] Use the green salmon color scheme
- [x] Use minimal ui full page with 100 percent no-scroll

## Status

[![Lighthouse score as of Dec., 2020](https://badgen.net/badge/lighthouse/100/green/)](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fjackhowa.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed87f432-66fe-471f-b950-e9d83e870585/deploy-status)](https://app.netlify.com/sites/jackhowa-landing/deploys)

## Commands

### `npm run build`

Outputs to `\_site` per 11ty default output. Also uses an `.eleventy.js` passthrough for other files needed for output.

### `npm run build:github`

Outputs to docs folder per silly github pages config that allows [docs](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) folder output. This is sadly also tracked in git. Visible at https://jackhowa.github.io/

### `npm run start`

Watches and serves input. Note: Do not edit `_site` files directly.

## Tech

- [11ty](https://www.11ty.dev/) static-site generator
