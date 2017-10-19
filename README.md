# js-dom-quotes

## Set up

1. Clone this repo and `$ cd js-dom-quotes`
2.  Get the jQuery branch locally by typing `$ git checkout jquery`
3. Open the index page in your browser: `$ open index.html`
4. Add jQuery to the page via a CDN:
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js" defer></script>
    ```
5. Open Chrome's developer tools: <kbd>command + option + j</kbd>

## Exercise: Selecting DOM elements

This is an exercise in finding elements in the DOM.

Your task is to write javascript **in the console** to retrieve the objects which represent these elements.

### Part 1

1. Select the `<body>`
2. Select the `<header>`
3. Select all of the elements with class "quote"
4. Select all of the subject elements
5. Select the navigation links
6. Select all the quotes in the "life" section.
7. Select the 'Quotes About Motivation' heading
8. Select the `<p>` element containing the **second** Mark Twain quote

### Part 2

Do the same as before, but this time **with no spaces or colons in `$( )`**. That is: retrieve the target element(s) **using only DOM traversal methods** from [jQuery's documentation](http://api.jquery.com/category/traversing/tree-traversal/).

#### OK:

```js
$(".life").find(".quote");
```

#### Not OK:

```js
$(".life .quote");
```
