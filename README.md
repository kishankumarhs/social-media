# Social Media API

A powerful, scalable backend API for a social media platform built using **NestJS** and **GraphQL**. This API supports user authentication, posts, comments, likes, follow/unfollow functionality, and real-time notifications.

---

## Features

- **Authentication**:
  - Register/Login with JWT or OAuth.
  - Role-based access control.

- **User Management**:
  - Manage user profiles.
  - Follow/unfollow other users.

- **Posts and Comments**:
  - Create, read, update, and delete posts.
  - Add comments to posts.

- **Likes and Notifications**:
  - Like/unlike posts.
  - Real-time notifications for actions like likes and new followers.

- **GraphQL API**:
  - Efficient queries and mutations for all resources.
  - Subscriptions for real-time updates.

- **Scalability and Performance**:
  - Database integration with MongoDB or PostgreSQL.
  - Caching with Redis for frequent queries.
  - Real-time events with WebSockets.

---

## Tech Stack

### Core Technologies

- **NestJS**: Backend framework for building scalable applications.
- **GraphQL**: API query language.
- **MongoDB/PostgreSQL**: Database for storing user and post data.
- **Redis**: Caching for performance optimization.
- **WebSockets**: Real-time notifications.

### DevOps & Deployment

- **Docker**: Containerized deployment.
- **AWS S3**: Media storage for posts.
- **GitHub Actions**: CI/CD pipeline.

---

## Folder Structure

```
src/
├── common/              # Shared modules, utilities, and constants
├── config/              # Configuration files
├── modules/             # Feature modules
│   ├── auth/            # Authentication module
│   ├── user/            # User management module
│   ├── post/            # Posts module
│   ├── comment/         # Comments module
│   ├── notification/    # Notifications module
│   ├── follow/          # Follow/Unfollow module
├── database/            # Database configuration and migrations
├── graphql/             # GraphQL-related files
├── main.ts              # Entry point for the app
└── app.module.ts        # Root module
```

---

## Installation

### Prerequisites

- Node.js (v16 or later)
- MongoDB/PostgreSQL
- Redis
- Docker (optional, for containerization)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/social-media-api.git
   cd social-media-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:

     ```env
     DATABASE_URL=<your-database-url>
     REDIS_URL=<your-redis-url>
     JWT_SECRET=<your-secret-key>
     AWS_S3_BUCKET=<your-s3-bucket>
     ```

4. Run the application:

   ```bash
   npm run start:dev
   ```

5. Access the GraphQL Playground:
   - Navigate to: `http://localhost:3000/graphql`

---

## Usage

### Running Tests

- Unit tests:

  ```bash
  npm run test
  ```

- End-to-end tests:

  ```bash
  npm run test:e2e
  ```

### API Documentation

- GraphQL Playground: `http://localhost:3000/graphql`

### Key Endpoints (GraphQL Queries/Mutations)

1. **Users**:
   - `registerUser`
   - `login`
   - `getUserProfile`
2. **Posts**:
   - `createPost`
   - `getPosts`
   - `updatePost`
3. **Notifications**:
   - `getNotifications`
   - `markNotificationAsRead`

---

## Contributing

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit changes:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For queries or suggestions:

- Email: [hskishanraj@gmail.com](mailto:hskishanraj@gmail.com)
- GitHub: [kishankumarhs](https://github.com/kishankumarhs)
