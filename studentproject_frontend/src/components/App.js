import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import AddStudent from './AddStudent';
import Dashboard from './Dashboard';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';
import EditStudent from './EditStudent';
import DeleteStudent from './DeleteStudent';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/add-student" element={<AddStudent />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/edit-student/:id" element={<EditStudent />} />
                    <Route path="/delete-student/:id" element={<DeleteStudent />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
