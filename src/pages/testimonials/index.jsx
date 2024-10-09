import { Star } from "lucide-react";

const Testimonials = () => {

  const testimonials = [
    {
      name: "John Ferguson",
      message: "BookVault has completely transformed the way I manage my personal library. It's intuitive and easy to use!",
      image: "/src/assets/images/test.jpg", 
      rating:5
    },
    {
      name: "Leah Moe",
      message: "I love how responsive and clean the design is. I can manage my books on my phone without any hassle.",
      image: "/src/assets/images/test1.jpg", 
      rating: 4
    },
    {
      name: "Alex Johnson",
      message: "The ability to track my reading status has helped me stay organized with all my reading goals.",
      image: "https://randomuser.me/api/portraits/men/2.jpg", 
      rating: 4
    },
    {
      name: "Emily White",
      message: "Great app for book lovers! The interface is simple, and I can keep all my book details in one place.",
      image: "/src/assets/images/test3.jpg", 
      rating: 5
    },
  ];

  return (
    <div className="bg-blue-400 h-[679px] ">
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-10 mt-10 text-center ">What Our Users Say</h2>

      {/* Display testimonials with images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4  rounded-lg shadow-lg flex h-[160px]">
            {/* User image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-32 h-32 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              
              <p className="text-gray-700">{testimonial.message}</p>

              <div className="flex mt-4 justify-end">
              
              {Array.from({ length: 5 }, (v, i) => (
                <Star
                  key={i}
                  fill={i < testimonial.rating ? ' gold' : 'gray'} 
                  className="w-6 h-6 object-cover"
                  style={{ stroke: 'none' }}
                />
              ))}
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
