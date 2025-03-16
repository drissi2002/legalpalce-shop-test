import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThreeDComposition from "../ui/rotating-item";

interface LoginProps {
  onLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => (
  <div className="flex justify-center items-center w-full h-full">
    <div className="flex w-full h-full max-w-screen-xl">
      <div className="w-1/3 flex justify-center items-center h-full">
        <Card className="w-full h-full flex flex-col justify-center">
          <CardHeader className="flex justify-center items-center text-lg font-bold"> 🗝️ Login </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center text-lg text-gray-600 italic">Please log in to access the shop.</div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => onLogin(true)} className="w-full">
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="w-2/3 flex justify-center items-center h-full">
        <ThreeDComposition />
      </div>
    </div>
  </div>
);

export default Login;