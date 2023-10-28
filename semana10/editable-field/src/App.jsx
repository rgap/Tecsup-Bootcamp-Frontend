import { useEffect, useState } from "react";
import EditableField from "./components/EditableField";
import { inputsAccount, inputsPayment } from "./form";
import { initialPaymentData, initialPersonalData } from "./values";

export default function App() {
  const [isEditablePersonal, setIsEditablePersonal] = useState(false);
  const [isEditablePayment, setIsEditablePayment] = useState(false);
  const [personalData, setPersonalData] = useState({ email: "", name: "" });
  const [personalErrors, setPersonalErrors] = useState({ email: "", name: "" });
  const [paymentData, setPaymentData] = useState({
    card: "",
    expiration: "",
    cvc: "",
  });
  const [paymentErrors, setPaymentErrors] = useState({
    card: "",
    expiration: "",
    cvc: "",
  });
  const [originalPersonalData, setOriginalPersonalData] = useState({});
  const [originalPaymentData, setOriginalPaymentData] = useState({});

  const hasErrors = (errors) => {
    return Object.values(errors).some((error) => error !== "");
  };

  const validateField = (form, field, value) => {
    // General empty field validation
    if (!value.trim()) {
      return `${field} cannot be empty`;
    }

    // Specific validation for the 'name' field
    if (field === "name" && value.trim().length < 3) {
      return "Name must be at least 3 characters long";
    }

    // Specific validation for the 'email' field
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        return "Please enter a valid email address";
      }
    }

    return "";
  };

  const handleInputChange = (form, field) => (event) => {
    const value = event.target.value;
    let error = validateField(form, field, value);

    if (form === "personal") {
      setPersonalData({ ...personalData, [field]: value });
      setPersonalErrors({ ...personalErrors, [field]: error });
    } else if (form === "payment") {
      setPaymentData({ ...paymentData, [field]: value });
      setPaymentErrors({ ...paymentErrors, [field]: error });
    }
  };

  const renderFields = (fields, isEditable, formData, formErrors, formName) => {
    return fields.map((field) => {
      let displayValue = formData[field.name];

      // Mask the value for specific payment fields when not editable
      if (formName === "payment" && !isEditable) {
        if (
          field.name === "card" ||
          field.name === "expiration" ||
          field.name === "cvc"
        ) {
          displayValue = "•••";
        }
      }

      return (
        <div key={field.name}>
          <label className="font-semibold">{field.placeholder}</label>
          <EditableField
            isEditable={isEditable}
            type={field.type}
            value={displayValue}
            onChange={handleInputChange(formName, field.name)}
            className="border border-[--color-form-border] placeholder:text-sm w-full text-center md:text-start"
            error={formErrors[field.name]}
          />
          {formErrors[field.name] && (
            <p className="text-red-500 text-xs">{formErrors[field.name]}</p>
          )}
        </div>
      );
    });
  };

  const initializeFormData = () => {
    setPersonalData({ ...initialPersonalData });
    setPaymentData({ ...initialPaymentData });
  };

  // Call the function when the component mounts
  useEffect(() => {
    initializeFormData();
  }, []);

  const handlePersonalFormSubmit = (event) => {
    event.preventDefault();
    // Check if there have been changes
    const isDataChanged = Object.keys(personalData).some(
      (key) => personalData[key] !== originalPersonalData[key]
    );

    if (isEditablePersonal && isDataChanged && !hasErrors(personalErrors)) {
      console.log("Submitting Personal Data:", personalData);
      // Add your submission logic here
    } else {
      setOriginalPersonalData({ ...personalData }); // Save current data
    }
    setIsEditablePersonal(!isEditablePersonal);
  };

  const cancelEditModePersonal = (event) => {
    event.preventDefault();
    setPersonalData(originalPersonalData); // Restore original data
    setPersonalErrors({ email: "", name: "" }); // Clear errors
    setIsEditablePersonal(!isEditablePersonal);
  };

  const handlePaymentFormSubmit = (event) => {
    event.preventDefault();
    // Check if there have been changes
    const isDataChanged = Object.keys(paymentData).some(
      (key) => paymentData[key] !== originalPaymentData[key]
    );

    if (isEditablePayment && isDataChanged && !hasErrors(personalErrors)) {
      console.log("Submitting Payment Data:", paymentData);
      // Add your submission logic here
    } else {
      setOriginalPaymentData({ ...paymentData }); // Save current data
    }
    setIsEditablePayment(!isEditablePayment);
  };

  const cancelEditModePayment = (event) => {
    event.preventDefault();
    setPaymentData(originalPaymentData); // Restore original data
    setPaymentErrors({
      card: "",
      expiration: "",
      cvc: "",
    });
    setIsEditablePayment(!isEditablePayment);
  };

  return (
    <main className="flex justify-center">
      <div>
        <h1>My account</h1>
        {/* Personal Data Form */}
        <form autoComplete="off" onSubmit={handlePersonalFormSubmit}>
          <div className="flex justify-between place-items-baseline">
            <h2>My Data</h2>
            {isEditablePersonal ? (
              <>
                <button type="submit" onClick={cancelEditModePersonal}>
                  Cancel
                </button>
                <button type="submit" disabled={hasErrors(personalErrors)}>
                  Save
                </button>
              </>
            ) : (
              <button type="submit">Change</button>
            )}
          </div>

          <hr className="mb-5" />

          <div id="personal" className="grid grid-cols gap-4">
            {renderFields(
              inputsAccount,
              isEditablePersonal,
              personalData,
              personalErrors,
              "personal"
            )}
          </div>
        </form>

        {/* Payment Data Form */}
        <form autoComplete="off" onSubmit={handlePaymentFormSubmit}>
          <div className="flex justify-between place-items-baseline">
            <h2 className="text-base mb-4 font-semibold">Payment</h2>
            {isEditablePayment ? (
              <>
                <button type="submit" onClick={cancelEditModePayment}>
                  Cancel
                </button>
                <button type="submit" disabled={hasErrors(paymentErrors)}>
                  Save
                </button>
              </>
            ) : (
              <button type="submit">Change</button>
            )}
          </div>

          <hr className="mb-5" />
          <div id="payment" className="grid grid-cols-1 gap-4">
            {renderFields(
              inputsPayment,
              isEditablePayment,
              paymentData,
              paymentErrors,
              "payment"
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
