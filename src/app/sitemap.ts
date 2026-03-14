import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tee-journal.com';

    const routes = [
        '',
        '/about',
        '/download',
        '/contact-us',
        '/faq',
        '/indexing',
        '/submit',
        '/about/aim-and-scope',
        '/about/peer-review',
        '/about/publication-ethics',
        '/about/join-as-reviewer',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
