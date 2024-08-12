# Personal Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, experience, and projects in web development, data science, and more. You can explore my work and learn more about me at [namandiwan.com](https://namandiwan.com).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Deploying](#deploying)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Features

- Modern and responsive design
- Smooth navigation and animations
- Detailed sections for projects, skills, and experience
- Custom animations and cursors
- Hosted on GitHub Pages with a custom domain

## Installation

To run this project locally, you'll need to clone the repository and install the necessary dependencies.

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### Installing Dependencies

Make sure you have Node.js and npm or yarn installed on your machine. Then run:
```bash
npm install
```
or
```bash
yarn install
```

### Running locally

To run the project locally, use the following command:
```bash
npm start
```
or
```bash
yarn start
```

This will start a local development server, and you can view the website in your browser at http://localhost:3000.

### Building for Production
```bash
npm run build
```
or
```bash
yarn build
```
This command will create an optimized build of the project in the build/ directory, which is ready for deployment.

### Deploying

#### Deploying to GitHub Pages
This project is configured to deploy to GitHub Pages. The deployment process will push the contents of the build/ directory to the gh-pages branch.

1. Install the gh-pages package if you haven't already:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Ensure that the following scripts are present in your package.json:
   ```bash
   "scripts": {
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the project using the command:
   ```bash
   npm run deploy
   ```
   or
   ```bash
   yarn deploy
   ```

### Custom Domain
If you are using a custom domain, make sure to set up the CNAME file in the public/ directory with your domain name (namandiwan.com), and GitHub Pages will automatically configure your custom domain.

### Technologies Used
React.js: A JavaScript library for building user interfaces
React Router: For handling routing in the application
Bootstrap: For responsive design and layout
gh-pages: For deploying the site to GitHub Pages
Custom CSS & Animations: For a unique and engaging user experience

### Contact
Feel free to reach out to me through the contact form on the website or connect with me on [LinkedIn](https://www.linkedin.com/in/namandiwan/).
