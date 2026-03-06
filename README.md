# Vaultora - Password Manager

A secure, full-stack password manager application built with the MERN (MongoDB, Express, React, Node.js) stack. Vaultora allows users to securely store, manage, and search their passwords with user authentication and encryption.

## 🚀 Features

- **User Authentication**: Secure user registration and login with JWT tokens
- **Password Management**: Add, view, search, and manage passwords
- **Secure Storage**: Passwords encrypted with bcryptjs
- **User Dashboard**: Intuitive interface to manage all passwords
- **Search Functionality**: Quickly find stored passwords
- **Responsive Design**: Built with Tailwind CSS for a modern UI
- **API-Based**: RESTful API architecture for scalability

## 🛠️ Tech Stack

### Frontend
- **React 19**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **React Hot Toast**: Notifications

### Backend
- **Node.js**: JavaScript runtime
- **Express 5**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing

## 📦 Project Structure

```
Vaultora/
├── backend/
│   ├── configs/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── userController.js  # User auth logic
│   │   └── passwordController.js # Password CRUD logic
│   ├── middleware/
│   │   └── auth.js            # Authentication middleware
│   ├── model/
│   │   ├── user.js            # User schema
│   │   └── password.js        # Password schema
│   ├── routes/
│   │   ├── user.js            # User endpoints
│   │   └── pass.js            # Password endpoints
│   ├── server.js              # Express server entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx      # Navigation component
    │   │   ├── Manager.jsx     # Password manager display
    │   │   ├── SearchPass.jsx  # Search functionality
    │   │   └── AddPass.jsx     # Add password form
    │   ├── Context/
    │   │   └── AppContext.jsx  # Global state management
    │   ├── assets/
    │   │   └── assets.js       # Static assets
    │   ├── Pages/
    │   │   └── Login.jsx       # Login/authentication page
    │   ├── App.jsx             # Main app component
    │   ├── main.jsx            # React entry point
    │   ├── App.css
    │   └── index.css
    ├── public/                 # Static files
    ├── package.json
    ├── vite.config.js
    └── eslint.config.js
```

## 🔧 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the development server:
```bash
npm run server
```

The backend server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port)

## 📖 API Endpoints

### User Routes (`/api/user`)
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user
- `GET /api/user/profile` - Get user profile (requires auth)

### Password Routes (`/api/password`)
- `GET /api/password` - Get all passwords for user (requires auth)
- `POST /api/password` - Add a new password (requires auth)
- `PUT /api/password/:id` - Update a password (requires auth)
- `DELETE /api/password/:id` - Delete a password (requires auth)
- `GET /api/password/search` - Search passwords (requires auth)

## 🧪 Available Scripts

### Backend
```bash
npm run server    # Start development server with nodemon
npm test          # Run tests
```

### Frontend
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🔐 Security Features

- **Password Hashing**: All user passwords are hashed using bcryptjs before storage
- **JWT Authentication**: API endpoints are protected with JWT tokens
- **CORS Protection**: Cross-origin requests are properly configured
- **Environment Variables**: Sensitive data stored in `.env` files

## 📝 Environment Variables

### Backend (.env)
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/vaultora
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### Frontend (.env.local) [if needed]
```env
VITE_API_URL=http://localhost:3000
```

## 🚀 Deployment

### Backend Deployment
1. Build the project
2. Set environment variables on your hosting platform
3. Deploy to services like Heroku, Railway, or Render

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to services like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the package.json files for details.

## 👤 Author

Adi

## 💡 Future Enhancements

- [ ] Two-factor authentication (2FA)
- [ ] Password strength indicator
- [ ] Export passwords functionality
- [ ] Import from other password managers
- [ ] Mobile app version
- [ ] Dark mode theme
- [ ] Password generation tool
- [ ] Audit logs for password access

## 🐛 Troubleshooting

### Backend won't connect to MongoDB
- Verify MongoDB is running
- Check your MONGODB_URI in .env
- Ensure MongoDB credentials are correct

### CORS errors
- Verify frontend URL is allowed in backend CORS configuration
- Check that both services are running

### API requests failing
- Ensure backend server is running on the correct port
- Check that API_URL in frontend matches backend URL
- Verify JWT token is being sent in request headers

## 📞 Support

For support, please create an issue in the repository or contact the development team.

---

**Note**: This is a password manager application. Please ensure you follow security best practices and never expose sensitive information like JWT secrets or database credentials in version control.
