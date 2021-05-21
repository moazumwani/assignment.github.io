import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Switch, Link } from "react-router-dom";
// import { FormControl, Button, Form } from 'react-bootstrap'
import PostData from "./warehouses.json";
function Multi() {
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(PostData);


    // handle change event of search input
    const handleChange = (value) => {
        setSearchText(value);
        filterData(value);
    };

    // filter records by search text
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "")
            setData(PostData);
        else {
            const filteredData = PostData.filter((item) => {
                return Object.keys(item).some((key) => {
                    return item[key].toString().toLowerCase().includes(lowercasedValue);
                })


            });
            setData(filteredData);
        }
    };

    return (
        <div className="App">

            {/* <ul>
                <li class="nav-item"><a href="Faculty.html" class="nav-link">Faculty</a></li>
                <li class="nav-item"><a href="Gallery.html" class="nav-link">Gallery</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link">Contact us</a></li>
                <li class="nav-item"><a href="CUK PLACEMENT Brochure.pptx" target="_blank" class="nav-link">Brochure</a></li>
            </ul> */}




            {/* <ReactBootStrap.Navbar bg="light" expand="lg">
                <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#link">About</ReactBootStrap.Nav.Link>

                    </ReactBootStrap.Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar> */}
            <h>List of Warehouses</h><br></br>
             Search:{" "}

            <input
                style={{ marginLeft: 5 }}
                type="text"
                placeholder="Type to search..."
                value={searchText}
                onChange={(e) => handleChange(e.target.value)}
            />
            <div className="box-container">
                {data.map((d, i) => {
                    return (
                        <div key={i} className="box" style={{ backgroundColor: d.color }}>
                            <b>Name: </b>
                            {d.name}
                            <br />
                            <b>City: </b>
                            {d.city}
                            <br />
                            <b>Cluster: </b>
                            {d.cluster}
                            <br />

                            <b>id: </b>
                            {d.id}
                            <br />
                            <b>Space available: </b>
                            {d.space_available}
                            <br />
                            <b>Type: </b>
                            {d.type}
                            <br />

                        </div>
                    );
                })}
                <div className="clearboth"></div>
                {data.length === 0 && <span>No records found to display!</span>}
            </div>
        </div>
    );
}

export default Multi;
