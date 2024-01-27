import React, { useState } from "react";

function Enroll() {
  const [showAdmissionProcedure, setShowAdmissionProcedure] = useState(false);
  const [step, setStep] = useState(1);

  // Form data state
  const [formData, setFormData] = useState({
    // Step 1 fields
    firstName: "",
    lastName: "",
    dob: "",
    cityOfBirth: "",
    countryOfBirth: "",
    gradeApplyingFor: "",
    gradeInLastSchool: "",
    studentEmail: "",
    passport: "",
    nationality: "",
    address: "",
    country: "",

    // Step 2 fields
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    relationship: "",

    // Step 3 fields
    otherInfo: "",
    useOfInfoOnWebsite: false,
    consentForPhotos: false,
  });

  // Function to handle form data changes
  const handleFormDataChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log("Form submitted with data:", formData);
    // You can send the data to your backend or perform other actions as needed
  };

  // Function to navigate to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Function to navigate to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="enrollment-page">
      <div className="enrollment-nav">
        <img src="/logo.svg" alt="" />
        <h2>MIS Mariya International Schools</h2>
      </div>
      <div className="enrollment-flex">
        <div className="enrollment-container">
          {!showAdmissionProcedure && (
            <div>
              <img
                src="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03680-scaled.jpg"
                alt=""
              />
              <h1>MIS Mariya International Schools 🇸🇦</h1>
              <hr />
              <h2>Application For Admission</h2>
              <button
                type="button"
                onClick={() => setShowAdmissionProcedure(true)}
              >
                Submit Application
              </button>
              <hr />
              <h2 className="text-left">Admission Procedure</h2>
              <p>
                Families interested in sending a child to MIS should complete
                the online application form. Once applicants complete the
                application form, they will receive an e-mail regarding their
                OpenApply login information. During the application process,
                parents can stay updated on their application procedure via this
                account. Please note that there is a non-refundable application
                fee due at the time of application. The fee for each submitted
                school application is 100 Riyal.
                <br />
                <br />
                Only completed applications submitted with all the required
                documentation will be considered. The application will be
                reviewed by the appropriate principal. If admission is granted,
                MIS will enclose a school contract. In all cases, the parents or
                guardians are notified by letter of the result of their
                application.
                <br />
                <br />
                The parents have three weeks to countersign the contract and
                make arrangements for payment of fees. Parents are asked to
                carefully read about the unique MIS educational philosophy and
                the IBO curriculum to make sure we are a good fit for their
                family before enrolling.
                <br />
                <br />
                When the contract is returned, an invoice for the registration
                fee will be sent to the parents. This registration fee is a
                one-time fee used for investment in buildings and equipment.
                Once the registration fee is paid, the student is placed on the
                school roll. An invoice for tuition will be posted to the
                parents in August. Sixty percent of the total bill is due on 1
                September, forty percent on 1 January.
                <br />
                <br />
                For local families and families able to visit the campus before
                enrollment, an appointment will be made to visit the school to
                discuss the student's transfer and the programme offered.
                <br />
                <br />
                <b>Testing and Screening</b>
                <br />
                Students will be tested and screened depending on age and
                language proficiency. This may include testing in mathematics,
                Arabic, and English.
                <br />
                <br />
                <b> Probationary Admission</b>
                <br />
                In some instances, applicants may be granted probationary
                admission. For the applicant to remain at school, criteria
                documented for the specific student under consideration must be
                met. The time period for the fulfilment of the conditions will
                be determined on a case-by-case basis at the time of admission.
                The school reserves the right to insist that probationary terms
                are met.
              </p>
            </div>
          )}

          {showAdmissionProcedure && (
            <div>
              {step === 1 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "600px",
                    margin: "auto",
                  }}
                >
                  <h2>Step {step} | Basic Student Information </h2>
                  {/* Render Step 1 form */}
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleFormDataChange("firstName", e.target.value)
                    }
                  />

                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleFormDataChange("lastName", e.target.value)
                    }
                  />

                  <label htmlFor="dob">Date of Birth:</label>
                  <input
                    type="date"
                    id="dob"
                    value={formData.dob}
                    onChange={(e) =>
                      handleFormDataChange("dob", e.target.value)
                    }
                  />

                  <label htmlFor="cityOfBirth">City of Birth:</label>
                  <input
                    type="text"
                    id="cityOfBirth"
                    value={formData.cityOfBirth}
                    onChange={(e) =>
                      handleFormDataChange("cityOfBirth", e.target.value)
                    }
                  />

                  <label htmlFor="countryOfBirth">Country of Birth:</label>
                  <input
                    type="text"
                    id="countryOfBirth"
                    value={formData.countryOfBirth}
                    onChange={(e) =>
                      handleFormDataChange("countryOfBirth", e.target.value)
                    }
                  />

                  <label htmlFor="gradeApplyingFor">Applying for Grade:</label>
                  <input
                    type="text"
                    id="gradeApplyingFor"
                    value={formData.gradeApplyingFor}
                    onChange={(e) =>
                      handleFormDataChange("gradeApplyingFor", e.target.value)
                    }
                  />

                  <label htmlFor="gradeInLastSchool">
                    Grade in Last School:
                  </label>
                  <input
                    type="text"
                    id="gradeInLastSchool"
                    value={formData.gradeInLastSchool}
                    onChange={(e) =>
                      handleFormDataChange("gradeInLastSchool", e.target.value)
                    }
                  />
                  <label htmlFor="">Student Photo:</label>

                  <label htmlFor="studentPhoto" style={{ margin: "0" }}>
                    Click to Upload Student Photo
                  </label>
                  <input
                    type="file"
                    id="studentPhoto"
                    accept="image/*"
                    onChange={(e) =>
                      handleFormDataChange("studentPhoto", e.target.files[0])
                    }
                  />

                  <label htmlFor="studentEmail">Student Email:</label>
                  <input
                    type="email"
                    id="studentEmail"
                    value={formData.studentEmail}
                    onChange={(e) =>
                      handleFormDataChange("studentEmail", e.target.value)
                    }
                  />

                  <label htmlFor="passport">Passport:</label>
                  <input
                    type="text"
                    id="passport"
                    value={formData.passport}
                    onChange={(e) =>
                      handleFormDataChange("passport", e.target.value)
                    }
                  />

                  <label htmlFor="nationality">Nationality:</label>
                  <input
                    type="text"
                    id="nationality"
                    value={formData.nationality}
                    onChange={(e) =>
                      handleFormDataChange("nationality", e.target.value)
                    }
                  />

                  <label htmlFor="address">Address:</label>
                  <textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      handleFormDataChange("address", e.target.value)
                    }
                  />

                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    id="country"
                    value={formData.country}
                    onChange={(e) =>
                      handleFormDataChange("country", e.target.value)
                    }
                  />
                  <div className="next-p-btn">
                    <button type="button" onClick={nextStep}>
                      Next
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "600px",
                    margin: "auto",
                  }}
                >
                  <h2>Step {step} | Parents/Guardian Information </h2>
                  <label htmlFor="parentFirstName">Parent's First Name:</label>
                  <input
                    type="text"
                    id="parentFirstName"
                    value={formData.parentFirstName}
                    onChange={(e) =>
                      handleFormDataChange("parentFirstName", e.target.value)
                    }
                  />

                  <label htmlFor="parentLastName">Parent's Last Name:</label>
                  <input
                    type="text"
                    id="parentLastName"
                    value={formData.parentLastName}
                    onChange={(e) =>
                      handleFormDataChange("parentLastName", e.target.value)
                    }
                  />

                  <label htmlFor="parentEmail">Parent's Email:</label>
                  <input
                    type="email"
                    id="parentEmail"
                    value={formData.parentEmail}
                    onChange={(e) =>
                      handleFormDataChange("parentEmail", e.target.value)
                    }
                  />

                  <label htmlFor="relationship">Relationship to Student:</label>
                  <input
                    type="text"
                    id="relationship"
                    value={formData.relationship}
                    onChange={(e) =>
                      handleFormDataChange("relationship", e.target.value)
                    }
                  />
                  <div className="next-p-btn">
                    <button type="button" onClick={prevStep}>
                      Previous
                    </button>
                    <button type="button" onClick={nextStep}>
                      Next
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "600px",
                    margin: "auto",
                  }}
                >
                  <h2>Step {step} | Other Information </h2>
                  <label htmlFor="otherInfo">Other Information:</label>
                  <textarea
                    id="otherInfo"
                    value={formData.otherInfo}
                    onChange={(e) =>
                      handleFormDataChange("otherInfo", e.target.value)
                    }
                  />

                  <label>Use of Student Information on Website:</label>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="useInfoYes"
                      name="useOfInfo"
                      checked={formData.useOfInfoOnWebsite}
                      onChange={() =>
                        handleFormDataChange("useOfInfoOnWebsite", true)
                      }
                    />
                    <label htmlFor="useInfoYes">Yes</label>

                    <input
                      type="radio"
                      id="useInfoNo"
                      name="useOfInfo"
                      checked={!formData.useOfInfoOnWebsite}
                      onChange={() =>
                        handleFormDataChange("useOfInfoOnWebsite", false)
                      }
                    />
                    <label htmlFor="useInfoNo">No</label>
                  </div>

                  <label>Consent for Photos:</label>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="consentYes"
                      name="consentForPhotos"
                      checked={formData.consentForPhotos}
                      onChange={() =>
                        handleFormDataChange("consentForPhotos", true)
                      }
                    />
                    <label htmlFor="consentYes">Yes</label>

                    <input
                      type="radio"
                      id="consentNo"
                      name="consentForPhotos"
                      checked={!formData.consentForPhotos}
                      onChange={() =>
                        handleFormDataChange("consentForPhotos", false)
                      }
                    />
                    <label htmlFor="consentNo">No</label>
                  </div>
                  <div className="next-p-btn">
                    <button type="button" onClick={prevStep}>
                      Previous
                    </button>
                    <button type="button" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="enrollment-side">
          <h2>MIS Location</h2>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455060.52451740426!2d49.624973!3d26.993477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a0f8e7f063db%3A0x57a5a095f532dd2c!2sMariya%20International%20Schools!5e0!3m2!1sen!2sus!4v1706297865349!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{
                border: "0",
                width: "100%",
                height: "200px",
                marginTop: "20px",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h2>Address</h2>
          <p>Hi, Alyarmouk, Al Jubail 31951, Saudi Arabia</p>
          <h2>GET IN TOUCH</h2>
          <p>
         For general enquiries:<br />
            Phone: +966567334791
            <br />
            Email: info@mariyaschools.com
            <br />
           For admissions enquiries: <br />
            Email: admissions@mariyaschools.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
