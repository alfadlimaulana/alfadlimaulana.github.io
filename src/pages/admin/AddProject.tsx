"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import { format } from "date-fns";
import { cn } from "../../../lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "../../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  position: z.string().min(2).max(50),
  startDate: z.date().min(new Date("2020-01-01")).max(new Date()),
  endDate: z.date().min(new Date("2020-01-01")).nullable(),
  desc: z.string().min(2),
  jobDesc: z.string().optional(),
  images: z.instanceof(FileList).refine((file) => file?.length > 0, "File is required."),
  //   github: z.string().optional(),
  //   live: z.string().optional(),
  //   techStack: z.string().min(2),
});

function AddProject() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      position: "",
      startDate: null,
      endDate: null,
      desc: "",
      jobDesc: "",
      images: undefined,
      //   github: "",
      //   live: "",
      //   techStack: "",
    },
  });

  // 2. Define a submit handler.
  function submitForm(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const fileRef = form.register("images");

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Tambahkan Portfolio</h2>

        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <a className="font-medium" href="index.html">
                Dashboard /
              </a>
            </li>
            <li className="font-medium text-primary">Add Project</li>
          </ol>
        </nav>
      </div>

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-brand-grey shadow-default">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
              <div className="p-6">
                <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem className="w-3/4">
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nama proyek" className="text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <FormLabel>Start Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button variant={"default"} className={cn("w-full pl-3 text-left font-normal", !field.value && "text-gray-700")}>
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem className="w-3/4">
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan posisi anda di proyek ini" className="text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <FormLabel>End Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button variant={"default"} className={cn("w-full pl-3 text-left font-normal", !field.value && "text-gray-700")}>
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="desc"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea id="desc" placeholder="Jelaskan tentang proyek ini" className="text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jobDesc"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Job Description</FormLabel>
                      <FormControl>
                        <Textarea
                          id="jobDesc"
                          placeholder="Sebutkan dengan titik koma sebagai pemisah (ex: mengerjakan ...;bertanggung jawab ...)"
                          className="text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <div className="flex justify-end gap-2 font-normal">
                  <Button variant="default" className="">
                    -
                  </Button>
                  <Button variant="default" className="">
                    +
                  </Button>
                </div> */}

                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Job Description</FormLabel>
                      <FormControl>
                        <Input type="file" className="file:bg-brand-yellow p-0 file:h-full file:px-8 text-white bg-transparent" multiple {...fileRef} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Link Github</FormLabel>
                        <FormControl>
                          <Input id="github" placeholder="Masukkan link github proyek" className="text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="live"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Link Website</FormLabel>
                        <FormControl>
                          <Input id="live" placeholder="Masukkan link deploy website" className="text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div> */}

                <Button type="submit" variant="default" className="w-full py-6">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
