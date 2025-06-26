import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const PatientsDeatils = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/patients');
      setPatients(res.data);
    } catch (err) {
      console.error('Failed to fetch patients', err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this patient?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/patients/${id}`);
      setPatients(patients.filter(p => p._id !== id));
    } catch (err) {
      console.error('Failed to delete patient', err);
      alert('Failed to delete patient');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-white text-center pb-1 pt-1 rounded-sm bg-teal-600">Registered Patients</h2>
      <div className="overflow-auto">
        <table className="min-w-full border border-collapse border-gray-300">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="border px-2 py-1">SL No.</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Visit</th>
              <th className="border px-2 py-1">Patient Name</th>
              <th className="border px-2 py-1">Age</th>
              <th className="border px-2 py-1">Sex</th>
              <th className="border px-2 py-1">Department</th>
              <th className="border px-2 py-1">Consultant</th>
              <th className="border px-2 py-1">Plan</th>
              <th className="border px-2 py-1">Amount</th>
              <th className="border px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p, i) => (
              <tr key={i} className="bg-gray-100 text-center">
                <td className="border px-2 py-1">{i+1}</td>
                <td className="border px-2 py-1">{p.date}</td>
                <td className="border px-2 py-1">{p.registrationType}</td>
                <td className="border px-2 py-1">{p.prefix} {p.name}</td>
                <td className="border px-2 py-1">{p.age}</td>
                <td className="border px-2 py-1">{p.sex}</td>
                <td className="border px-2 py-1">{p.department}</td>
                <td className="border px-2 py-1">{p.pConsultant}</td>
                <td className="border px-2 py-1">{p.plan}</td>
                <td className="border px-2 py-1">{p.netAmount}</td>
                <td className="border px-2 py-1 text-center">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-red-600 cursor-pointer"
                    title="Delete"
                    onClick={() => handleDelete(p._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsDeatils;
