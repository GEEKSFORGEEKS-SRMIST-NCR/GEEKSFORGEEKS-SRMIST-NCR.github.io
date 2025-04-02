import { useState } from "react";
import { createClient } from '@supabase/supabase-js';
import styles from "styles/Form.module.css";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Please check your .env.local file.');
  console.error('Expected: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_KEY');
}

const supabase = createClient(supabaseUrl, supabaseKey);

const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    college_name: "",
    team_name: "",
    team_members_qty: 3,
    team_mem_1_name: "",
    team_mem_1_contact_num: "",
    team_mem_1_email_address: "",
    team_mem_1_github_link: "",
    team_mem_2_name: "",
    team_mem_2_contact_num: "",
    team_mem_2_email_address: "",
    team_mem_2_github_link: "",
    team_mem_3_name: "",
    team_mem_3_contact_num: "",
    team_mem_3_email_address: "",
    team_mem_3_github_link: "",
    team_mem_4_name: "",
    team_mem_4_contact_num: "",
    team_mem_4_email_address: "",
    team_mem_4_github_link: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.college_name.trim()) {
      tempErrors.college_name = "College name is required";
      isValid = false;
    }

    if (!formData.team_name.trim()) {
      tempErrors.team_name = "Team name is required";
      isValid = false;
    }

    if (formData.team_members_qty < 3 || formData.team_members_qty > 4) {
      tempErrors.team_members_qty = "Team must have 3-4 members";
      isValid = false;
    }

    for (let i = 1; i <= 3; i++) {
      if (!formData[`team_mem_${i}_name`].trim()) {
        tempErrors[`team_mem_${i}_name`] = "Name is required";
        isValid = false;
      }

      if (!formData[`team_mem_${i}_contact_num`].trim()) {
        tempErrors[`team_mem_${i}_contact_num`] = "Contact number is required";
        isValid = false;
      } else if (!/^[6-9]\d{9}$/.test(formData[`team_mem_${i}_contact_num`].trim())) {
        tempErrors[`team_mem_${i}_contact_num`] = "Enter a valid 10-digit phone number";
        isValid = false;
      }

      if (!formData[`team_mem_${i}_email_address`].trim()) {
        tempErrors[`team_mem_${i}_email_address`] = "Email is required";
        isValid = false;
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData[`team_mem_${i}_email_address`].trim())) {
        tempErrors[`team_mem_${i}_email_address`] = "Enter a valid email";
        isValid = false;
      }

      if (!formData[`team_mem_${i}_github_link`].trim()) {
        tempErrors[`team_mem_${i}_github_link`] = "GitHub link is required";
        isValid = false;
      } else if (!/^https:\/\/github\.com\/[a-zA-Z0-9-]+(?:\/[a-zA-Z0-9._-]+)?$/.test(formData[`team_mem_${i}_github_link`].trim())) {
        tempErrors[`team_mem_${i}_github_link`] = "Enter a valid GitHub URL";
        isValid = false;
      }
    }

    if (formData.team_mem_4_name || formData.team_mem_4_contact_num || 
        formData.team_mem_4_email_address || formData.team_mem_4_github_link) {
      
      setFormData(prev => ({...prev, team_members_qty: 4}));
      
      if (!formData.team_mem_4_name.trim()) {
        tempErrors.team_mem_4_name = "Name is required";
        isValid = false;
      }
      
      if (!formData.team_mem_4_contact_num.trim()) {
        tempErrors.team_mem_4_contact_num = "Contact number is required";
        isValid = false;
      } else if (!/^[6-9]\d{9}$/.test(formData.team_mem_4_contact_num.trim())) {
        tempErrors.team_mem_4_contact_num = "Enter a valid 10-digit phone number";
        isValid = false;
      }
      
      if (!formData.team_mem_4_email_address.trim()) {
        tempErrors.team_mem_4_email_address = "Email is required";
        isValid = false;
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.team_mem_4_email_address.trim())) {
        tempErrors.team_mem_4_email_address = "Enter a valid email";
        isValid = false;
      }
      
      if (!formData.team_mem_4_github_link.trim()) {
        tempErrors.team_mem_4_github_link = "GitHub link is required";
        isValid = false;
      } else if (!/^https:\/\/github\.com\/[a-zA-Z0-9-]+(?:\/[a-zA-Z0-9._-]+)?$/.test(formData.team_mem_4_github_link.trim())) {
        tempErrors.team_mem_4_github_link = "Enter a valid GitHub URL";
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitData = async (data) => {
    try {
      setLoading(true);
      
      console.log('Submitting data:', data);
      
      const { data: response, error } = await supabase
        .from('vuln-VANGUARD') 
        .insert([data])
        .select();

      if (error) {
        console.error('Supabase error details:', error);
        
        if (error.code === '42P01') {
          throw new Error('Table not found. Please check the table name.');
        } else {
          throw new Error(error.message || 'Failed to insert data into the database');
        }
      }

      console.log('Successfully inserted:', response);
      setSubmitted(true);
      setFormData({
        college_name: "",
        team_name: "",
        team_members_qty: 3,
        team_mem_1_name: "",
        team_mem_1_contact_num: "",
        team_mem_1_email_address: "",
        team_mem_1_github_link: "",
        team_mem_2_name: "",
        team_mem_2_contact_num: "",
        team_mem_2_email_address: "",
        team_mem_2_github_link: "",
        team_mem_3_name: "",
        team_mem_3_contact_num: "",
        team_mem_3_email_address: "",
        team_mem_3_github_link: "",
        team_mem_4_name: "",
        team_mem_4_contact_num: "",
        team_mem_4_email_address: "",
        team_mem_4_github_link: "",
      });
      
    } catch (error) {
      console.error('Error submitting form:', error.message);
      setErrors(prev => ({
        ...prev,
        submit: error.message || 'Failed to submit registration. Please try again later.'
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitData(formData);
    }
  };

  const renderTeamMemberFields = (memberNum, isRequired = true) => {
    return (
      <div className={styles.memberSection}>
        <h3>Team Member {memberNum} {isRequired ? "(Required)" : "(Optional)"}</h3>
        <div className={styles.fieldGroup}>
          <label>
            Full Name
            <input
              name={`team_mem_${memberNum}_name`}
              value={formData[`team_mem_${memberNum}_name`]}
              onChange={handleChange}
              placeholder="Enter full name"
            />
            {errors[`team_mem_${memberNum}_name`] && <span className={styles.error}>{errors[`team_mem_${memberNum}_name`]}</span>}
          </label>
        </div>

        <div className={styles.fieldGroup}>
          <label>
            Contact Number
            <input
              name={`team_mem_${memberNum}_contact_num`}
              value={formData[`team_mem_${memberNum}_contact_num`]}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              type="tel"
            />
            {errors[`team_mem_${memberNum}_contact_num`] && <span className={styles.error}>{errors[`team_mem_${memberNum}_contact_num`]}</span>}
          </label>
        </div>

        <div className={styles.fieldGroup}>
          <label>
            Email Address
            <input
              name={`team_mem_${memberNum}_email_address`}
              value={formData[`team_mem_${memberNum}_email_address`]}
              onChange={handleChange}
              placeholder="Enter email address"
              type="email"
            />
            {errors[`team_mem_${memberNum}_email_address`] && <span className={styles.error}>{errors[`team_mem_${memberNum}_email_address`]}</span>}
          </label>
        </div>

        <div className={styles.fieldGroup}>
          <label>
            GitHub Profile Link
            <input
              name={`team_mem_${memberNum}_github_link`}
              value={formData[`team_mem_${memberNum}_github_link`]}
              onChange={handleChange}
              placeholder="https://github.com/username"
            />
            {errors[`team_mem_${memberNum}_github_link`] && <span className={styles.error}>{errors[`team_mem_${memberNum}_github_link`]}</span>}
          </label>
        </div>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
        <h2>Vuln-VANGUARD Team Registration</h2>
        
        {errors.submit && <div className={styles.errorMessage}>{errors.submit}</div>}
        
        <div className={styles.fieldGroup}>
          <label>
            College Name
            <input
              name="college_name"
              value={formData.college_name}
              onChange={handleChange}
              placeholder="Enter your college name"
            />
            {errors.college_name && <span className={styles.error}>{errors.college_name}</span>}
          </label>
        </div>
        
        <div className={styles.fieldGroup}>
          <label>
            Team Name
            <input
              name="team_name"
              value={formData.team_name}
              onChange={handleChange}
              placeholder="Enter your team name"
            />
            {errors.team_name && <span className={styles.error}>{errors.team_name}</span>}
          </label>
        </div>

        {renderTeamMemberFields(1)}
        {renderTeamMemberFields(2)}
        {renderTeamMemberFields(3)}
        {renderTeamMemberFields(4, false)}

        <button type="submit" disabled={submitted || loading} className={styles.submitButton}>
          {submitted ? (
            "Registered Successfully!"
          ) : loading ? (
            "Submitting..."
          ) : (
            "Register Now!"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
