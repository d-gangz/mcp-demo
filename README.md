# MCP Playground

A specialized Next.js template for testing and experimenting with Model Context Protocol (MCP) integrations. Perfect for building AI-powered applications that leverage MCP's standardized approach to connecting LLMs with various data sources and tools.

## What is MCP?

Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications:

- Connect AI models to different data sources and tools through a standardized interface
- Easily switch between LLM providers and vendors
- Implement best practices for securing your data within your infrastructure
- Access a growing list of pre-built integrations

## Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

### Backend
- **Database:** [PostgreSQL](https://www.postgresql.org/) via [Supabase](https://supabase.com/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **API:** Next.js Server Actions

### MCP Integration
- **Host Application:** This Next.js app serves as an MCP host
- **Client Implementation:** Connect to multiple MCP servers
- **Server Testing:** Test and debug custom MCP server implementations
- **LLM Integration:** Connect LLMs to data sources through MCP

## Key Features

- Modern, responsive UI components with shadcn/ui
- Type-safe database operations with Drizzle ORM
- Secure authentication with Clerk
- Server-side rendering and API routes with Next.js
- Payment processing with Stripe
- User behavior analytics with PostHog
- MCP client-server communication testing
- Integration with local and remote data sources via MCP

## Project Structure

- `actions` - Server actions for data mutations
- `app` - Next.js app router pages and layouts
- `components` - Reusable UI components
- `db` - Database schemas and configuration
- `lib` - Utility functions and hooks
- `mcp` - MCP client and server implementations
  - `clients` - MCP client implementations
  - `servers` - Test MCP servers
  - `resources` - MCP resources definitions
  - `tools` - MCP tool implementations
- `public` - Static assets
- `types` - TypeScript type definitions

## Getting Started

1. Create your environment file:
```bash
cp .env.example .env.local
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## MCP Development Workflow

This playground allows you to:

1. **Implement MCP Clients**: Test connecting to various MCP servers
2. **Build MCP Servers**: Create servers that expose specific capabilities
3. **Test MCP Resources**: Define and use resources that provide context to LLMs
4. **Implement MCP Tools**: Build tools that enable LLMs to perform actions
5. **Debug MCP Integrations**: Use the built-in debugging tools to inspect MCP communication

## Standard Development Workflow

- Use server components for data fetching
- Use client components for interactive UI elements
- Implement server actions for data mutations
- Follow the type-safe approach with TypeScript

## Learn More

- [MCP Documentation](https://modelcontextprotocol.io/introduction)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## Deploy on Vercel

Deploy your project with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/mcp-playground)
