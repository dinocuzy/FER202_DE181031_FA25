import React, { useState } from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import AboutForm from "./AboutForm";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
function AccountWizard() {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

    const progress = step === 1 ? 33 : step === 2 ? 67 : 100;

    return (
        <Card className="bg-dark text-light p-4 shadow-lg">
            <h4 className="text-center text-warning mb-4">Build Your Profile</h4>
            <ProgressBar now={progress} label={`${progress}%`} className="mb-4" />

            {step === 1 && <AboutForm />}
            {step === 2 && <AccountForm />}
            {step === 3 && <AddressForm />}

            <div className="d-flex justify-content-between mt-4">
                <Button
                    variant="secondary"
                    onClick={handlePrev}
                    disabled={step === 1}
                >
                    Previous
                </Button>

                {step < 3 ? (
                    <Button variant="warning" onClick={handleNext}>
                        Next
                    </Button>
                ) : (
                    <Button variant="success">Finish</Button>
                )}
            </div>
        </Card>
    );
}

export default AccountWizard;
