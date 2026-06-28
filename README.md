# Property Management System

Property Management System Software for Motel Investors Inc.

## Author
Pooja Valeja

## Project Structure

```
property_management_system/
├── backend/                    # Spring Boot Java Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/propertymanagement/
│   │   │   │   ├── PropertyManagementSystemApplication.java
│   │   │   │   ├── config/
│   │   │   │   ├── controller/
│   │   │   │   ├── model/
│   │   │   │   ├── repository/
│   │   │   │   └── service/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
├── frontend/                   # React Frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── .env.example
└── README.md
```

## Technology Stack

### Backend
- **Framework**: Spring Boot 3.1.5
- **Language**: Java 17
- **Database**: MongoDB
- **Security**: Spring Security with JWT
- **Build Tool**: Maven

### Frontend
- **Framework**: React 18.2.0
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: CSS3

## Features

- User Authentication & Authorization
- Property Management
- Tenant Management
- Booking System
- Payment Tracking
- Dashboard with Statistics

## Getting Started

### Backend Setup

1. Install Java 17 and Maven
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   mvn clean install
   ```
4. Configure MongoDB connection in `application.properties`
5. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend will be available at `http://localhost:8080/api`

### Frontend Setup

1. Install Node.js and npm
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Users
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### Properties
- `GET /api/properties` - Get all properties
- `GET /api/properties/{id}` - Get property by ID
- `POST /api/properties` - Create new property
- `PUT /api/properties/{id}` - Update property
- `DELETE /api/properties/{id}` - Delete property

### Tenants
- `GET /api/tenants` - Get all tenants
- `GET /api/tenants/{id}` - Get tenant by ID
- `POST /api/tenants` - Create new tenant
- `PUT /api/tenants/{id}` - Update tenant
- `DELETE /api/tenants/{id}` - Delete tenant

### Bookings
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/{id}` - Get booking by ID
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/{id}` - Update booking
- `DELETE /api/bookings/{id}` - Delete booking

### Payments
- `GET /api/payments` - Get all payments
- `GET /api/payments/{id}` - Get payment by ID
- `POST /api/payments` - Create new payment
- `PUT /api/payments/{id}` - Update payment
- `DELETE /api/payments/{id}` - Delete payment

## Database Models

### User
- id, username, email, password, firstName, lastName, role, enabled, createdAt, updatedAt

### Property
- id, name, address, city, state, zipCode, propertyType, totalRooms, ownerId, totalValue, description, amenities, createdAt, updatedAt

### Tenant
- id, propertyId, roomNumber, firstName, lastName, email, phone, checkInDate, checkOutDate, rentAmount, status, createdAt, updatedAt

### Booking
- id, propertyId, roomNumber, guestName, guestEmail, checkInDate, checkOutDate, totalPrice, paidAmount, status, bookingReference, createdAt, updatedAt

### Payment
- id, bookingId, tenantId, amount, paymentMethod, status, transactionId, paymentDate, createdAt, updatedAt

## Development

To contribute to this project:

1. Create a feature branch
2. Make your changes
3. Test your changes
4. Submit a pull request

## License

MIT License - See LICENSE file for details

## Contact

For questions or support, please contact: Pooja Valeja
