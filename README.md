## Management-Platform Application - Work in progress
This is a Full Stack web application built with Next.js, Next-auth for user authentication, and Prisma as the database toolkit.

### Overview
The application allows for comprehensive management of drivers and routes. The primary user of the application is a "driver". Each driver is identified by their unique email, and their account is secured with a password. Drivers have additional attributes like firstName, lastName, and type.

Drivers are associated with multiple "routes". Each route contains information about the car used, the distance traveled, the start and end dates, and any additional notes. A route is always associated with a driver.

### Data Models
The two main data models in the application are:

Driver
```
{
  id: Int,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  type: String,
  routes: Array<Routes>
}
```
Routes
```
{
  id: Int,
  car: String,
  distance: String,
  startDate: DateTime,
  endDate: DateTime,
  note: String,
  driver: Driver,
  driverId: Int
}
```
### Features
- Authentication: Secure login system using Next-auth.
- Drivers Management: Allows to add, edit and remove drivers.
- Routes Management: Allows to add, edit and remove routes linked to the drivers.

### Tech Stack
- Next.js: A React framework for building modern web applications.
- Next-auth: A full-featured authentication solution for Next.js applications.
- Prisma: An open-source database toolkit to facilitate data access.
