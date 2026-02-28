"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Upload, ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    abstract: z.string().min(50, "Abstract must be at least 50 characters"),
    keywords: z.string().min(3, "Add at least a few keywords separated by commas"),
    authors: z.string().min(3, "Add at least one author"),
    file: z.any().refine((files) => files?.length > 0, "PDF file is required"),
});

export default function SubmissionForm() {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            abstract: "",
            keywords: "",
            authors: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("abstract", values.abstract);
        formData.append("keywords", values.keywords);
        formData.append("authors", values.authors);
        formData.append("file", values.file[0]);

        try {
            const res = await fetch("/api/journals", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Upload failed");

            toast.success("Journal submitted successfully!");
            setStep(4); // Success step
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    const nextStep = async () => {
        let fields: any[] = [];
        if (step === 1) fields = ["title", "abstract"];
        if (step === 2) fields = ["keywords", "authors"];

        const isValid = await form.trigger(fields as any);
        if (isValid) setStep((s) => s + 1);
    };

    const prevStep = () => setStep((s) => s - 1);

    return (
        <Card className="max-w-2xl mx-auto border-none shadow-2xl bg-white/80 backdrop-blur-md">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Submit Your Research
                </CardTitle>
                <Progress value={(step / totalSteps) * 100} className="h-2" />
            </CardHeader>
            <CardContent className="mt-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Journal Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter the full title of your research" {...field} className="bg-white/50" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="abstract"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Abstract</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Brief summary of your work..." className="h-32 bg-white/50" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <FormField
                                        control={form.control}
                                        name="keywords"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Keywords (comma separated)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="AI, Machine Learning, Physics..." {...field} className="bg-white/50" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="authors"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Authors List</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe, Jane Smith..." {...field} className="bg-white/50" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <FormField
                                        control={form.control}
                                        name="file"
                                        render={({ field: { onChange }, ...field }) => (
                                            <FormItem>
                                                <FormLabel>Upload Research PDF</FormLabel>
                                                <FormControl>
                                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors cursor-pointer bg-white/50">
                                                        <Input
                                                            type="file"
                                                            accept=".pdf"
                                                            onChange={(e) => onChange(e.target.files)}
                                                            className="hidden"
                                                            id="file-upload"
                                                            {...field}
                                                        />
                                                        <label htmlFor="file-upload" className="flex flex-col items-center gap-2 cursor-pointer">
                                                            <Upload className="w-12 h-12 text-blue-500" />
                                                            <span className="text-gray-600">Click to upload or drag and drop</span>
                                                            <span className="text-xs text-gray-400">PDF only (max 10MB)</span>
                                                        </label>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12 space-y-4"
                                >
                                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
                                    <h3 className="text-2xl font-bold">Successful Submission!</h3>
                                    <p className="text-gray-600">Your journal is being reviewed by the administration. You will be notified once it's approved.</p>
                                    <Button onClick={() => window.location.href = "/feed"} variant="outline">
                                        View Public Feed
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {step <= 3 && (
                            <CardFooter className="px-0 flex justify-between">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={prevStep}
                                    disabled={step === 1}
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                                </Button>
                                {step < 3 ? (
                                    <Button type="button" onClick={nextStep}>
                                        Next <ChevronRight className="w-4 h-4 ml-2" />
                                    </Button>
                                ) : (
                                    <Button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                                        Submit Journal
                                    </Button>
                                )}
                            </CardFooter>
                        )}
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
