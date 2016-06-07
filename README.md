# Monocle
Explore Heroic in an awesome manner. Monocle is a UI built to experiment with user interactions and different kinds of form fields to find the metrics that matter.

## Development
```bash
# Install all the dependencies
npm i

# Initialize the dev server
npm run dev
```
Your dev server should be running on localhost:5555.  
Got no heroic cluster? Continue reading.

## Local Heroic
Setup and run a local heroic instance with test data.

```bash
# Clone and cd
git clone git@github.com:spotify/heroic && cd heroic

# Install repackaged dependencies
tools/install-repackaged

# Speedy building this java project with maven
mvn -D maven.test.skip=true package

# Run heroic with the in-memory profile in server mode
tools/heroic-shell -P memory --server

# Within the heroic shell generate test data
load-generated
```

## Test
```bash
# Run the test suite
npm test

# Run continuously while developing
npm run test-multi
```

## Build
```bash
npm run build
```
Deploy Monocle by building the static files and serve them with any web server. You will now find the files in the `/build` folder and your `index.html` is still in the root folder.

## Resources
Learn more about the setup by looking at

* [modern-todos](https://github.com/nikek/modern-todos/)
* [cerebral-view-riot](https://github.com/nikek/cerebral-view-riot/)

And the tech used

* [Riot](http://riotjs.com)
* [Cerebral](http://cerebraljs.com)
