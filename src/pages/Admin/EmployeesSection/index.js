import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import './styles.css';

function EmployeesSection({ id }) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEmployees = async () => {
    setLoading(true);
    const { data } = await api.get(`/agencies/${id}/employees`);
    setEmployees(data);
    setLoading(false);
  };

  useEffect(() => {
    loadEmployees();
  }, [id]);

  return loading ? (
    <BounceLoader
      color="#673ab7"
      sizeUnit="px"
      size="100"
    />
  ) : (
    <article id="employees">
      <Link to="/register" id="add">
        <p style={{ color: '#fff' }}>
          <i style={{ fontSize: '96px' }} className="material-icons">add</i>
        </p>
      </Link>
      {
        employees.map((employee) => (
          <div className="employee">
            <div className="top">
              <img src={`http://localhost:3333/files/${employee.filename}`} alt={employee.name} />
              <h5>{employee.name}</h5>
            </div>
            <p>{`E-mail: ${employee.email}`}</p>
            <p>{`Nascimento: ${employee.dateOfBirth}`}</p>
          </div>
        ))
      }
    </article>
  );
}

export default EmployeesSection;
