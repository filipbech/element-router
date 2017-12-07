# Element-router
# Element-router

This is work in progress... seriously - don't use this yet... 

Inspiration and lots of snippets used from Preact-router - https://github.com/developit/preact-router


# Wishlist
x statiske 
x dynamiske paths
x route - (import {route} from './element-router.js' og så route('/about');
- active på links
- ability to listen for route-changes
- only handle routeable urls...
- automatically hijack local a-tags
- also route if anybody else changes history (listen for pop)
- child routes?
- lazy load a route
x dont init all pages up front...
x a catch-all route (for 404 or generic)
- some reusing? - at least when same route + same params
x redirects
x skip lit dependency 
x rename into just element-router
x route to inline template

# API-suggestion
In stead of putting the path on the individual elements, make a route-element that loads excisting elements, imports new ones or just uses an inline template

```html
<router>
    <route path="/" element="home-page"></route>
    <route path="/lazy" import="lazy-element.js"></route>
    <route path="/no-element">
        <template>
            Yo this is cool
        </template>
    </route>
    <route path="*" redirect="/"></route>
</router>
```