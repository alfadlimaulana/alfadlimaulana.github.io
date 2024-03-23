import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useAuthContext } from "../hooks/useAuthContext";
import { AlertCircle } from "lucide-react"
 
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(6),
  password: z.string().min(6)
})

type UserForm = z.infer<typeof formSchema>

function Login() {
  const { login, error, loading } = useLogin()
  const navigate = useNavigate()

  const form = useForm<UserForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  })

  async function onSubmit(values: UserForm) {
    await login(values);
    navigate("/admin/")
  }
  

  return (
    <main className="grow flex items-center">
      <div className="mx-auto max-w-screen-lg w-full p-4 md:p-6 2xl:p-10">
        <div className="rounded-lg border-2 border-brand-yellow bg-brand-blue shadow-default">
          <div className="flex flex-wrap divide-x-2 py-6">
            <div className="hidden w-full xl:grid xl:w-1/2 place-items-center">
              <img src="img/illustration/login.svg" className="w-60" alt="" />
            </div>
            <div className="w-full xl:w-1/2 grid place-items-center px-6">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-3 text-2xl font-bold text-center text-brand-yellow xl:text-4xl">Sign In</h2>

                { error?.message && <Alert variant="destructive" className="mb-4 flex">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle className="font-bold">Error</AlertTitle>
                  <AlertDescription className="!pl-4">
                    { error?.message }
                  </AlertDescription>
                </Alert>
}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan username" className="text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0" {...field} />
                          </FormControl>
                          <FormMessage>
                            {error?.validation?.username}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="mt-2">
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan password" type="password" className="text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0" {...field} />
                          </FormControl>
                          <FormMessage>
                            {error?.validation?.password}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="mt-6 ml-auto w-full block font-bold" disabled={loading}>Submit</Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
