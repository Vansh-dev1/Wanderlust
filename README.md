🌍 WanderLust

An Airbnb-inspired travel listing web application where users can explore, create, and manage travel accommodations.

⸻

📖 About

WanderLust is a full-stack travel accommodation platform inspired by Airbnb. Users can browse properties, create their own listings, upload images, leave reviews, and securely manage their accounts through authentication and authorization.

The project follows the MVC Architecture, making the codebase organized, scalable, and easy to maintain.

⸻

✨ Features

* 🔐 User Authentication (Sign Up, Login & Logout)
* 🏡 Create, Edit and Delete Listings
* 📸 Image Upload using Cloudinary
* ⭐ Add and Delete Reviews
* 👤 Authorization (Only listing owners can edit/delete)
* 🔒 Secure Password Hashing with Passport.js
* 💬 Flash Messages
* 🗂️ MVC Project Structure
* 📱 Responsive User Interface
* 🌐 MongoDB Atlas Database Support

⸻

🛠️ Tech Stack

Frontend

* HTML5
* CSS3
* Bootstrap
* EJS

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

Authentication

* Passport.js
* Passport Local
* Express Session

Other Packages

* Cloudinary
* Multer
* Connect Flash
* Method Override
* Joi Validation
* Dotenv

⸻

📂 Folder Structure

WanderLust/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── middleware.js
├── cloudConfig.js
├── schema.js
├── app.js
├── package.json
└── README.md

⸻

⚙️ Installation

Clone the repository

git clone https://github.com/Vansh-dev1/Wanderlust.git

Move into the project

cd Wanderlust

Install dependencies

npm install

Create a .env file

ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

Start the application

npm start

or

nodemon app.js

The application will run at:

http://localhost:8080

⸻

📸 Screenshots

Add screenshots here:

screenshots/
├── Home.png
├── Listing.png
├── Login.png
├── CreateListing.png
└── Review.png

⸻

📌 Future Enhancements

* ❤️ Wishlist Feature
* 🔍 Advanced Search & Filters
* 📍 Interactive Maps
* 💳 Online Booking & Payments
* 📅 Booking Calendar
* 📧 Email Notifications
* 🌙 Dark Mode

⸻

👨‍💻 Author

Vansh Lunagariya

* GitHub: https://github.com/Vansh-dev1

⸻

🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

⸻

📜 License

This project is licensed under the MIT License.

⸻

⭐ If you like this project, don’t forget to Star the repository!
