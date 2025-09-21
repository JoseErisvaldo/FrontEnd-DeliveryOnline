import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react";

type AlertsProps = {
  message: {
    title: string;
    description: string;
  };
  type?: "default" | "destructive" | null;
};

export function Alerts({ message, type }: AlertsProps) {
  return (
    <Alert variant={type}>
      <AlertCircleIcon />
      <AlertTitle>{message.title}</AlertTitle>
      <AlertDescription>
        <p>{message.description}</p>
      </AlertDescription>
    </Alert>
  );
}
