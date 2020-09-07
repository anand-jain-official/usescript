# useScript hook
Simplest way to load scripts asynchronously or selectively in React. 

Install with `npm install --save usescript-hook`

## How does it work ?
It's a custom hook that uses React's features to load scripts asynchronously and selectively. 
You can load a script only for a particular component.
This will massively help in SEO and preventing slow loads because of 3rd party scripts not needed everywhere.
It works using React hooks. Requires React v16.8+.

## Example: 
    
    const loaded = useScript("URL for script");


