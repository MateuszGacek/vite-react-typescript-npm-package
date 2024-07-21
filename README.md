# React + TypeScript + Vite + Tailwind CSS

## Setup

- npm install - to install all necessery dependencies
- change "your-package-name" in vite.config.ts, package.json and npm.package.json to your name
- change url in npm.package.json for your gitrepository
- customize: "version", "description", "keywords", "author", "license" in npm.package.json

## Build

- The "build" script clears and build the library again in dist folder, creating package.json for library from npm.package.json

## NPM publish

- In dist directory:

* First you must have account on (https://www.npmjs.com/)
* npm adduser - this command login you to your npm account and allow upload package
* npm publish - this command upload and publish to NPM only content of the dist folder

## Import

- import { Header } from "your-package-name"; - imported any component what you created
- import "your-package-name/lib/styles.css"; - imported styles for yours components
