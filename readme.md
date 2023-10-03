
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

I haven't built the tests yet - these are still as per default creating the barebones project so ignore for now.

I've kept this as simple as possible using just an HTMLDivElement to handle the inputs but that way they are fully customisable with inline styling (I prefer this method rather than constraining the actual component - looks longer/messier in the HTML/React but more flexible).

Placeholers were a challenge - but I found a work-around.

I've tested this on multiple browsers but only on a mac - I don't have a PC nor a VM/Bootcamp to play with :)

There's a simple zip file that contains and html and a css file (it'll need a quick npm install from the root directory) - this was built using the component (npm installing the oregan component) - there's some work to do on text alignment/leading and the un/visible toggle image should really be a seperate component (as there's far too much css/scripting going on - the separate components should emit events to avoid this).

I'll spend some time getting this sorted and update the repo later but I thought I'd better get something up and live!





