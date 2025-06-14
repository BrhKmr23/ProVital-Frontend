# ProVital Frontend

Hey! 👋  
This is the frontend codebase for *ProVital*, a lifestyle medicine appointment and education platform.  
I’m actively developing and tweaking the layout, so you’ll notice some custom design choices and ongoing improvements.

## What’s Inside

- *React* for the UI
- *SCSS* for styling (custom, not using a UI library)
- Responsive layout for desktop and mobile
- Animated image columns on the hero section (check out the top of the homepage!)
- Search bar with specialty, location, and insurance fields
- “Six Pillars” section with cards for Nutrition, Physical Activity, Sleep, etc.
- Header with dropdown login/signup for Doctors and Patients
- 
![Fianl Page](https://github.com/user-attachments/assets/04ea1c85-dedb-4a34-87a2-594239b795c5)

## Folder Structure


public/
  images/           # All static images used in the hero and cards
src/
  components/       # React components (Header, SearchBar, MainSection, etc.)
    Header.js
    Header.scss
    SearchBar.js
    SearchBar.scss
    MainSection.js
    MainSection.scss
  App.js
  index.js


## How to Run

1. Clone the repo:
   
   git clone https://github.com/BrhKmr23/Proactively-Frontend.git
   cd Proactively-Frontend
   
2. Install dependencies:
   
   npm install
   
3. Start the dev server:
   
   npm start
   
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes

- The animated images at the top are just for visual effect and loop infinitely.
- The search bar and dropdowns are styled to match the reference as closely as possible.
- If you see any issue, it’s probably because I’m still iterating on the layout!

— BrhKmr23
