import { LinksFunction, LiveReload, Outlet, Links, Scripts } from "remix";
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
            <Outlet />
            <LiveReload />
            <Scripts />
        </body>
        </html>
    );
}