
## Deployment: https://brendath.github.io/clicky-game-with-react/
## REPO Name: https://github.com/BrendaTH/clicky-game-with-react.git

### Clicky Game: A memory game with React.  Breaks up the application's UI into components, manages component state, and responds to user events.

### OVERVIEW and OPERATION: 
* The application renders different images to the screen. 
* Each image listens for click events.
* The application keeps track of the score and the top score. 
* The score is incremented by one after clicking an image for the first time. 
* The score is reset to 0 if the same image is clicked more than once.
* Each time an image is clicked, the image order is shuffled (with Math.random) and rendered to the page in a random order.
* To track already-chosen images an array is kept in the state object within the App class. Each time an image is chosen the array is updated with a setState command.

Technology used:
* gh-pages - to deploy react app to github
* react
* react-dom
* react-scripts
* Math.random - to shuffle the images in random order
