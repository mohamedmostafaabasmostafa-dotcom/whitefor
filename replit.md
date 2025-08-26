# نادي الأساطير - Arabic Football Club Website

## Overview

This is a modern, full-stack web application for an Arabic football club called "نادي الأساطير" (Legends Club). The project is built as a single-page application featuring a comprehensive club website with sections for news, matches, players, achievements, and contact information. The application is designed with Arabic language support (RTL layout) and uses modern web technologies to provide an engaging user experience for football fans.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for club branding colors and Arabic font support
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives for accessibility
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Layout**: RTL (Right-to-Left) layout support with Arabic typography using Tajawal font
- **Icons**: Font Awesome for comprehensive icon coverage

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript throughout the entire stack for consistency
- **Development Server**: Custom Vite integration for seamless full-stack development
- **Data Layer**: In-memory storage implementation with interface abstraction for future database integration
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (configured but not actively used)

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL (configured via Neon serverless) with UUID primary keys
- **Schema**: User management system with username/password authentication structure
- **Migrations**: Drizzle Kit for database schema management and migrations

### Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not fully implemented
- **Planned**: Username/password based authentication with session management
- **Validation**: Zod schemas for runtime type validation integrated with Drizzle ORM

### Design System and Theming
- **Color Scheme**: Custom club colors (red, black, gold, white) defined as CSS variables
- **Typography**: Arabic-first design with Tajawal font family
- **Component Variants**: Class Variance Authority (CVA) for consistent component styling
- **Dark Mode**: Prepared infrastructure for theme switching
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Development and Build Process
- **Development**: Hot module replacement with Vite and Express middleware integration
- **TypeScript**: Strict type checking across client, server, and shared code
- **Code Organization**: Monorepo structure with shared types and utilities
- **Asset Management**: Vite-based asset bundling with path aliasing
- **Build Output**: Separate client and server builds with ESM module format

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for Neon cloud database
- **drizzle-orm**: Type-safe ORM with PostgreSQL adapter
- **express**: Node.js web application framework
- **react**: UI library with hooks and modern patterns
- **vite**: Fast build tool and development server

### UI and Styling
- **@radix-ui/***: Comprehensive collection of accessible UI primitives (accordion, dialog, dropdown, navigation, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Conditional className utility
- **tailwind-merge**: Utility for merging Tailwind classes

### Data Management
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation resolvers for React Hook Form
- **zod**: Schema validation library
- **date-fns**: Date manipulation utilities

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **wouter**: Lightweight routing library

### External Services
- **Google Fonts**: Tajawal Arabic font family via CDN
- **Font Awesome**: Icon library via CDN
- **YouTube**: Embedded video content for hero section background
- **External Image Sources**: Pixabay, Unsplash for placeholder content

The application follows modern web development practices with a focus on type safety, accessibility, and internationalization for Arabic content. The architecture is designed to be scalable and maintainable while providing an excellent user experience for Arabic-speaking football fans.