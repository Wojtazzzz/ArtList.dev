# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ArtList.dev is a Minecraft server listing platform. The frontend is built with Next.js 14 (App Router), TypeScript, React, Tailwind CSS, and Shadcn UI components. It communicates with a Symfony PHP backend API.

## Development Commands

**Package Manager**: This project uses `pnpm` exclusively (enforced via preinstall hook).

```bash
# Install dependencies
pnpm install

# Development server (port 3000)
pnpm dev

# Development server for E2E tests (port 3030)
pnpm start-e2e

# Build for production
pnpm build

# Start production server
pnpm start

# Lint and auto-fix
pnpm lint
```

## Environment Variables

Required environment variables (see `.env.example`):

- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_APP_URL` - Frontend application URL
- `NEXT_PUBLIC_SERVERS_LIMIT_PER_PAGE` - Number of servers per page
- `NEXT_PUBLIC_ADSENSE_CLIENT_KEY` - Google AdSense client key

Environment variables are validated at runtime via `src/utils/env.ts`, which will throw descriptive errors if required variables are missing.

## Architecture

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
  - `(servers-list)/` - Route group for server list pages (home and paginated)
  - `server/[name]/` - Dynamic route for individual server details
  - `regulamin/` - Terms of service page
- `src/actions/` - Next.js Server Actions (e.g., `addServer.ts`)
- `src/components/` - React components
  - `modules/` - Feature-specific components (servers list, server details)
  - `navigations/` - Navigation components
  - `ui/` - Custom UI components
  - `ui-library/` - Shadcn UI library components
- `src/hooks/` - Custom React hooks
- `src/utils/` - Utility functions and schemas
  - `clients.ts` - API fetch utilities (`fetchData`, `mutateData`)
  - `env.ts` - Environment variable validation
  - `schema.ts` - Zod schemas for data validation
  - `functions.ts` - General utility functions

### Key Architectural Patterns

**API Communication**:
- All API calls go through `src/utils/clients.ts` utilities
- `fetchData()` for GET requests with Next.js revalidation support
- `mutateData()` for POST/PUT/DELETE requests
- Backend API URL is configured via `NEXT_PUBLIC_API_URL`

**Data Validation**:
- Zod schemas defined in `src/utils/schema.ts`
- Main schema: `Server` type for server list data

**Server Actions**:
- Next.js Server Actions in `src/actions/`
- Example: `addServer.ts` handles server submission with validation and cache revalidation

**Routing**:
- Next.js App Router with file-based routing
- Static generation for server list pages (`generateStaticParams`)
- Dynamic routes for individual servers (`/server/[name]`)
- Route groups used for shared layouts (servers-list)

**State Management**:
- React Query (TanStack Query) for server state management
- next-themes for theme management (light/dark mode)
- Custom hooks for reusable logic (see `src/hooks/`)

**Styling**:
- Tailwind CSS with custom configuration
- Shadcn UI components (in `ui-library/`)
- Custom components wrap Shadcn for project-specific styling
- Theme support via next-themes with CSS variables

**TypeScript**:
- Strict mode enabled
- Path alias: `@/*` maps to `src/*`
- Consistent type imports enforced via ESLint (`@typescript-eslint/consistent-type-imports`)

### Component Organization

**Responsive Design**:
- Desktop: Table view for server lists (`ServersTable`)
- Mobile: Card view for server lists (`ServersList`)
- Conditional rendering based on breakpoints

**Pagination**:
- `StaticPagination` for pre-generated static pages
- `DynamicPagination` for client-side pagination (search results)

## Code Style

**ESLint Configuration**:
- Next.js recommended rules
- TypeScript ESLint with consistent type imports rule
- React and React Hooks plugins
- JSX accessibility checks (jsx-a11y)
- Prettier integration for formatting

**Import Convention**:
- Use `type` keyword for type-only imports: `import type { Server } from '@/utils/schema'`
- ESLint will error on incorrect type imports

## Important Implementation Details

- The application fetches Minecraft server data from the backend API
- Server icons are served from the backend (configured in `next.config.mjs`)
- Search functionality uses query parameters and client-side filtering
- Server statistics show player count history (12-hour charts using Recharts)
- Cache revalidation is handled per-route (see revalidate values in fetch calls)
