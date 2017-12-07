# Element-router

The focus is to make a simple, tiny and straight-forward way to do routing for webcomponents. Goal is to keep below 1kb gzipped. 

**This is work in progress... seriously - don't use this yet... **

Inspiration and lots of snippets used from [Preact-router](https://github.com/developit/preact-router).

Feature-requests, bug-reports etc are welcome!

# API-suggestion
The element-router element is the slot where the routes are displayed. The element-route elements are for route-configuration and takes a path attribute and optional element, import or redirect as attributes or even a inline template. 

```html
<element-router>
    <element-route path="/" element="home-page"></element-route>
    <element-route path="/lazy" import="lazy-element.js"></element-route>
    <element-route path="/no-element">
        <template>
            <style>h1 { color:red; }</style>
            <h1>Yo this is cool</h1>
        </template>
    </element-route>
    <element-route path="*" redirect="/"></element-route>
</element-router>
```

# Wishlist / todo / ideas
- x statiske 
- x dynamiske paths
- x route - (import {route} from './element-router.js' og så route('/about');
- x lazy load a route
- x dont init all pages up front...
- x a catch-all route (for 404 or generic)
- x redirects
- x skip lit dependency 
- x rename into just element-router
- x route to inline template
- x route if anybody else changes history
- active-state på links
- router-events
- automatically hijack local a-tags?
- child routes?
