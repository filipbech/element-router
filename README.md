# Element-router

A simple way to do routing for webcomponents v1 with no dependencies and a tiny footprint. Goal is to keep below 1kb gzipped (´npm run checksize´ to see minified+gzipped size).

**This is work in progress... seriously - don't use this yet...**

Inspiration and lots of snippets used from [Preact-router](https://github.com/developit/preact-router). Thanks guys!

Feature-requests, bug-reports & pull-requests are welcome and appreciated!

# API
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

# Todo / ideas
- x match static paths
- x match dynamiske paths
- x routeTo-function - (import {routeTo} from './element-router.js' og så routeTo('/about');
- x lazy load a route (requires browser to support dynamic import() )
- x Catch-all route (for 404 or generic)
- x Redirects
- x Route to inline template
- x Automatically route if anybody else changes history
- x Dispatch event on routechange (DOM-event on the element-router element)
- x active-state method
- x link-element with active-state
- package up, cleanup
- docs + demo
- put on npm
- child routes (probably not?)
- make this list into issues
