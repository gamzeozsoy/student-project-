import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import './Dashboard.css';
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';

const Dashboard = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const studentsPerPage = 5;
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
    const [searchQueries, setSearchQueries] = useState({
        name: '',
        surname: '',
        age: '',
        job: '',
        email: ''
    });
    const [newStudent, setNewStudent] = useState({
        name: '',
        surname: '',
        age: '',
        job: '',
        email: '',
        password: ''
    });

    // Fetch students from API
    const fetchStudents = () => {
        axios.get('http://localhost:8080/studentproject/students/list')
            .then(response => {
                setStudents(response.data);
                applyFiltersAndSort(response.data);
            })
            .catch(error => {
                console.error('Error fetching students:', error);
            });
    };

    // Apply search and sorting
    const applyFiltersAndSort = (students) => {
        let filtered = [...students];

        // Apply search filters
        filtered = filtered.filter(student => {
            return (
                (searchQueries.name === '' || student.name.toLowerCase().includes(searchQueries.name.toLowerCase())) &&
                (searchQueries.surname === '' || student.surname.toLowerCase().includes(searchQueries.surname.toLowerCase())) &&
                (searchQueries.age === '' || student.age.toString().includes(searchQueries.age)) &&
                (searchQueries.job === '' || student.job.toLowerCase().includes(searchQueries.job.toLowerCase())) &&
                (searchQueries.email === '' || student.email.toLowerCase().includes(searchQueries.email.toLowerCase()))
            );
        });

        // Apply sorting
        if (sortConfig !== null) {
            filtered.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }

        setFilteredStudents(filtered);
    };

    // Call fetchStudents on component mount
    useEffect(() => {
        fetchStudents();
    }, []);

    // filter
    useEffect(() => {
        applyFiltersAndSort(students);
    }, [searchQueries, sortConfig, students]);

    // Handle sorting
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchQueries({
            ...searchQueries,
            [name]: value
        });
    };

    // Handle new student input change
    const handleNewStudentChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value
        });
    };

    // Add new student
    const handleAddStudent = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/studentproject/students/add', newStudent)
            .then(response => {
                setNewStudent({
                    name: '',
                    surname: '',
                    age: '',
                    job: '',
                    email: '',
                    password: ''
                });
                alert('Student added successfully');
                fetchStudents(); // Refetch students to include the new student
            })
            .catch(error => {
                console.error('Error adding student:', error);
            });
    };

    // Handle pagination
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    // Pagination calculations
    const offset = currentPage * studentsPerPage;
    const currentPageStudents = filteredStudents.slice(offset, offset + studentsPerPage);
    const pageCount = Math.ceil(filteredStudents.length / studentsPerPage);

    // Get sort icon based on current sorting configuration
    const getSortIcon = (column) => {
        if (sortConfig.key === column) {
            return sortConfig.direction === 'asc' ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />;
        }
        return <span>⇵</span>;
    };

    // Export to Excel
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(filteredStudents);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Students');
        XLSX.writeFile(wb, 'students.xlsx');
    };

    //import from excel
    const importFromExcel = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {

        }

    };

    return (
        <div className="dashboard">
            <div className="form-container">
                <form onSubmit={handleAddStudent} className="add-student-form">
                    <h3>Add New Student</h3>
                    <input
                        type="text"
                        name="name"
                        value={newStudent.name}
                        onChange={handleNewStudentChange}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="text"
                        name="surname"
                        value={newStudent.surname}
                        onChange={handleNewStudentChange}
                        placeholder="Surname"
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        value={newStudent.age}
                        onChange={handleNewStudentChange}
                        placeholder="Age"
                        required
                    />
                    <input
                        type="text"
                        name="job"
                        value={newStudent.job}
                        onChange={handleNewStudentChange}
                        placeholder="Job"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={newStudent.email}
                        onChange={handleNewStudentChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={newStudent.password}
                        onChange={handleNewStudentChange}
                        placeholder="Password"
                    />
                    <button type="submit" className="add-button">Add Student</button>
                </form>
            </div>

            <div className="table-container">
                <h2 className="dashboard-title">Student Information</h2>
                <div className="export-button-container">
                    <button onClick={exportToExcel} className="export-button">Excel</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('id')}>
                            ID {getSortIcon('id')}
                        </th>
                        <th>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={searchQueries.name}
                                onChange={handleSearchChange}
                                placeholder="Search"
                                className="search-input"
                            />
                        </th>
                        <th>
                            Surname
                            <input
                                type="text"
                                name="surname"
                                value={searchQueries.surname}
                                onChange={handleSearchChange}
                                placeholder="Search"
                                className="search-input"
                            />
                        </th>
                        <th>
                            Age
                            <input
                                type="number"
                                name="age"
                                value={searchQueries.age}
                                onChange={handleSearchChange}
                                placeholder="Search"
                                className="search-input"
                            />
                        </th>
                        <th>
                            Job
                            <input
                                type="text"
                                name="job"
                                value={searchQueries.job}
                                onChange={handleSearchChange}
                                placeholder="Search"
                                className="search-input"
                            />
                        </th>
                        <th>
                            Email
                            <input
                                type="text"
                                name="email"
                                value={searchQueries.email}
                                onChange={handleSearchChange}
                                placeholder="Search"
                                className="search-input"
                            />
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageStudents.length > 0 ? (
                        currentPageStudents.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.surname}</td>
                                <td>{student.age}</td>
                                <td>{student.job}</td>
                                <td>{student.email}</td>
                                <td>
                                    <Link to={`/edit-student/${student.id}`} className="edit-button">
                                        <BsPencilSquare />
                                    </Link>
                                    <Link to={`/delete-student/${student.id}`} className="delete-button">
                                        <BsFillTrashFill />
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No students found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                previousLinkClassName={'prev-link'}
                nextLinkClassName={'next-link'}
            />
        </div>
    );
};

export default Dashboard;
