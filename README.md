# Element-router

A simple router for webcomponents v1 with no dependencies and a tiny footprint (<1kb).

Inspiration and lots of snippets used from [Preact-router](https://github.com/developit/preact-router). Thanks guys!

`Element-router` provides a `<element-router>`-element that conditionally renders elements when the URL matches the configures path. It (optionally) provides a `<router-link>`-element to handle navigation and showing active state. 

**Feature-requests, bug-reports & pull-requests are welcome and appreciated!**

# API
TL;DR: Place the `<element-router>` where you want page to change between routes, and add `<element-router>` elements with configuration for each route. 

## Usage Example
```html
<element-router>
    <element-route path="/" element="home-page"></element-route>
    <element-route path="/lazy" import="lazy-element.js" element="lazy-element"></element-route>
    <element-route path="/no-element">
        <template>
            <style>h1 { color:red; }</style>
            <h1>Yo this is an inline-template</h1>
        </template>
    </element-route>
    <element-route path="*" redirect="/"></element-route>
</element-router>
```

## element-router
`<element-router>` is the container element that does the actual routing. 

**Events:** the element-router dispatches an `routechange` event when routing is complete.

## element-route 
`<element-route>` is used for configuration of individual routes. It has a mandatory `path` attribute that specifies what pattern this route should control. Parts of the path can be variable using `:` as a prefix. The data will then be assigned as a property to the element the route initiates. Finally path can be `*` to match all urls (for a 404 or similar).

Routes can resolve to either an element (use the `element`-attribute to specify the name of the element) or an inline template (place inside the element-route). 

Routes can also trigger a redirect by specifying a url to the `redirect`-attribute. 

Finally the element-route can specify an element to load asyncronously by speciying the modules url in the `import`-attribute. The import will then happen before the routechange is completed. 

Multiple matching element-route's are prioritized by their DOM-order - only the first match is used. 

## routeTo
`element-router.js` also exports a `routeTo(url:string)` function that takes a url to navigate to. 

## active
`element-router.js` also exports a `active(url:string, value?='active')` function that returns the value if the url matches the current url. Use this to get active-state on navigation. 

## router-link
`router-link.js` is a seperate element (in a seperate file) that defines a `<router-link>`-element for navigation. Use with href-attribute (like a regular a-tag). This will in fact render an a-tag and conditionally put an 'active' class on it. 