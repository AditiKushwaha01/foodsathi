const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/register", {  // Specify a database name, e.g., "myapp"
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((error) => {
  console.log("Failed to connect", error);
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Define and export the User model
const User = mongoose.model("User", userSchema);
module.exports = User;
