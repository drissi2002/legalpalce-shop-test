import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Login = ({ onLogin }: { onLogin: () => void }) => (
  <Card className="w-1/3">
    <CardHeader className="text-lg font-bold" >Login</CardHeader>
    <CardContent>
      <div className="text-lg text-gray-600 italic"> Please log in to access the shop.</div>
    </CardContent>
    <CardFooter>
      <Button onClick={onLogin} className="w-full">
        Login
      </Button>
    </CardFooter>
  </Card>
);

export default Login;