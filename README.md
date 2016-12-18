
# monocle 🕵️
Visualization editor for [Heroic](https://spotify.github.io/heroic) data.

## Development
```bash
# Install all the dependencies
yarn

# Initialize the dev server
npm start
```
Your dev server should be running on localhost:3000.  
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
# Run the test
npm test
```

## Tech
* React
* Cerebral V2
* VictoryCharts

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the create-react-app guides [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
