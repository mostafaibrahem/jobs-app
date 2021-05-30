# Getting Started with JobsNow

this app is used to retrieve jobs and skills from [https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview#endpoint-description] (skills-api)

## Getting Started

In the project directory, you can run:

### `npm install` then `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Tasks Done

- Layout & Header
[✔️]implement header with navigation and different pages layout.


- Search box component

[✔️] Add autocomplete functionality using the API. Get job titles containing a given search query.
[✔️] Add debounce (feel free to import it from lodash).
[✔️] Make the API calls only if the user has typed 3 or more characters.
[✔️] If the user clears the results and shows the all jobs screen.


- All jobs screen (Route: “/”)
  
[✔️] Display all jobs from the API, show only the first 12 jobs and update total jobs count.
[✔️] Search: When the user starts typing the search query after 3 letters you should navigate to the
search page with the typed query.
[✔️] Job Card: Display job title, Related skills for this job (with link to skill screen) and link to the job
screen.
[✔️]Load more: The user can scroll down to see another 12 results (Infinite scrolling) until the
results are done.

- Search jobs screen (Route: “/search”)
  
[✔️] Display search results, implement the same all jobs page functionality. (Job card, search) no
need to implement Load more
[✔️] Handle no search results case, Also you should handle url query “?query=frontend”.
[✔️] Search History: You should persist search data (query only) and the sidebar will show urls for
these searches.


- Job screen (Route: “/job/:uuid”)
 
[✔️] Display the job information. The job title, related skills and the related jobs.


- Skill screen (Route: “/skill/:uuid”)
  
[✔️] Display the skill information. The skill name, description, related jobs for this skill and the related
skills.



