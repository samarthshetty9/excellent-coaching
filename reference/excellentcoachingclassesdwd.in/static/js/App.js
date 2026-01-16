import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Timeline from "./pages/Timeline";

function App() {
    return ( <
        >
        <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / >
        }
        /> <
        Route path = "about"
        element = { < About / >
        }
        />

        <
        Route path = "gallery"
        element = { < Gallery / >
        }
        /> <
        Route path = "contact"
        element = { < Contact / >
        }
        /> <
        Route path = "explore"
        element = { < Explore / >
        }
        /> <
        Route path = "timeline"
        element = { < Timeline / >
        }
        /> <
        /Routes> <
        Footer / >
        <
        /Router> <
        />
    );
}

export default App;