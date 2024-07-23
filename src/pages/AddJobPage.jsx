import { useEffect, useState } from 'react'

const AddJobPage = () => {
    const [type, setType ] = useState('');
    const [title, setTitle ] = useState('');
    const [desc, setDesc ] = useState('');
    const [salary, setSalary ] = useState('');
    const [location, setLocation ] = useState('');
    const [companyName, setCompanyName ] = useState('');
    const [companyDesc, setCompanyDesc ] = useState('');
    const [companyEmail, setCompanyEmail ] = useState('');
    const [companyPhone, setCompanyPhone ] = useState('');

    const submitForm = (e) => {
      e.preventDefault();

      const newJob = {
        type, /* both same value so type is = type: type, */
        title,
        description: desc,
        salary,
        location,
        company: {
          name: companyName,
          description: desc,
          companyEmail,
          companyPhone,
        }
      }

      console.log(newJob);
    }

  return (
    <>
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Job Type *</label>
              <select
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              >
                <option value="" selected disabled>- Please select -</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Job Listing Name *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description *</label>
              <textarea
                id="description"
                name="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                required></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">Salary *</label>
              <select
                id="salary"
                name="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="border rounded w-full py-2 px-3"
                required>
                <option value="" selected disabled>- Please select -</option>
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label htmlFor="location" className='block text-gray-700 font-bold mb-2'>Location *</label>
              <input
                type='text'
                id='location'
                name='location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required           
                />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2">Company Name *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                required
                />
            </div>

            <div className="mb-4">
              <label htmlFor="company_description" className="block text-gray-700 font-bold mb-2">Company Description</label>
              <textarea
                id="company_description"
                name="company_description"
                value={companyDesc}
                onChange={(e) => setCompanyDesc(e.target.value)}
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">Contact Email *</label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2">Contact Phone</label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                onChange={(e) => setCompanyPhone(e.target.value)}
                value={companyPhone}
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default AddJobPage