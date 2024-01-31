import React from "react";
import CurrentTime from "./CurrentTime";

const Navbar: React.FC = () => {

    return (
        <nav className="p-4 md:px-8 w-full bg-primary shadow-lg text-white flex justify-between items-center">
            <p className="uppercase text-xl font-semibold">reminder app</p>
            <CurrentTime />
        </nav>
    );
}

export default Navbar