"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Download, ExternalLink, Ghost } from "lucide-react";

export default function JournalFeed() {
    const [journals, setJournals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const fetchJournals = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/journals?search=${search}`);
            const data = await res.json();
            setJournals(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchJournals();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [search]);

    return (
        <div className="space-y-6">
            <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                    placeholder="Search by title or keywords..."
                    className="pl-10 h-12 rounded-full shadow-sm bg-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    Array(6).fill(0).map((_, i) => (
                        <Card key={i} className="animate-pulse h-64 bg-gray-100" />
                    ))
                ) : journals.length > 0 ? (
                    journals.map((journal: any) => (
                        <Card key={journal._id} className="hover:shadow-lg transition-shadow border-none bg-white">
                            <CardHeader>
                                <CardTitle className="line-clamp-2 text-lg">{journal.title}</CardTitle>
                                <CardDescription className="flex flex-wrap gap-1">
                                    {journal.keywords.map((kw: string) => (
                                        <Badge key={kw} variant="secondary" className="text-xs">
                                            {kw}
                                        </Badge>
                                    ))}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    {journal.abstract}
                                </p>
                                <div className="mt-4 text-xs font-medium text-gray-500">
                                    Authors: {journal.authors.join(", ")}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center border-t pt-4">
                                <Button variant="ghost" size="sm" asChild>
                                    <a href={journal.fileUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" /> View PDF
                                    </a>
                                </Button>
                                <Button size="sm" className="rounded-full">
                                    <Download className="w-4 h-4 mr-2" /> Download
                                </Button>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-gray-400 flex flex-col items-center gap-4">
                        <Ghost className="w-16 h-16" />
                        <p className="text-xl">No journals found</p>
                    </div>
                )}
            </div>
        </div>
    );
}
