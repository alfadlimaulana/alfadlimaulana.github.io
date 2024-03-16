"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"

import { format } from "date-fns";
import { cn } from "../../../lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "../../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  position: z.string().min(2).max(50),
  startDate: z.date().min(new Date("2020-01-01")).max(new Date(new Date().getTime() + 24 * 60 * 60 * 1000)),
  endDate: z.date().min(new Date("2020-01-01")).nullable(),
  desc: z.string().min(2),
  jobDesc: z.array(z.object({
    desc: z.string().min(1)
  })),
  images: z.instanceof(FileList).refine((file) => file?.length > 0, "File is required."),
  link: z.object({
    github: z.string().optional(),
    live: z.string().optional(),
  }),
  techStack: z.array(z.object({
    tech: z.string().min(1)
  })),
})

function AddProject() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      position: "",
      startDate: new Date(),
      endDate: null,
      desc: "",
      jobDesc: [{desc: ""}],
      images: undefined,
      link: {
        github: "",
        live: "",
      },
      techStack: [{tech: ""}],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const { control } = form;
  const techStackFields = useFieldArray({
    control,
    name: "techStack"
  })
  const jobDescFields = useFieldArray({
    control,
    name: "techStack"
  })
  
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

                <div className="flex flex-col gap-3">
                  <FormLabel>Job Description</FormLabel>
                  {
                    jobDescFields.fields.map((item, index) => {
                      return (
                        <div key={item.id} className="flex items-stretch">
                          <div className="w-full">
                            <FormField
                              control={form.control}
                              name={`jobDesc.${index}.desc`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Textarea
                                      id="jobDesc"
                                      placeholder="Sebutkan dengan titik koma sebagai pemisah (ex: mengerjakan ...;bertanggung jawab ...)"
                                      className={`text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0 ${(index > 0 && "rounded-r-none")}`}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          { (index > 0) && 
                          <Button type="button" size="custom" onClick={() => jobDescFields.remove(index)} variant="outline" className="border-red-500 rounded-l-none px-6">
                            -
                          </Button>
                          }
                        </div>
                      )
                    })
                  }
                  <Button type="button" onClick={() => jobDescFields.append({tech: ''})} variant="default" className="self-end px-6 py-2 h-fit">
                    +
                  </Button>
                </div>

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

                <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                  <FormField
                    control={form.control}
                    name="link.github"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Link Github</FormLabel>
                        <FormControl>
                          <Input id="link.github" placeholder="Masukkan link github proyek" className="text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="link.live"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Link Website</FormLabel>
                        <FormControl>
                          <Input id="link.live" placeholder="Masukkan link deploy website" className="text-white bg-transparent focus-visible:ring-brand-yellow focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <FormLabel>Tech Stack</FormLabel>
                  {
                    techStackFields.fields.map((item, index) => {
                      return (
                        <div key={item.id} className="flex">
                          <FormField
                            control={form.control}
                            name={`techStack.${index}.tech`}
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className={`text-white bg-transparent ring-0 ring-offset-0 focus:ring-offset-1 focus:ring-brand-yellow h-full w-full ${(index > 0) && "rounded-r-none border-r-0"}`}>
                                      <SelectValue placeholder="Pilih teknologi yang digunakan" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="capitalize">
                                    <SelectItem value="react">react</SelectItem>
                                    <SelectItem value="next">next</SelectItem>
                                    <SelectItem value="laravel">laravel</SelectItem>
                                    <SelectItem value="tailwind">tailwind</SelectItem>
                                    <SelectItem value="bootstrap">bootstrap</SelectItem>
                                    <SelectItem value="typescript">typescript</SelectItem>
                                    <SelectItem value="php">php</SelectItem>
                                    <SelectItem value="codeigniter">codeigniter</SelectItem>
                                    <SelectItem value="alpine">alpine</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          { (index > 0) && 
                          <Button type="button" onClick={() => techStackFields.remove(index)} variant="outline" className="border-red-500 rounded-l-none">
                            -
                          </Button>
                          }
                        </div>
                      )
                    })
                  }
                  <Button type="button" onClick={() => techStackFields.append({tech: ''})} variant="default" className="self-end px-6 py-2 h-fit">
                    +
                  </Button>
                </div>

                <Button type="submit" variant="default" className="w-full py-6 mt-8">
                  Add Portfolio
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
