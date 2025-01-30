// app/signup/page.tsx
"use client"; // Mark this as a Client Component

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import handleCredentialSignIn from "@/app/actions/authActions";
import ErrorMessageRender from "@/components/ui/error-message";
import { SignInSchema } from "@/lib/zod";


export default function SignupForm() {
  // Initialize the form
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [globalError, setGlobalError] = useState<string>("");

  // Handle form submission
  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    try{
        await handleCredentialSignIn(values);
    }catch(error){
        console.log(error);
    }
  }

  return (
    <div className="flex justify-center mt-20 min-h-auto">
      <div className="max-w-md w-full mx-auto p-6 border rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>
        <Form {...form}>
            {globalError &&  <ErrorMessageRender errorMessage={globalError}/> }
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <LoadingButton pending={form.formState.isSubmitting}/>
          </form>
        </Form>
      </div>
    </div>
  );
}
