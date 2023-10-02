
### So, custom input fields without using the < input > element.

I've used StencilJS (as mentioned last Thursday) these small components (**https://stenciljs.com**). A handy tool thats easy to use/develop/test/compiles & polyfill adjustments. 


To get started (assuming you have npm - yarn works the same)

```bash
npm install
npm start
```

Live dev rebuilding - no refreshing needed.

To build the component for production, run:

```bash
npm run build
```


Stencil will package all the components in your ```src/components/``` directory to a ```dist``` directory - ready to be imported into your html/frameworks


To run the unit tests for the components, run:
```bash
npm test
```


I haven't built the tests yet - these are still as per default creating the barebones project so ignore for now

I've kept this as simple as possible using just an HTMLDivElement to handle the inputs but that way they are fully customisable with inline styling (I prefer this method rather than constraining the actual component - looks longer/messier in the HTML/React but more flexible).

I've added a mobile phone style method to that the last character is displayed for 500ms before turning back to a hidden character - mostly for the fun of it but I guess it has some practicality.

Placeholers were a challenge - but I found a work-around.

I've tested this on multiple browsers but only on a mac - I don't have a PC nor a VM/Bootcamp to play with :)



