# Vue Auth JWT

## Features

- ✅ JWT-based authentication
- ✅ Session persistence (survives page refresh)
- ✅ Auto-logout after 5 minutes of inactivity
- ✅ Protected routes with authentication guards
- ✅ Role-based access control (admin/user roles)
- ✅ Clean and modern UI with Tailwind CSS
- ✅ Vue 3 Composition API with script setup
- ✅ State management with Pinia

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vue Router** - Official routing library
- **Pinia** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling
- **@vueuse/core** - Collection of Vue composition utilities
- **jwt-decode** - Industry-standard library for decoding JWT tokens

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd vue-auth-jwt
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Demo Credentials

### 🔐 Test Accounts (Recommended for Demo)

**Admin Account:**

- **Email:** `admin@test.com`
- **Password:** `admin123`
- **Access:** Full access including Admin Panel

**Regular User Account:**

- **Email:** `user@test.com`
- **Password:** `user123`
- **Access:** Home, Dashboard only

### 🎯 Quick Login (Any Email)

You can also use any email/password combination:

- Email containing "admin" → Admin role
- Any other email → User role
- Password can be anything

**Examples:**

- `admin@company.com` + any password → Admin
- `john@example.com` + any password → User

## Application Structure

```
src/
├── components/        # Reusable Vue components
│   └── AppHeader.vue  # Navigation header
├── layouts/           # Layout components
│   └── AppLayout.vue  # Main layout with auto-logout logic
├── router/            # Vue Router configuration
│   └── index.js       # Routes and navigation guards
├── services/          # Business logic and API services
│   └── authService.js # Authentication service
├── store/             # Pinia state management
│   └── auth.js        # Authentication store
└── views/             # Page components
    ├── HomeView.vue       # Public home page
    ├── LoginView.vue      # Login page
    ├── DashboardView.vue  # Protected user dashboard
    └── AdminView.vue      # Admin-only page
```

## Routes

| Route        | Access           | Description                                          |
| ------------ | ---------------- | ---------------------------------------------------- |
| `/`          | Public           | Home page - accessible to everyone                   |
| `/login`     | Public           | Login page                                           |
| `/dashboard` | Protected        | User dashboard - requires authentication             |
| `/admin`     | Protected + Role | Admin panel - requires authentication and admin role |

## Key Features Implementation

### JWT Authentication

- **Proper JWT Structure**: Generates tokens with header, payload, and signature in standard JWT format
- **JWT Claims**: Includes standard claims like `sub`, `iat`, `exp`, `email`, and `role`
- **Token Encoding**: Uses base64url encoding as per JWT specification
- **Token Decoding**: Uses industry-standard `jwt-decode` library for secure and reliable decoding
- **Token Validation**: Automatic validation of token expiration on retrieval
- **Token Storage**: Tokens are stored in localStorage for persistence
- **Token Expiration**: Tokens expire after 24 hours

### Auto-Logout

- Implemented using `@vueuse/core`'s `useIdle` composable
- Automatically logs out users after **5 minutes of inactivity**
- Activity detection includes mouse movements and keyboard events
- **Visual Warning**: Shows countdown banner 30 seconds before logout
- Alert notification when session expires

### Role-Based Access Control

- Users are assigned roles based on their email (admin/user)
- Route guards check for required roles before allowing access
- Admin routes redirect to dashboard if user lacks admin role
- Admin panel visible only to users with admin role
