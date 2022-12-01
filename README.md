How to run code 

Step 1 : Clone this repository on your device 

Step 2: Navigate to cloned folder and open terminal at top level 

Step 3: Run command :  npm install    

Step 4: Run application with command :  npm start

Application is created by Vite 

Tech stack used:SOLID principles,Vercel ,HTML ,CSS ,JavaScript, ReactJs ,React Context API as global state, React Query as State , React Router,React Hooks ,customHooks,All Components are reusable, Majority of components are Pure,
TMDB as API, Lodash for debounce, Dotenv for sensitive data (i know that  .env shoud not be commited on GitHub i commited it for sake of proving that i implemented it).

TMDB returns 20 results each call i left it that way for becouse of better looking UI but to prove i know how to make it 10 in Home.jsx line 54 change data?.results?.map() change to data?.results?.slice(0,9).map()

Visit Live Website at : https://rubicon-indol.vercel.app/ 

Implemented 

Mobile responsive

Reactive search bar 

Only after 3 or more keys search is activated 

After key count is lover then 3 seach go back to original

Debounce is implemented and only after 1 second when typing is done search trigger 

Switching between tabs while searching should trigger the search again with the same search term for the selected tab and update the results is implemented.

If movie/tv show have trailer trailer is displayed instead of a cover image.


I currently have no experience in working with TypeScript, but if you like how I did this task and if it is enough for further cooperation, I will master TypeScript in a short time
