#! /bin/bash
npm install
npm run deploy:test
npm run client:build
npm run server:build