"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" }
  });

  const onSubmit = (data: LoginInput) => {
    console.log("Login payload", data);
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      <h1 className="text-3xl font-semibold">Welcome back</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="glass space-y-3 rounded-2xl p-5">
        <Input placeholder="Email" {...form.register("email")} />
        <Input placeholder="Password" type="password" {...form.register("password")} />
        <Button className="w-full" type="submit">
          Login
        </Button>
        <Button className="w-full" variant="outline" type="button">
          Continue with Google
        </Button>
      </form>
      <div className="text-sm text-white/80">
        <Link href="/auth/forgot-password">Forgot password?</Link> | <Link href="/auth/register">Create account</Link>
      </div>
    </div>
  );
}
