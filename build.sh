#!/bin/bash
pm2 stop psn-hack-bot && pm2 delete psn-hack-bot;
rm -rf dist;
yarn && yarn build;
pm2 start ecosystem.config.js --env production