
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CaptchaProps {
  onVerify: () => void;
}

export function SimpleCaptcha({ onVerify }: CaptchaProps) {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  // Generate a simple math problem or random string
  const generateCaptcha = () => {
    const operators = ['+', '-'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let num1, num2;

    if (operator === '+') {
      num1 = Math.floor(Math.random() * 10);
      num2 = Math.floor(Math.random() * 10);
    } else {
      num1 = Math.floor(Math.random() * 10) + 10;
      num2 = Math.floor(Math.random() * num1);
    }

    const problem = `${num1} ${operator} ${num2}`;
    const solution = operator === '+' ? num1 + num2 : num1 - num2;
    
    setCaptchaText(problem);
    return solution.toString();
  };

  const [captchaSolution, setCaptchaSolution] = useState(() => generateCaptcha());

  useEffect(() => {
    // Reset verification when component mounts or resets
    setIsVerified(false);
    setCaptchaSolution(generateCaptcha());
  }, []);

  const handleVerify = () => {
    if (userInput === captchaSolution) {
      setIsVerified(true);
      setError(false);
      onVerify();
    } else {
      setError(true);
      setCaptchaSolution(generateCaptcha());
      setUserInput('');
    }
  };

  return (
    <div className="w-full">
      {!isVerified ? (
        <div className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="captcha">Please solve this simple problem:</Label>
            <div className="bg-muted p-2 rounded-md text-center font-medium">{captchaText} = ?</div>
          </div>
          <div className="space-y-2">
            <Input
              id="captcha"
              type="text"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
                setError(false);
              }}
              placeholder="Enter your answer"
              className={error ? "border-destructive" : ""}
            />
            {error && <p className="text-destructive text-sm">Incorrect answer, please try again.</p>}
          </div>
          <Button onClick={handleVerify} className="w-full">Verify</Button>
        </div>
      ) : (
        <div className="text-center text-green-600">Verified!</div>
      )}
    </div>
  );
}
