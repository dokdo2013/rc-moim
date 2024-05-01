# RaCcoon Moim

모각작 모임, 멤버 관리를 위한 웹 어플리케이션입니다.

## Overview

### Basic Tech Stack

- Monorepo: Pnpm Workspaces (with Turborepo)
- Frontend: Next.js, TypeScript, Tailwind CSS, Shadcn UI
- Backend: NestJS, TypeScript, TypeORM
- Database: PostgreSQL (neon.tech), Redis (upstash)
- Deployment: Kubernetes, Docker Hub, GitHub Actions

## Get Started

### Prerequisites

- Node.js (v20+)
- Pnpm
- Environment variables (only for backend)

### Installation

1. Clone the repository

```bash
git clone https://github.com/dokdo2013/rc-moim
```

2. Install dependencies

```bash
npm install -g pnpm # If package manager not installed

pnpm install
```

3. Run the development server

```bash
# Start Everything
pnpm dev

# Frontend (port 3000)
pnpm dev --filter=@rc-moim/frontend

# Server (port 3001)
pnpm dev --filter=@rc-moim/server
```

## How to Contribute

TBW

## License

[MIT License](https://github.com/dokdo2013/rc-moim/blob/main/LICENSE)
