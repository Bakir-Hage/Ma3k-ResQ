1. you need to remove the deafalt setting for vite like vite.svg in public and react.svg in assets
2. what is the gitkeep ?
3. what is this "lucide-react": "^0.575.0",
4. `react-router-dom` is on version 7, but the router code is written using the v6-style `createBrowserRouter` mental model. This can still work, but the team should confirm they intentionally chose v7 and are using its API correctly
5. Clean route names to lowercase URL-style paths.
6. Remove dead commented code and leftover debug logs.
