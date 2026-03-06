"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Upload, CheckCircle2, Send, Lock } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const formSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    abstract: z.string().min(50, "Abstract must be at least 50 characters"),
    keywords: z.string().min(3, "Add at least a few keywords separated by commas"),
    authors: z.string().min(3, "Add at least one author"),
    file: z.any().refine((files) => files?.length > 0, "PDF file is required"),
});

export default function SubmissionForm() {
    const { data: session, status } = useSession();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        if (!session) {
            toast.error("You must be logged in to submit.");
            return;
        }

        setIsSubmitting(true);
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

            toast.success("Submitted successfully!");
            setSubmitted(true);
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (status === "loading") {
        return (
            <div className="w-full flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-brand-purple border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!session) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto"
            >
                <Card className="border-none shadow-2xl bg-white/90 backdrop-blur-xl py-16 px-6 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Lock className="w-32 h-32" />
                    </div>
                    <CardContent className="text-center space-y-8 relative z-10">
                        <div className="w-20 h-20 bg-brand-purple/5 text-brand-purple rounded-3xl flex items-center justify-center mx-auto mb-4 border border-brand-purple/10">
                            <Lock className="w-10 h-10" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-3xl font-black text-slate-900">Authentication Required</h3>
                            <p className="text-slate-600 text-lg font-medium max-w-md mx-auto">
                                To protect the integrity of the research process, authors are required to be logged in before submitting manuscripts.
                            </p>
                        </div>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-7 rounded-2xl text-lg font-bold transition-all shadow-xl hover:shadow-brand-purple/20 h-auto"
                            >
                                <Link href="/auth/signin">Log In to Continue</Link>
                            </Button>
                            <Button
                                variant="outline"
                                asChild
                                className="border-slate-200 text-slate-600 px-8 py-7 rounded-2xl text-lg font-bold hover:bg-slate-50 h-auto"
                            >
                                <Link href="/auth/create-account">Create Account</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto"
            >
                <Card className="border-none shadow-2xl bg-white/90 backdrop-blur-xl py-12 px-6">
                    <CardContent className="text-center space-y-6">
                        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-14 h-14" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900">Successful Submission!</h3>
                        <p className="text-slate-600 text-lg font-medium max-w-md mx-auto">
                            Your research has been received and is currently under administrative review. You will receive an update as soon as the process is complete.
                        </p>
                        <div className="pt-6">
                            <Button
                                onClick={() => window.location.href = "/"}
                                className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-6 rounded-2xl text-lg font-bold transition-all shadow-xl hover:shadow-brand-purple/20"
                            >
                                Return to Homepage
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
        >
            <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-md overflow-hidden rounded-[32px] md:rounded-[48px]">
                <CardHeader className="bg-gradient-to-r from-brand-purple to-brand-lavender p-8 md:p-12 text-white text-center">
                    <CardTitle className="text-3xl md:text-4xl font-black tracking-tight">
                        Submit Your Research
                    </CardTitle>
                    <p className="text-white/80 font-medium mt-2">Complete the form below to initiate the peer-review process.</p>
                </CardHeader>
                <CardContent className="p-8 md:p-12">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                                <div className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-900 font-black uppercase tracking-widest text-xs">Research Title</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter the full title of your manuscript"
                                                        {...field}
                                                        className="h-14 bg-slate-50 border-slate-200 rounded-2xl focus:ring-brand-purple focus:border-brand-purple font-medium"
                                                    />
                                                </FormControl>
                                                <FormMessage className="font-bold text-red-500" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="authors"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-900 font-black uppercase tracking-widest text-xs">Contributing Authors</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="e.g., Dr. Jane Smith, Prof. Robert Chen..."
                                                        {...field}
                                                        className="h-14 bg-slate-50 border-slate-200 rounded-2xl focus:ring-brand-purple focus:border-brand-purple font-medium"
                                                    />
                                                </FormControl>
                                                <FormMessage className="font-bold text-red-500" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="keywords"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-900 font-black uppercase tracking-widest text-xs">Keywords</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="e.g., Machine Learning, Quantum Computing..."
                                                        {...field}
                                                        className="h-14 bg-slate-50 border-slate-200 rounded-2xl focus:ring-brand-purple focus:border-brand-purple font-medium"
                                                    />
                                                </FormControl>
                                                <FormMessage className="font-bold text-red-500" />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="abstract"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col h-full">
                                                <FormLabel className="text-slate-900 font-black uppercase tracking-widest text-xs">Abstract</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Provide a concise summary of your research objectives, methodology, and findings..."
                                                        className="flex-grow min-h-[220px] bg-slate-50 border-slate-200 rounded-2xl focus:ring-brand-purple focus:border-brand-purple font-medium resize-none p-5"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="font-bold text-red-500" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <FormField
                                    control={form.control}
                                    name="file"
                                    render={({ field: { onChange }, ...field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-900 font-black uppercase tracking-widest text-xs">Manuscript Upload (PDF)</FormLabel>
                                            <FormControl>
                                                <div className="group relative border-4 border-dashed border-slate-200 rounded-[32px] p-10 md:p-16 text-center hover:border-brand-purple hover:bg-indigo-50/30 transition-all cursor-pointer bg-slate-50/50">
                                                    <Input
                                                        type="file"
                                                        accept=".pdf"
                                                        onChange={(e) => onChange(e.target.files)}
                                                        className="hidden"
                                                        id="file-upload"
                                                        {...field}
                                                    />
                                                    <label htmlFor="file-upload" className="flex flex-col items-center gap-4 cursor-pointer">
                                                        <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform duration-500">
                                                            <Upload className="w-10 h-10" />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-xl font-black text-slate-900">Choose file or drag here</p>
                                                            <p className="text-slate-500 font-medium">Supporting PDF format up to 10MB</p>
                                                        </div>
                                                        {form.watch("file") && form.watch("file").length > 0 && (
                                                            <div className="mt-4 px-4 py-2 bg-brand-purple text-white rounded-full text-sm font-bold animate-in fade-in zoom-in duration-300">
                                                                File selected: {form.watch("file")[0].name}
                                                            </div>
                                                        )}
                                                    </label>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="font-bold text-red-500" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="pt-8 flex justify-center">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto px-12 py-8 md:py-9 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-[24px] text-xl font-black tracking-widest uppercase transition-all shadow-2xl hover:shadow-brand-purple/20 active:scale-[0.98] disabled:opacity-70 flex items-center gap-4"
                                >
                                    {isSubmitting ? "Processing Submission..." : "Submit Manuscript"}
                                    <Send className="w-6 h-6" />
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </motion.div>
    );
}
