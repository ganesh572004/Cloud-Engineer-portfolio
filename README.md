# Ganesh Korada | Cloud & Software Engineer Portfolio

## A clean, beautiful and responsive portfolio for Cloud & Software Engineers

<p align="center">
  <kbd>
    <!-- Replace with your own screenshot or GIF -->
    <img src="public/Ganesh_Korada_Resume.png" alt="Portfolio Screenshot" width="600" />
  </kbd>
</p>

This is my personal portfolio website, built with React and SCSS, showcasing my cloud, software, and machine learning projects, certifications, and achievements. You can easily customize your own by editing `src/portfolio.js` and `src/_globalColor.scss`.

- [Sections](#sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Customization](#change-and-customize-every-section-according-to-your-need)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Portfolio Sections
✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Work Experience\
✔️ Open Source Projects Connected with GitHub\
✔️ Big Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs\
✔️ Talks\
✔️ Podcast\
✔️ Contact me\
✔️ Twitter Timeline\
✔️ GitHub Profile

To view my live portfolio, **[click here](https://ganeshkorada.dev/)**.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

### Docker Commands

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
```

## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
git clone https://github.com/ganesh572004/ganeshkorada-portfolio.git

# Go into the repository
cd ganeshkorada-portfolio

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```

## Customization

All content is managed in `src/portfolio.js`. Update your personal info, projects, certificates, and links there. For color and theme, edit `src/_globalColor.scss`.

## Blog Integration (Optional)
If you want to show your Medium blogs, add your Medium username to `.env` as `MEDIUM_USERNAME` and set `displayMediumBlogs` in `portfolio.js`.

#### Resume upload
To upload your own resume, simply place a PDF in the `public/` folder and update the download link in `portfolio.js`.

#### Using Emojis
For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

#### Customize Lottie Animations
You can choose a Lottie and download it in json format from sites like [this](https://lottiefiles.com/). In `src/assets/lottie`, replace the Lottie json file you want to alter with the same file name. If you want to change the Lottie options, go to `src/components/displayLottie/DisplayLottie.js` and change the `defaultOptions` object, you can refer [lottie-react docs](https://www.npmjs.com/package/lottie-react) for more info on the `defaultOptions` object.

#### Adding Twitter Time line to your Page
Insert your Twitter username in `portfolio.js` to show your recent activity on your page.

```javascript
const twitterDetails = {
  userName : "Your Twitter Username"
};
```
Note: Don't use `@` symbol when adding username.

## Deployment
You can deploy your portfolio using GitHub Pages, Netlify, or Vercel. Update the `homepage` field in `package.json` to your domain (e.g., `https://ganeshkorada.dev/`).

#### Deploying to GitHub Pages
1. Set the `homepage` in `package.json` to your GitHub Pages URL or custom domain.
2. Run `npm run deploy` to publish.

#### Deploying to Netlify or Vercel
1. Connect your GitHub repository.
2. Set the build command to `npm run build` and the publish directory to `build/`.
3. Set your custom domain in the platform settings.

## Technologies Used 

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)

## Illustrations
- [UnDraw](https://undraw.co/illustrations)
- [Lottie by Oblikweare](https://lottiefiles.com/oblikweare)

## Maintainer

**Ganesh Korada**  
Email: ganeshkorada572004@gmail.com  
Website: [https://ganeshkorada.dev/](https://ganeshkorada.dev/)

---
