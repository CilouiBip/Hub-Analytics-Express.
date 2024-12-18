# Hub Analytics Express

A minimalist micro-SaaS dashboard that centralizes key metrics from multiple platforms, starting with YouTube analytics.

## Project Overview

Hub Analytics Express is an MVP that provides a single dashboard to view essential KPIs from YouTube (currently using mock data). It features a dark-themed, minimalist design focused on displaying key metrics such as views, subscribers gained, and CTR.

## Features

- User Authentication (JWT-based)
- Mock YouTube Analytics Dashboard
- Dark Theme UI
- Minimalist Design
- Key Performance Indicators:
  - Total views (last 28 days)
  - New subscribers gained
  - Average CTR

## Tech Stack

- Frontend: React.js with TypeScript
- Backend: Node.js/Express
- Authentication: JWT
- API: RESTful architecture

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CilouiBip/Hub-Analytics-Express.git
cd Hub-Analytics-Express
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

## Project Structure

```
hub-analytics-express/
├── backend/           # Express backend
│   ├── src/
│   │   └── index.js  # Main server file
│   └── package.json
├── frontend/         # React frontend
│   ├── src/
│   └── package.json
└── README.md
```

## Contributing

This is an MVP project. Feel free to submit issues and enhancement requests.

## License

[MIT License](LICENSE)
