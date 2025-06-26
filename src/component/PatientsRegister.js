import React, { useState } from 'react';
import axios from 'axios';

const PatientsRegister = () => {
  const [formData, setFormData] = useState({
    registrationType: 'NEW',
    date: Date(),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    PRnumber1:'',
    PRnumber2:'',
    prefix: '',
    name: '',
    fatherSpouse: '',
    sex: '',
    age: '',
    dob: '',
    maritalStatus: '',
    bloodGroup: '',
    address1: '',
    address2: '',
    location: '',
    city: '',
    state: '',
    country: '',
    religion: '',
    occupation: '',
    mobile: '',
    email: '',
    aadhar: '',
    abhaId: '',
    department: '',
    plan: '',
    pConsultant: '',
    sConsultant: '',
    secondaryDepartment: '',
    secondaryConsultant: '',
    package: '',
    referredBy: '',
    provisionalDiagnosis: '',
    isMLC: false,
    billType: '',
    discount: '',
    discountReason: '',
    paymentMode: '',
    registrationCharge: '',
    totaldiscount:'',
    netAmount: ''
  });

  const reset= () => {
  setFormData({
    registrationType: '',
    date:Date(),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    PRnumber1: '',
    PRnumber2: '',
    prefix: '',
    name: '',
    fatherSpouse: '',
    sex: '',
    age: '',
    dob: '',
    maritalStatus: '',
    bloodGroup: '',
    address1: '',
    address2: '',
    location: '',
    city: '',
    state: '',
    country: '',
    religion: '',
    occupation: '',
    mobile: '',
    email: '',
    aadhar: '',
    abhaId: '',
    department: '',
    plan: '',
    pConsultant: '',
    sConsultant: '',
    secondaryDepartment: '',
    secondaryConsultant: '',
    package: '',
    referredBy: '',
    provisionalDiagnosis: '',
    isMLC: false,
    billType: '',
    discount: '',
    discountReason: '',
    paymentMode: '',
    registrationCharge: '',
    totaldiscount: '',
    netAmount: ''
  });
};


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', formData);
      alert('Patient Registered');
      reset();
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 max-w-7xl mx-auto border border-gray-300 shadow-lg text-sm">

      <div className="mt-2 text-white bg-green-600 text-xl flex justify-between p-2 font-bold">
       <span className='ml-3'>Registration Form</span>
       </div>
       
      <div className="mt-3 grid grid-cols-1 md:grid-cols-5 gap-4">
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Registration Date</span>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-2" />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Time</span>
          <input type="time" name="time" value={formData.time} onChange={handleChange} className="border p-2" />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Registration Type
            <span className="text-red-500">*</span>
          </span>
          <select name="registrationType" value={formData.registrationType} onChange={handleChange} required className="border p-2">
            <option>NEW</option>
            <option>OLD</option>
            <option>Health Card</option>
          </select>
        </label>
        
        {formData.registrationType === 'OLD' && (
        <>
       <label className="flex flex-col">
          <span className="text-gray-700 font-medium">PR Number</span>
          <input type="text" name="time" placeholder='TYPE TO SEARCH' value={formData.PRnumber1} onChange={handleChange} className="border p-2" />
        </label>
        
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">PR number</span>
          <select name="PRnumber2" value={formData.PRnumber2} onChange={handleChange} className="border p-2">
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
         </>
        )}
       {formData.registrationType === 'Health Card' && (
        <>
            <label className="flex flex-col">
            <span className="text-gray-700 font-medium">Card Number</span>
            <input type="text" name="cardNumber"  placeholder="CARD NUMBER"
        value={formData.cardNumber || ''} onChange={handleChange} className="border p-2"/>
            </label>
        </>
        )}
    </div>

      <h3 className="mt-6 text-white bg-teal-500 p-2 font-bold">Patient Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Name<span className="text-red-500">*</span></span>
          <div className='flex gap-2'>
          <select name="prefix" value={formData.prefix} onChange={handleChange} required className="border p-2 w-2/4">
            <option value=""> Prefix</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
          </select>

          <input name="name" placeholder='TYPE YOUR NAME' value={formData.name} onChange={handleChange} required className="border p-2 w-full" />
          </div>
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Sex<span className="text-red-500">*</span></span>
          <select name="sex" value={formData.sex} onChange={handleChange} required className="border p-2">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Age (Years)<span className="text-red-500">*</span></span>
          <input name="age" value={formData.age} onChange={handleChange} required className="border p-2" />
        </label>

         <label className="flex flex-col">
          <span className="text-gray-700 font-medium">DOB</span>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border p-2" />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Father/Spouse</span>
          <input name="fatherSpouse" value={formData.fatherSpouse} onChange={handleChange} className="border p-2" />
        </label>
       
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Marital Status</span>
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="border p-2">
            <option value="">Select</option>
            <option>Married</option>
            <option>Unmarried</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Blood Group</span>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="border p-2">
            <option value="">Select</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Address 1<span className="text-red-500">*</span></span>
          <input name="address1" placeholder='FLAT/HOUSE NO, FLOOR, BUILDIN' value={formData.address1} onChange={handleChange} required className="border p-2" />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Address 2</span>
          <input name="address2" placeholder='COLONY/SOCIETY, STREET,LOCALITY/AREA' value={formData.address2} onChange={handleChange} className="border p-2" />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Location</span>
          <input name="location" placeholder='LOCALITY/AREA/TOWN' value={formData.location} onChange={handleChange} className="border p-2" />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">City<span className="text-red-500">*</span></span>
          <input name="city" value={formData.city} onChange={handleChange} required className="border p-2" />
        </label>

    
        <label className="flex flex-col">
        <span className="text-gray-700 font-medium">
            State <span className="text-red-500">*</span>
        </span>
        <select name="state" value={formData.state} onChange={handleChange} required className="border p-2">
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Delhi">Delhi</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Puducherry">Puducherry</option>
        </select>
        </label>

        <label className="flex flex-col">
        <span className="text-gray-700 font-medium">
            Country <span className="text-red-500">*</span>
        </span>
        <select name="country" value={formData.country} onChange={handleChange} required className="border p-2">
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="Russia">Russia</option>
            <option value="South Africa">South Africa</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Nepal">Nepal</option>
            <option value="Sri Lanka">Sri Lanka</option>
        </select>
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Mobile<span className="text-red-500">*</span></span>
          <input name="mobile" value={formData.mobile} onChange={handleChange} required className="border p-2" />
        </label>
        
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Email</span>
          <input name="email" value={formData.email} onChange={handleChange} className="border p-2" />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Religion</span>
          <input name="religion" value={formData.religion} onChange={handleChange} className="border p-2" />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Occupation</span>
          <input name="occupation" value={formData.occupation} onChange={handleChange} className="border p-2" />
        </label>
        
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">ABHA ID</span>
          <input name="aadhar" value={formData.aadhar} onChange={handleChange} className="border p-2" />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Adhar No.</span>
          <input name="abhaId" value={formData.abhaId} onChange={handleChange} className="border p-2" />
        </label>
      </div>

      <h3 className="mt-6 text-white bg-teal-500 p-2 font-bold">Hospital Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Department<span className="text-red-500">*</span></span>
          <select name="department" value={formData.department} onChange={handleChange} required className="border p-2">
            <option value="">Select</option>
            <option value="CARDIOLOGY">CARDIOLOGY</option>
            <option value="CASUALY">CASUALY</option>
            <option value="CHEST MEDICINE">CHEST MEDICINE</option>
            <option value="CTVS">CTVS</option>
            <option value="">DENTAL</option>
            <option value="DERMATOLOGY">DERMATOLOGY</option>
            <option value="DIABETOLOGY">DIABETOLOGY</option>
            <option value="ENDOCRINOLOGY">ENDOCRINOLOGY</option>
            <option value="ENT">ENT</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Plan<span className="text-red-500">*</span></span>
          <select name="plan" value={formData.plan} onChange={handleChange} required className="border p-2">
            <option value="">Select Plan</option>
            <option value="FHPL">FHPL</option>
            <option value="GENERAL">GENERAL</option>
            <option value="GENERAL">HERITAGE</option>
            <option value="MEDIASSIST TPA">MEDIASSIST TPA</option>
            <option value="PARAMOUNT">PARAMOUNT</option>
            <option value="RAKSHA TPA">RAKSHA TPA</option>
            <option value="WEST BENGAL POLICE(SAFEWAY TPA)">WEST BENGAL POLICE(SAFEWAY TPA)</option>
            </select>
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">P Consultant<span className="text-red-500">*</span></span>
          <select name="pConsultant" value={formData.pConsultant} onChange={handleChange} required className="border p-2">
            <option value="">Select Consultant</option>
            <option value="DR. SMARTYA PULAI">DR. SMARTYA PULAI</option>
            <option value="DR. SUDARSHAN KHASKIL">DR. SUDARSHAN KHASKIL</option>
            <option value="DR. EMO">DR. EMO</option>
        </select>
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">S Consultant</span>
          <select name="sConsultant" value={formData.sConsultant} onChange={handleChange} className="border p-2">
            <option value="">Secondary Consultant</option>
            <option value="DR. A">DR. A</option>
            <option value="DR. B">DR. B</option>
            <option value="DR. C">DR. C</option>
            </select>
        </label>
        
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Package</span>
          <input name="package" value={formData.package} onChange={handleChange} className="border p-2" />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Referred By</span>
          <input name="referredBy" value={formData.referredBy} onChange={handleChange} className="border p-2" />
        </label>
        <label className="flex flex-col md:col-span-4">
          <span className="text-gray-700 font-medium">Provisional Diagnosis</span>
          <input name="provisionalDiagnosis" value={formData.provisionalDiagnosis} onChange={handleChange} className="border p-2" />
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="isMLC" checked={formData.isMLC} onChange={handleChange} />
          <span className="text-gray-700">Is MLC Case</span>
        </label>
      </div>

      <h3 className="mt-2 text-white bg-teal-500 p-2 font-bold">Billing Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Bill Type<span className="text-red-500">*</span></span>
          <select name="billType" value={formData.billType} onChange={handleChange} className="border p-2">
            <option value="">Select</option>
            <option value="">Cash Bill</option>
            </select>
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Discount<span className="text-red-500">*</span></span>
          <div className='flex gap-2'>
          <input name="discount" placeholder='AMOUNT %' value={formData.discount} onChange={handleChange} className="border p-2" />
          <select name="discountReason" value={formData.discountReason} onChange={handleChange} className="border p-2">
            <option value="">Select Discount Reason</option>
            <option value="">Reason 1</option>
            <option value="">Reason 2</option>
        </select></div>
        </label>
        
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Payment Mode<span className="text-red-500">*</span></span>
          <select name="paymentMode" value={formData.paymentMode} onChange={handleChange} className="border p-2">
            <option>Select</option>
            <option>CASH</option>
            <option>ONLINE</option>
          </select>
        </label>
        
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Registration Charge<span className="text-red-500">*</span></span>
          <input name="registrationCharge" value={formData.registrationCharge} onChange={handleChange} className="border p-2" />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Discount<span className="text-red-500">*</span></span>
          <input name="totaldiscount" value={formData.totaldiscount} onChange={handleChange} className="border p-2" />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium">Net Amount<span className="text-red-500">*</span></span>
          <input name="netAmount" value={formData.netAmount} onChange={handleChange} className="border p-2" />
        </label>
      </div>
      
        <div className="flex justify-end gap-4 mt-6">
        <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded">Submit
        </button>

        <button type="button" onClick={reset} className="bg-zinc-800 text-white px-6 py-2 rounded">Reset</button>
        </div>
    </form>
  );
};

export default PatientsRegister;

