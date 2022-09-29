# Virtualizer Application

This is an application that virtualizes list from a server without any downtime after load.

## API Reference

#### Get all items

```http
  GET https://public.opendatasoft.com/api/records/1.0/
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `api_key` | `string` | **Required**. Key value amount |

#### Get item

```http
  GET https://public.opendatasoft.com/api/records/1.0/search/?dataset=modis_c6_global_7d&q=&rows=${dataAmount}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `Amount`  | `string` | **Required**. Amount of item to fetch |

#### dataAmount

Takes the amount

## Authors

- [@davidadeola](https://www.github.com/davidadeola)

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Color Reference

| Color          | Hex                                                              |
| -------------- | ---------------------------------------------------------------- |
| Primary Color  | ![#ba7dff](https://via.placeholder.com/10/ba7dff?text=+) #ba7dff |
| bG-Color light | ![#6E2FB5](https://via.placeholder.com/10/6E2FB5?text=+) #6E2FB5 |
| primary light  | ![#e1f5fe](https://via.placeholder.com/10/e1f5fe?text=+) #e1f5fe |
| bG-Color dark  | ![#361758](https://via.placeholder.com/10/361758?text=+) #361758 |

## Deployment/run

To deploy this project run

```bash
  npm start
```

## Features

- dark Mode
- Scroll to top
- Speed Scroll
- Loader animation
- Fullscreen mode
- Cross platform

## 🚀 About Me

I'm a full stack developer...

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/david-adeola)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/DavidAdeola_)

## Other Common Github Profile Sections

👩‍💻 I'm currently working on MetaChat

🧠 I'm currently learning Vuw.js, three.js

👯‍♀️ I'm looking to collaborate on blockchain projects

🤔 I'm looking for help with...

💬 Ask me about anything Frameworks

📫 How to reach me linkedin

😄 Pronouns He/Him

⚡️ Fun fact I love getting thing done

## 🛠 Skills

Javascript, HTML, CSS, React.js, Docker, Webpack

## Installation

Install virtualize with npm

```bash
  npm install virtualize
  cd virtualize
```

Install packages

```bash
  npm install
```

### Logo

![Virtualize](https://res.cloudinary.com/devkp5za2/image/upload/v1664443697/virtualize_gb7hwu.png)

## Optimizations

Optimized display rendering, to fetch data but not load, until scroll actions.
Optimized scroll to top feature for all browsers and screens

## Roadmap

- Initialize project using Create React App
- Create file and folder structures for App
- Pull data from API and test Render
- Style table and table content
- Set loading state for first Render
- Add Scroll design
- Fix CSS border styling
- Add scroll to top and Logo
- Change scroll thumb color
- Speed up loader and resize container
- Resize table container
- Improve loader animation text

## Design choices

- Color choice is a rarely used dark mode feature for lists, reason for color is to make list look more attractive
- Choice of Language is React chose this because is Widely used and it is very easy to implement

## Challenges faced

- Had challenges trying to figure out the best way to render list without down time, considering I can't use any external Library for that. So, on my research I had to make sure I was optimizing every feature in the Application, from fetching data, making code light weight, and using CSS "content-display: auto;" to improver performance

## Run Locally

Clone the project

```bash
  git clone https://github.com/davidadeola/virtualize.git
```

Go to the project directory

```bash
  cd virtualize
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Screenshots

### Loading State

![Loading State](https://res.cloudinary.com/devkp5za2/image/upload/v1664444341/unnamed_2_lajdez.jpg)

### FIrst Render

![First Render](https://res.cloudinary.com/devkp5za2/image/upload/v1664444342/unnamed_3_tzadbk.jpg)

## Support

For support, email adeoladavidoluwole@gmail.com .

## Tech Stack

**Client:** React, CSS, JavaScript

**Server:** API
