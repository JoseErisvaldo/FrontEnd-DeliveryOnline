import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon, CheckCircle2Icon } from 'lucide-react';

type AlertsProps = {
  message: {
    title: string;
    description: string;
  };
  type?: 'default' | 'destructive' | null;
};

export function Alerts({ message, type }: AlertsProps) {
  return (
    <Alert variant={type}>
      {type === 'destructive' ? <AlertCircleIcon /> : <CheckCircle2Icon />}
      <AlertTitle>{message.title}</AlertTitle>
      <AlertDescription>
        <p>{message.description}</p>
      </AlertDescription>
    </Alert>
  );
}
