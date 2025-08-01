import { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import videoBusinessMeeting from '@/assets/video-business-meeting.jpg';
import videoAiDemo from '@/assets/video-ai-demo.jpg';
import videoUniversityResearch from '@/assets/video-university-research.jpg';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, thumbnail, duration, category }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation();

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    // Here you would integrate with your actual video player
    console.log(`${isPlaying ? 'Pausing' : 'Playing'} video: ${title}`);
  };

  return (
    <Card 
      ref={elementRef}
      className={`group relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Video overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            onClick={handlePlayClick}
            size="lg"
            className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </Button>
        </div>
        
        {/* Duration badge */}
        <div className="absolute top-4 right-4 bg-background/90 text-foreground px-2 py-1 rounded text-sm font-medium">
          {duration}
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Volume2 className="w-4 h-4" />
            <span>Nigerian English</span>
          </div>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
            Watch Full Video
          </Button>
        </div>
      </div>
    </Card>
  );
};

const VideoSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const videos = [
    {
      title: "ODIA AI: The Future of Nigerian Business",
      description: "Discover how our voice AI technology is transforming business operations across Nigeria, from Lagos to Abuja.",
      thumbnail: videoBusinessMeeting,
      duration: "3:45",
      category: "Business"
    },
    {
      title: "Live AI Demo: Voice Technology in Action",
      description: "Watch our multilingual AI agents handle real customer interactions in Yoruba, Hausa, Igbo, and Nigerian English.",
      thumbnail: videoAiDemo,
      duration: "5:20",
      category: "Technology"
    },
    {
      title: "Academic Partnership: Research & Innovation",
      description: "See how we're collaborating with Nigerian universities to advance AI research and develop local talent.",
      thumbnail: videoUniversityResearch,
      duration: "4:15",
      category: "Research"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See ODIA AI in <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch how our voice AI technology is revolutionizing business communications 
            across Nigeria with authentic local language support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;