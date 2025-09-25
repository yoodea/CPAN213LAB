# Project Structure

## Folder Organization
- `src/components/` — Reusable UI components
- `src/screens/` — Screen components
- `src/services/` — API and configuration services
- `src/utils/` — Utility functions
- `src/constants/` — App constants
- `src/navigation/` — Navigation stacks/tabs (future)
- `src/hooks/` — Custom React hooks (future)
- `src/context/` — Context providers (future)
- `src/styles/` — Global styles/themes (future)
- `src/assets/` — Images, fonts

## Development Scripts
- `npm run ios` — Build iOS app with default `.env`
- `ENVFILE=.env.development npm run ios` — Run with development env
- `ENVFILE=.env.production npm run ios` — Run with production env
- `npm run lint` — Check code quality
- `npm run format` — Prettier format code

## Environment Configuration
- Development: `.env.development`
- Production: `.env.production`
- Default fallback: `.env`