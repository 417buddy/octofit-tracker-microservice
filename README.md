# Octofit Tracker Microservice

Minimal tracker microservice (Express + MongoDB).

## Quick start

1. Copy `.env.example` to `.env` and update `MONGO_URL` if needed.
2. Install deps:

   ```bash
   npm install
   ```

3. Run in dev:

   ```bash
   npm run dev
   ```

## Run tests:

```bash
npm test
```

## API endpoints

- POST /api/track  { userId, deviceId, steps, calories, metadata }
- GET /api/track/:id

## Docker

```bash
docker-compose up --build
```