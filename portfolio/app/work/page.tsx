'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { portfolio, industries, type Project } from '../../src/data/portfolio';

export default function WorkPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [imageView, setImageView] = useState<Record<string, 'desktop' | 'mobile'>>({});

  const featuredProjects = portfolio.filter(p => p.featured);
  const allProjects = portfolio.filter(p => !p.featured);

  const filteredProjects = useMemo(() => {
    let filtered = selectedIndustry === 'All' 
      ? allProjects 
      : allProjects.filter(p => p.industry === selectedIndustry);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query)) ||
        p.industry.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedIndustry, searchQuery, allProjects]);

  const toggleImageView = (projectId: string) => {
    setImageView(prev => ({
      ...prev,
      [projectId]: prev[projectId] === 'desktop' ? 'mobile' : 'desktop',
    }));
  };

  const getImageView = (project: Project) => {
    return imageView[project.id] || 'desktop';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-900">George Aguilar</a>
          <div className="flex gap-6">
            <a href="/work" className="text-gray-600 hover:text-gray-900 transition font-medium">Work</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Landing Pages & Marketing Tools
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Projects built for medical, dental, and local service businesses.
          </p>
        </div>
      </section>

      {/* Featured Section */}
      {featuredProjects.length > 0 && (
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  viewMode={getImageView(project)}
                  onToggleView={() => toggleImageView(project.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Work Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">All Projects</h2>
            
            {/* Search */}
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedIndustry === industry
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  viewMode={getImageView(project)}
                  onToggleView={() => toggleImageView(project.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No projects found matching your criteria.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 George Aguilar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">📸</div>
          <div className="text-sm font-medium">Screenshot pending</div>
          <div className="text-xs mt-1">Run: npm run shots</div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      loading="lazy"
      onError={() => setImageError(true)}
    />
  );
}

function ProjectCard({ 
  project, 
  viewMode, 
  onToggleView 
}: { 
  project: Project; 
  viewMode: 'desktop' | 'mobile';
  onToggleView: () => void;
}) {
  const imageSrc = project.images[viewMode];
  const imageAlt = `${project.title} - ${viewMode} view`;

  const isGitHub = project.url.includes('github.com');
  const showMobileToggle = !isGitHub && project.images.desktop !== project.images.mobile;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col">
      {/* Image Container */}
      <div className="relative bg-gray-100 aspect-video overflow-hidden group flex-shrink-0">
        <ProjectImage src={imageSrc} alt={imageAlt} />
        
        {/* View Toggle Overlay */}
        {showMobileToggle && (
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleView();
              }}
              className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-medium text-gray-900 hover:bg-white transition shadow-sm"
            >
              {viewMode === 'desktop' ? '📱' : '🖥️'}
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-1.5 text-gray-900">{project.title}</h3>

        {/* Objective */}
        <p className="text-xs text-gray-600 mb-2">{project.objective}</p>

        {/* Summary */}
        <p className="text-xs text-gray-500 mb-4 leading-relaxed flex-grow">{project.summary}</p>

        {/* CTA */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-gray-900 text-white px-3 py-2 rounded font-medium hover:bg-gray-800 transition text-xs"
        >
          {isGitHub ? 'View on GitHub →' : 'View Live →'}
        </a>
      </div>
    </div>
  );
}

