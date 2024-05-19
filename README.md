# Promptopia

Promptopia is a web application built with Next.js that allows users to create and share prompt ideas. It features user authentication via Google, a MongoDB database for storing prompts, and a responsive design for an optimal user experience across different devices.

## Screenshot

![Promptopia Screenshot](public\assets\images\Promptopia-screenshot.PNG)
![Promptopia Screenshot](public\assets\images\create_post.PNG) 

## Features

- **Authentication**: Users can sign in and sign up using their Google account.
- **Database**: Prompts are stored in a MongoDB database.
- **Create and Post Prompts**: Users can create and share their own prompt ideas.
- **Search Functionality**: Search for prompts by tag name, username, or any word in the prompt.
- **Responsive Design**: The application is fully responsive and works well on all device sizes.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local development environment:

- Node.js
- npm (or yarn)
- MongoDB

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/assilko/promptopia_nextjs.git
    cd promptopia
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add your MongoDB connection string and Google OAuth credentials.

    ```env
    MONGODB_URI=your_mongodb_connection_string
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```

4. **Run the development server:**

    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Authentication

- Click the "Sign in with Google" button on the homepage to authenticate.

### Creating Prompts

- Once authenticated, navigate to the "Create Prompt" page.
- Fill in the prompt details and submit.

### Searching Prompts

- Use the search bar to find prompts by tag name, username, or any keyword within the prompt.


## Technologies Used

- **Next.js**: React framework for server-side rendering and generating static websites.
- **MongoDB**: NoSQL database for storing prompts.
- **Google OAuth**: Authentication via Google accounts.
- **TailwindCSS**: Styling for a fully responsive design.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## Contact

For any inquiries, please contact [assilko@outlook.com](mailto:assilko@outlook.com).


