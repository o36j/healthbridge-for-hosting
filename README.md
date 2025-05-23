# HealthBridge - Hospital Appointment Management System

HealthBridge is a modern hospital appointment management system built with the MERN stack (MongoDB, Express.js, React, Node.js). The system provides a comprehensive platform for patients, doctors, nurses, and administrators to manage appointments, patient records, and healthcare services.

## Features

### Authentication & Role-Based Access
- Register/Login with Email & Password (JWT + HTTP-only cookie)
- Role-based access control (Patient, Doctor, Nurse, Admin)
- Protected routes based on user roles
- Secure session management with refresh tokens

### User Profiles
- Upload profile photos
- Detailed user information based on role
- Admin can manage all user data
- Profile customization options

### Appointments
- Patients can search doctors by department and availability
- Book, reschedule, and cancel appointments
- Doctors and nurses can view, accept, reject, and manage appointments
- Admins can oversee all appointments and assign staff
- Calendar integration for scheduling
- Automated conflict detection

### Patient History (EHR)
- Electronic Health Records for patients
- Medical staff can add/edit patient records
- Includes diagnoses, vitals, notes, prescriptions, and attachments
- Patients can view their own medical history
- PDF generation for medical reports and prescriptions
- Secure file handling and document management
- Export medical records in various formats

### Dashboard
- Role-specific dashboards
- Profile management
- Appointment tracking
- Patient history access based on role
- System settings and configurations
- Analytics and reporting features
- Real-time statistics and metrics

### Messaging & Notifications
- Internal messaging system between users
- Automated notifications for appointment updates
- Email notifications for important events
- Real-time chat functionality
- Message history and archiving

### Document Management
- Generate and download medical reports as PDF
- Secure file storage and retrieval
- Support for multiple file formats
- Document version control
- Automated report generation

### Chatbot & Support
- AI-powered chatbot for basic inquiries and assistance
- 24/7 automated support
- FAQ integration
- Smart appointment recommendations

### Security Features
- End-to-end encryption for sensitive data
- HIPAA compliance measures
- Regular security audits
- Two-factor authentication support
- Session management and monitoring

## Tech Stack

### Frontend
- React 18 + Vite 6
- TypeScript 5.7+
- Bootstrap 5.3 with React-Bootstrap
- React Router v6
- Axios for API requests
- Framer Motion for animations
- React Big Calendar for appointment scheduling
- Chart.js and Recharts for data visualization
- Date-fns for date manipulation
- JWT token handling with HTTP-only cookies

### Backend
- Node.js 18+ with Express 5
- TypeScript 5.8+
- MongoDB 8+ with Mongoose ODM
- JWT Authentication with refresh tokens
- Role-based authorization middleware
- File upload support with Multer
- Email services with Nodemailer
- Rate limiting and security features with Helmet
- Cloudinary for image storage
- Zod for data validation

## Project Structure

```
healthbridge/
├── client/             # Frontend React application
├── server/             # Backend Node.js/Express application
└── README.md
```

## Environment Variables

### Frontend (client/.env.production)
```
VITE_API_URL=https://healthbridge-for-hosting.onrender.com/api
```

### Backend (server/.env)
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=production
```

## Deployment

### Backend (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following:
   - Build Command: `cd server && npm install && npm run build`
   - Start Command: `cd server && npm start`
   - Environment Variables: Add all variables from server/.env

### Frontend (Vercel)
1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set the following:
   - Framework Preset: Vite
   - Build Command: `cd client && npm install && npm run build`
   - Output Directory: `client/dist`
   - Environment Variables:
     - VITE_API_URL: https://healthbridge-for-hosting.onrender.com/api

## Development

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

## Features

- User Authentication (Patients, Doctors, Nurses, Admin)
- Appointment Management
- Medical Records
- Prescription Management
- Telehealth Integration
- Real-time Messaging
- File Uploads
- Activity Logging
- Role-based Access Control

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- React Bootstrap
- React Router
- Axios
- React Icons

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Socket.IO
- Multer

## Security

- JWT Authentication
- CORS Configuration
- Input Validation
- XSS Protection
- Rate Limiting
- Secure File Uploads

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bootstrap for the UI components
- MongoDB for the database
- Express and Node.js for the backend framework
- React for the frontend framework
- All other open-source libraries used in this project 