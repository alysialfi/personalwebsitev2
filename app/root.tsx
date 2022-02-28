import { LinksFunction, LiveReload, Outlet, Links } from "remix";
import tailwind from './styles/tailwind.css';

export let links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: tailwind }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>My First Remix Project</title>
        <Links />
      </head>
      <body>
        <h1 className="text-3xl text-blue-300 mb-4">Test...</h1>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}