# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### useEffect 
<bold>useEffect(() => {}, []);</bold>
The useEffect <bold>HOOK</bold> in React is used to perform side effects in functional components. Side effects can include things like fetching data, directly updating the DOM, and timers.<br>
Inside the function - This is where you would normally perform your side effects. For example, you might fetch data from an API or set up a subscription.<br>
Dependancy Array "[]" : The second argument to 'useEffect' is an array of dependencies. When the dependency array is empty, the effect runs only once, after the initial render<br>
This is similar to componentDidMount in class components. It means the effect will not re-run on updates unless the component is unmounted and remounted. If the [] is a number it will run the function the number of times specified.

### Setting Up a Proxy in Vite Configuration
In your Vite configuration file, you can set up a proxy to route API requests to your backend server. This allows you to use a cleaner URL structure in your frontend code.<br>

Here is the configuration to proxy requests from /api to http://localhost:8000:

<code style="width:100%"> 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});     
</code>

#### How it works
Proxy Setup: Requests to /api are forwarded to http://localhost:8000.<br>
Path Rewrite: The /api prefix is removed from the request path before sending it to the backend server.<br>
Change Origin: This option ensures the origin of the host header matches the target URL.<br>


