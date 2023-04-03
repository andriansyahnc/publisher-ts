# Publisher TS

## Overview
This repository is to help me publish message to a certain message broker.

## Tech stack
1. NodeJs
2. Volta (for managing node version)
3. Typescript
4. Jest + Supertest (for testing purpose)

## Available Message Broker
1. Pubsub
2. Kafka (soon)

## How to install
1. run `cp .env.example .env`
2. change configuration accordingly
3. for Pub/Sub download your sa.json and copy it into the root, change the `GOOGLE_APPLICATION_CREDENTIALS=sa.json`
4. run `npm install`

## How to run the project
1. run `npm run start`