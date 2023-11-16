# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](Screenshot%202023-11-16%20010356.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I looked at the design and figured out how I could make components. I noticed the background changed depending on lightmode state. I used redux toolkit to make a global state for lightmode and used in whenever I needed to know what the isLightMode state was. I could've used themecontext but I chose to practice redux toolkit sine I hadn't used it before. 

setting up todolist
In App.tsx I made the todos state which is the list of todos a user will add or delete. when initializing the state for the todos it'll check if the user has a todos saved in localstorage already or it'll use the todos predefined in data.json. App.tsx has functions for adding, removing and toggling a todo. 

since I'm using typescript I set the type of the todo in it's own file so I wouldn't need to define it in each place I need to use it. 

I passed to todos state from App.tsx to todos.tsx and the functions.

todos.tsx set's up displaying the bottom part of the site it displays wht todos by mapping through it. There are some filters that need to be implemented. I made another sate which is a copy of todos and depending on what button a using clicks at the bottom the filter will display what todos match it. I made a nother state called "state" to save what the selected filter was. Depending on that slection the useEffect will maintain that filter selection even if a change is made to a single todo. 

drag and drop is implemented in this project. I set an area which i want to make draggable and droppable. handleDragEnd is the function which contains the logic for how I want the drag and drop to work. if it didint move or s outside of the dragdropcontext it won't do anything. If it is moved in a valid way it'll moved the selected todo to where the user places it.

input.tsx 
It's a form which adds the text the user types in the input field and then resets after they press the enter key. I have a library which generates a unique ID called uuid which makes it easier to order and reorder the todolist.

todo.tsx is just structuring the todo with the props passed from todos.tsx from the map. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to change an image from using the the window.innerwidth to change which background image to use. 

I learned how to set up and use redux toolkit.

I got more familiar with writing in TypeScript.

I learned to implement the library react-beautiful-dnd.

I started to use chatgpt/github copilot to ask questions on how to use new technologies. After I had watched tutorials on them just to get 

### Continued development

I still want to refine my what I've learned such as continuing to use TypeScript in future projects and redux toolkit. I stil plan to utilize github copilot to increase my workfow and have it answer questions to get a better understanding of frontend development.

### Useful resources

- [resource 1](https://youtu.be/FJDVKeh7RJI?si=4F81zTTcLGORdWNC) - This helped me learn typescript and use it with react. It was also a good lesson on how to use react-beautiful-dnd and how to make a todolist. It helped me get started on this project. I ended up changing how I structured my components.
- [resource 2](https://www.youtube.com/watch?v=YJ5EMzyimfc&pp=ygUTZHJhZyBhbmQgZHJvcCByZWFjdA%3D%3D) - This is an niformative tutorial on how to use the library react-beautiful-dnd. It is in depth and easy to understand. I helped me code my todos.tsx 
- [resource 3](https://www.youtube.com/watch?v=5yEG6GhoJBs&t=1362s&pp=ygUNcmVkdXggdG9vbGtpdA%3D%3D) -
I watched this tutorial to learn how to use redux toolkit.

## Author

- Website - (https://yashwanthvenkatesan.vercel.app/)
- Frontend Mentor - [@tigeryash](https://www.frontendmentor.io/profile/tigeryash)


## Acknowledgments

Thanks github copilot
