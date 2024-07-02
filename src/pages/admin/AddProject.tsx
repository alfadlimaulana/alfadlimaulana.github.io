"use client";

import { useEffect, useState } from "react";
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

import { add, format, parse } from "date-fns";
import { cn } from "../../../lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "../../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import axios, { FormSerializerOptions } from 'axios';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  position: z.string().min(2).max(50),
  startDate: z.date().min(new Date("2020-01-01")).max(new Date(new Date().getTime() + 24 * 60 * 60 * 1000)),
  endDate: z.date().min(new Date("2020-01-01")).nullable(),
  desc: z.string().min(2),
  jobDesc: z.array(z.object({
    desc: z.string().min(1)
  })),
  images: z.union([z.instanceof(FileList), z.array(z.string())]),
  link: z.object({
    github: z.string().optional(),
    live: z.string().optional(),
  }),
  techStack: z.array(z.object({
    tech: z.string().min(1)
  })),
})

type Portfolio = z.infer<typeof formSchema>

function AddProject() {
  const navigate = useNavigate()
  const params = useParams()
  const addMode = !(params.id)
  const {state, dispatch} = useAuthContext()

  const form = useForm<Portfolio>({
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

  const { control } = form;
  const techStackFields = useFieldArray({
    control,
    name: "techStack"
  })
  const jobDescFields = useFieldArray({
    control,
    name: "jobDesc"
  })

  useEffect(() => {
    if(params.id && state.user) {
      const getData = async () => {
        try {
          const res = await axios.get(`https://portfolio-backend-3svr.onrender.com/api/projects/${params.id}`);
          // const res = await axios.get(`http://127.0.0.1:3000/api/projects/${params.id}`);
          const {_id, __v, createdAt, updatedAt, ...rest} = res.data.data
          rest.techStack = rest.techStack.map((item: {tech:string}) => ({tech: item.tech}))
          rest.jobDesc = rest.jobDesc.map((item: {desc:string}) => ({desc: item.desc}))
          rest.startDate = new Date(rest.startDate)
          rest.endDate = rest.endDate? new Date(rest.endDate) : null
          rest.link?._id && delete rest.link._id
          
          const project:Portfolio = rest
          Object.keys(project).forEach((item) => {
            const key = item as keyof typeof project
            form.setValue(key, rest[key])
          });
        } catch (error) {
          console.log(error)
        }
      }
  
      if (state.user) {
        getData()
      } else {
        navigate("/login")
      }
    }
  }, [params.id])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!state.user) {
      return
    }

    try {
      const formData = new FormData()
      const {images, ...rest} = values
      
      if (images instanceof FileList) {
        for (let i = 0; i < images.length; i++) {
          formData.append("images", images[i])
        }
      }
  
      Object.keys(rest).forEach((key) => {
        const element = rest[key as keyof typeof rest]
        if (element != null && typeof element === "object" && !Array.isArray(element)) {
          if (element instanceof Date) {
            formData.append(`${key}`, element? element.toISOString() : '')
          } else {
            Object.keys(element).forEach((elementKey) => {
              const value = element[elementKey as keyof typeof element]
              formData.append(`${key}[${elementKey}]`,  value ? value : '')
            })
          }
        } else if (Array.isArray(element)) {
          element.forEach((item, index) => {
            Object.keys(item).forEach((elementKey) => {
              formData.append(`${key}[${index}][${elementKey}]`, element[index][elementKey as keyof typeof item])
            })
          })
        } else {
          if (element) {
            formData.append(`${key}`, element)
          }
        }
      })

      if (addMode) {
        if(!state.user) {
          return
        }

        const res = await axios.post(`https://portfolio-backend-3svr.onrender.com/api/projects`, formData, {
        // const res = await axios.post(`http://127.0.0.1:3000/api/projects`, formData, {
          headers: {
            "Authorization": `Bearer ${state.user.token}`
          }
        })
        if (res.data.data) {
          navigate("/admin")
        }
      } else {
        const res = await axios.patch(`https://portfolio-backend-3svr.onrender.com/api/projects/${params.id}`, formData, {
        // const res = await axios.patch(`http://127.0.0.1:3000/api/projects/${params.id}`, formData, {
          headers: {
            "Authorization": `Bearer ${state.user.token}`
          }
        })

        if (res.data.data) {
          navigate("/admin")
        }
      }
    }catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Tambahkan Project</h2>

        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <Link className="font-medium" to="/admin">
                Dashboard /
              </Link>
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
                            <Calendar mode="single" selected={field.value ?? undefined} onSelect={field.onChange} initialFocus />
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
                  <Button type="button" onClick={() => jobDescFields.append({desc: ''})} variant="default" className="self-end px-6 py-2 h-fit">
                    +
                  </Button>
                </div>

                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Images</FormLabel>
                      <FormControl>
                        <Input type="file" className="file:bg-brand-yellow p-0 file:h-full file:px-8 text-white bg-transparent" multiple 
                          onChange={(e) => field.onChange(e.target.files)} onBlur={field.onBlur} ref={field.ref} required={addMode}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {
                  !addMode && form.getValues("images") && Array.isArray(form.getValues("images")) &&
                  <div className="mb-4 flex flex-wrap gap-2">
                      { (form.getValues("images") as string[]).map((image, index) => {
                        return <img key={index} className="h-24" src={`https://portfolio-backend-3svr.onrender.com/${image}`}></img>
                      }) }
                  </div>
                }

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
                                    <SelectItem value="express">expressJS</SelectItem>
                                    <SelectItem value="codeigniter">codeigniter</SelectItem>
                                    <SelectItem value="alpine">alpineJS</SelectItem>
                                    <SelectItem value="mysql">mySQL</SelectItem>
                                    <SelectItem value="mongo">mongoDB</SelectItem>
                                    <SelectItem value="swift">Swift</SelectItem>
                                    <SelectItem value="swiftui">SwiftUI</SelectItem>
                                    <SelectItem value="swiftdata">SwiftData</SelectItem>
                                    <SelectItem value="healthkit">HealthKit</SelectItem>
                                    <SelectItem value="avfoundation">AVFoundation</SelectItem>
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
                  {addMode? "Add": "Edit"} Project
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
