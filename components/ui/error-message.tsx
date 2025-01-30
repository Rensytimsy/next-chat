import { Alert, AlertDescription, AlertTitle } from "./alert";
import { AlertCircle } from "lucide-react";

export default function ErrorMessageRender({ errorMessage }: { errorMessage: string }) {
  return (
    <div>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>!Opps</AlertTitle>
        <AlertDescription>
           {errorMessage}
        </AlertDescription>
      </Alert>
    </div>
  );
}
