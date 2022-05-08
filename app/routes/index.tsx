import { Outlet } from "remix";
import NavbarComp from "~/components/navbar";
import About from "./about/about";

export default function IndexRoute() {
    return (
        <main className="overflow-hidden relative">
            <NavbarComp />
            <About />
            <Outlet />
        </main>
    )
}