import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border bg-card">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Lock className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Protected Dashboard</CardTitle>
          <CardDescription>
            Enter password to access UK Marketing AI Dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
              />
              {error && (
                <p className="text-sm text-red-500">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Access Dashboard
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
