import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import Step1Personal from "./Step1Personal";
import Step2Flight from "./Step2Flight";
import Step3Confirm from "./Step3Confirm";


 function WizardForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    from: "",
    to: "",
    date: "",
    type: "Một chiều",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const next = () => setStep((prev) => Math.min(prev + 1, 3));
  const prev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Đặt vé thành công!\n" + ("Họ tên: " + formData.name) + ("\nĐịa chỉ: " + formData.address) + ("\nĐi từ: " + formData.from) + ("\nĐến: " + formData.to) + ("\nNgày khởi hành: " + formData.date) + ("\nLoại vé: " + formData.type));
  };

  const progress = (step / 3) * 100;

  return (
    <div className="d-flex justify-content-center align-items-start bg-light min-vh-100 p-4">
      <div className="bg-white p-4 rounded shadow" style={{ width: "500px" }}>
        <h3 className="text-center fw-bold mb-3">✈️ Đặt vé máy bay</h3>
        <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4" />

        {step === 1 && <Step1Personal formData={formData} handleChange={handleChange} />}
        {step === 2 && <Step2Flight formData={formData} handleChange={handleChange} />}
        {step === 3 && <Step3Confirm formData={formData} />}

        <div className="d-flex justify-content-between mt-4">
          {step > 1 ? (
            <Button variant="secondary" onClick={prev}>
              Quay lại
            </Button>
          ) : (
            <div></div>
          )}

          {step < 3 ? (
            <Button variant="primary" onClick={next}>
              Tiếp 
            </Button>
          ) : (
            <Button variant="success" onClick={handleSubmit}>
              Gửi
            </Button>
          )}
        </div>
      </div>
    </div>
  );
  }

  export default WizardForm;

