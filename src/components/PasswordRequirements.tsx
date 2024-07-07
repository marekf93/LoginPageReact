import React from "react";

interface PasswordRequirementsProps {
  password: string;
}

const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({
  password,
}) => {
  const [passwordRequirements, setPasswordRequirements] = React.useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  React.useEffect(() => {
    checkPasswordRequirements(password);
  }, [password]);

  const checkPasswordRequirements = (password: string) => {
    setPasswordRequirements({
      length: password.length >= 8 && password.length <= 64,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password),
    });
  };

  return (
    <div className="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
      {[
        { text: "8 - 64 characters", check: passwordRequirements.length },
        { text: "One uppercase letter", check: passwordRequirements.uppercase },
        { text: "One lowercase letter", check: passwordRequirements.lowercase },
        { text: "One number", check: passwordRequirements.number },
        {
          text: "One special character (e.g., ! @ # $ % ^ & *)",
          check: passwordRequirements.special,
        },
      ].map((requirement, index) => (
        <div
          key={index}
          className="self-stretch justify-start items-center gap-3 inline-flex"
        >
          <div className="w-5 h-5 relative">
            <img
              src={
                requirement.check
                  ? "/checkbox-circle-fill-green.svg"
                  : "/checkbox-circle-fill.svg"
              }
              alt="Checkbox"
              className="w-full h-full"
            />
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
            <div className="self-stretch text-neutral-600 text-xs font-normal font-['Noto Sans'] leading-none">
              {requirement.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PasswordRequirements;
