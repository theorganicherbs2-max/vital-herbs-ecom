import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Lost 8 kg in just 30 days! The combo pack is amazing and Reema's guidance was perfect.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Rahul Gupta", 
      location: "Delhi",
      text: "Finally found something that works! No side effects, completely natural. Highly recommended!",
      rating: 5,
      image: "👨‍💻"
    },
    {
      name: "Anita Patel",
      location: "Bangalore", 
      text: "My energy levels are through the roof! Lost 6 kg and feeling more confident than ever.",
      rating: 5,
      image: "👩‍⚕️"
    }
  ];

  return (
    <section className="py-16 bg-organic-green-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-organic-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied customers who transformed their lives
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-card-organic">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{testimonial.image}</span>
                <div>
                  <h3 className="font-semibold text-organic-dark">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-organic-warning text-organic-warning" />
                ))}
              </div>
              
              <p className="text-organic-dark italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;