'use client'
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import {useEffect} from "react";

export default function Home() {
  const testimonials = [
    {
      text: "I can't thank Holistic Health Squad enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      image: "girl.jpg",
      name: "John Doe"
    },
    {
      text: "The wellness coaching from Holistic Health Squad has been a game changer for me. I've never felt better!",
      image: "girl.jpg",
      name: "Jane Smith"
    },
    {
      text: "I was skeptical at first, but the personalized health plan from Holistic Health Squad has made a huge difference in my life. I'm healthier, happier, and more confident than ever.",
      image: "girl.jpg",
      name: "Bob Johnson"
    },
    {
      text: "The team at Holistic Health Squad is knowledgeable, supportive, and dedicated. I'm so grateful for their guidance on my wellness journey.",
      image: "girl.jpg",
      name: "Alice Williams"
    },
    {
      text: "Thanks to Holistic Health Squad, I've achieved my weight loss goals and learned how to maintain a healthy lifestyle. I couldn't have done it without them!",
      image: "girl.jpg",
      name: "Charlie Brown"
    }
  ];
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // @ts-ignore
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
      <div>
        <div className={"main"}>
          <div className={"head bg-green-900 h-28"} id={"home"}>
            <div className={"flex items-center justify-center"}>
              <div className={"bg-green-800 w-11/12 mt-2 text-center h-10 flex justify-center"}>
                <button className={""}>
                  Join Our Personalized Telegram Group
                </button>
              </div>
            </div>
            <div className={"appbar w-full"}>
              <div className={"flex justify-around"}>
                <div className={"mt-6 font-bold"}>
                  HOLISTIC HEALTH SQUAD
                </div>
                <div className={"flex"}>
                  <div className={"flex gap-4 mt-6"}>
                    <div className={"hover:text-lime-600 transition duration-500 ease-in-out"}>
                     <a href={"#home"}>Home</a>
                    </div>
                    <div className={"hover:text-lime-600 transition duration-500 ease-in-out"}>
                      <a href={"#services"}>Services</a>
                    </div>
                    <div className={"hover:text-lime-600 transition duration-500 ease-in-out"}>
                      <a href={"#blogs"}>OurBlogs</a>
                    </div>
                    <div className={"hover:text-lime-600 transition duration-500 ease-in-out"}>
                      <a href={"#mission"}>Our Mission</a>
                    </div>
                    <div className={"hover:text-lime-600 transition duration-500 ease-in-out"}>
                      <div>
                        <a href={"#testimonials"}>Testimonials</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={"flex h-10 mt-4 ml-4"}>
                      <button className={"bg-lime-500 w-32 rounded-xl"}>
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"section1 bg-lime-100 h-108"}>
            <div className={"flex w-full"}>
              <div className={"w-3/6"}>
                <img src={"women.jpg"} className={"h-3/5 w-full rounded-br-3xl"} alt={"image"}/>
              </div>
              <div className={"h-108 w-3/6 flex flex-col pl-6 justify-center gap-4"}>
                  <div className={"text-2xl underline"}>Transform Your Health💚 with</div>
                  <div className={"font-bold text-4xl"}>Personalized Wellness <br></br>Coaching</div>
                  <div>
                    Welcome to Holistic Health, your partner in
                    achieving optimal health through personalized health & wellness coaching.
                    Our certified wellness coaches are here to guide you on your weight loss journey,
                    providing customized plans and ongoing support.
                    Start your transformation today and experience the power of personalized health & wellness coaching.
                  </div>
                  <div>
                    <button className={"bg-lime-500 w-40 h-12 rounded-xl"}>
                      Get Started Today
                    </button>
                  </div>
              </div>
            </div>
          </div>
          <div className={"section2 mt-28"} id={"services"}>
            <div className={"flex flex-col gap-2"}>
              <div className={"flex flex-col justify-center items-center gap-2"}>
                <div className={"font-bold text-4xl"}>
                  Services
                </div>
                <div>
                  Welcome to the Services Section of Holistic Health, your ultimate destination for all things nutrition
                  and wellness.
                </div>
              </div>
              <div className={"grid grid-cols-2 grid-rows-3 gap-4 ml-16 mr-16 mt-16"}>
                <div className={"border rounded-lg overflow-hidden shadow-lg"}>
                  <div className={"bg-lime-200 text-gray-700 text-lg font-bold p-4"}>Personalized Nutrition Plans</div>
                  <div className={"p-4 bg-lime-100"}>
                    Receive a tailored nutrition plan designed specifically for your body and goals.
                    Our certified nutritionists will consider your unique needs, dietary preferences,
                    and health conditions to create a plan that suits you best.
                  </div>
                </div>
                <div className={"border rounded-lg overflow-hidden shadow-lg"}>
                  <div className={"bg-lime-200 text-gray-700 text-lg font-bold p-4"}>Personalized Nutrition Plans</div>
                  <div className={"p-4 bg-lime-100"}>
                    Receive a tailored nutrition plan designed specifically for your body and goals.
                    Our certified nutritionists will consider your unique needs, dietary preferences,
                    and health conditions to create a plan that suits you best.
                  </div>
                </div>
                <div className={"border rounded-lg overflow-hidden shadow-lg"}>
                  <div className={"bg-lime-200 text-gray-700 text-lg font-bold p-4"}>Personalized Nutrition Plans</div>
                  <div className={"p-4 bg-lime-100"}>
                    Receive a tailored nutrition plan designed specifically for your body and goals.
                    Our certified nutritionists will consider your unique needs, dietary preferences,
                    and health conditions to create a plan that suits you best.
                  </div>
                </div>
                <div className={"border rounded-lg overflow-hidden shadow-lg"}>
                  <div className={"bg-lime-200 text-gray-700 text-lg font-bold p-4"}>Personalized Nutrition Plans</div>
                  <div className={"p-4 bg-lime-100"}>
                    Receive a tailored nutrition plan designed specifically for your body and goals.
                    Our certified nutritionists will consider your unique needs, dietary preferences,
                    and health conditions to create a plan that suits you best.
                  </div>
                </div>
                <div className={"border rounded-lg overflow-hidden shadow-lg"}>
                  <div className={"bg-lime-200 text-gray-700 text-lg font-bold p-4"}>Personalized Nutrition Plans</div>
                  <div className={"p-4 bg-lime-100"}>
                    Receive a tailored nutrition plan designed specifically for your body and goals.
                    Our certified nutritionists will consider your unique needs, dietary preferences,
                    and health conditions to create a plan that suits you best.
                  </div>
                </div>
                <div className={"border rounded-lg overflow-hidden shadow-lg"}>
                  <div className={"bg-lime-200 text-gray-700 text-lg font-bold p-4"}>Personalized Nutrition Plans</div>
                  <div className={"p-4 bg-lime-100"}>
                    Receive a tailored nutrition plan designed specifically for your body and goals.
                    Our certified nutritionists will consider your unique needs, dietary preferences,
                    and health conditions to create a plan that suits you best.
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className={"section3 mt-28"} id={"blogs"}>
            <div>
              <div className={"flex flex-col justify-center items-center gap-2"}>
                <div className={"font-bold text-4xl"}>
                  Blogs
                </div>
                <div>
                  Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, <br/> and wellness experts. Here's what you can expect from our blog.
                </div>
              </div>
              <div className={"grid grid-cols-2 gap-4 ml-16 mr-16 mt-16"}>
                <div className={"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"}>
                  <div className={"md:flex"}>
                    <div className={"md:flex-shrink-0"}>
                      <img className={"h-48 w-full object-cover md:w-48"} src={"girl.jpg"} alt={"An image"}/>
                    </div>
                    <div className={"p-8"}>
                      <div className={"uppercase tracking-wide text-sm text-indigo-500 font-semibold"}>Weight loss</div>
                      <button className={"block mt-1 text-lg leading-tight font-medium text-black hover:underline"}>The
                        Benefits of Hydration for Weight Loss</button>
                      <p className={"mt-2 text-gray-500"}>Discover how staying hydrated can support your weight loss
                        goals and improve overall health.</p>
                    </div>
                  </div>
                  <div className={"border-t-2 border-gray-200 px-4 py-4 sm:px-6"}>
                    <div className={"flex space-x-3"}>
                      <div className={"flex-shrink-0"}>
                        <img className={"h-10 w-10 rounded-full"} src={"girl.jpg"} alt={"An image"}/>
                      </div>
                      <div className={"min-w-0 flex-1"}>
                        <p className={"text-sm font-medium text-gray-900"}>
                          <a href="#" className={"hover:underline"}>Emily johnson</a>
                        </p>
                        <p className={"text-sm text-gray-500"}>
                          <a href="#" className={"hover:underline"}>23 May 2023</a>
                        </p>
                      </div>
                      <div className={"flex-shrink-0 self-center"}>
                        <svg className={"h-5 w-5 text-gray-400"} fill="currentColor" viewBox="0 0 20 20"
                             aria-hidden="true">
                          <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z"
                                clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"}>
                  <div className={"md:flex"}>
                    <div className={"md:flex-shrink-0"}>
                      <img className={"h-48 w-full object-cover md:w-48"} src={"girl.jpg"} alt={"An image"}/>
                    </div>
                    <div className={"p-8"}>
                      <div className={"uppercase tracking-wide text-sm text-indigo-500 font-semibold"}>Weight loss</div>
                      <button className={"block mt-1 text-lg leading-tight font-medium text-black hover:underline"}>The
                        Benefits of Hydration for Weight Loss</button>
                      <p className={"mt-2 text-gray-500"}>Discover how staying hydrated can support your weight loss
                        goals and improve overall health.</p>
                    </div>
                  </div>
                  <div className={"border-t-2 border-gray-200 px-4 py-4 sm:px-6"}>
                    <div className={"flex space-x-3"}>
                      <div className={"flex-shrink-0"}>
                        <img className={"h-10 w-10 rounded-full"} src={"girl.jpg"} alt={"An image"}/>
                      </div>
                      <div className={"min-w-0 flex-1"}>
                        <p className={"text-sm font-medium text-gray-900"}>
                          <a href="#" className={"hover:underline"}>Killian Lucas</a>
                        </p>
                        <p className={"text-sm text-gray-500"}>
                          <a href="#" className={"hover:underline"}>23 May 2023</a>
                        </p>
                      </div>
                      <div className={"flex-shrink-0 self-center"}>
                        <svg className={"h-5 w-5 text-gray-400"} fill="currentColor" viewBox="0 0 20 20"
                             aria-hidden="true">
                          <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z"
                                clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"}>
                  <div className={"md:flex"}>
                    <div className={"md:flex-shrink-0"}>
                      <img className={"h-48 w-full object-cover md:w-48"} src={"girl.jpg"} alt={"An image"}/>
                    </div>
                    <div className={"p-8"}>
                      <div className={"uppercase tracking-wide text-sm text-indigo-500 font-semibold"}>Weight loss</div>
                      <button className={"block mt-1 text-lg leading-tight font-medium text-black hover:underline"}>The
                        Benefits of Hydration for Weight Loss</button>
                      <p className={"mt-2 text-gray-500"}>Discover how staying hydrated can support your weight loss
                        goals and improve overall health.</p>
                    </div>
                  </div>
                  <div className={"border-t-2 border-gray-200 px-4 py-4 sm:px-6"}>
                    <div className={"flex space-x-3"}>
                      <div className={"flex-shrink-0"}>
                        <img className={"h-10 w-10 rounded-full"} src={"girl.jpg"} alt={"An image"}/>
                      </div>
                      <div className={"min-w-0 flex-1"}>
                        <p className={"text-sm font-medium text-gray-900"}>
                          <a href="#" className={"hover:underline"}>Killian Lucas</a>
                        </p>
                        <p className={"text-sm text-gray-500"}>
                          <a href="#" className={"hover:underline"}>23 May 2023</a>
                        </p>
                      </div>
                      <div className={"flex-shrink-0 self-center"}>
                        <svg className={"h-5 w-5 text-gray-400"} fill="currentColor" viewBox="0 0 20 20"
                             aria-hidden="true">
                          <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z"
                                clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"}>
                  <div className={"md:flex"}>
                    <div className={"md:flex-shrink-0"}>
                      <img className={"h-48 w-full object-cover md:w-48"} src={"girl.jpg"} alt={"An image"}/>
                    </div>
                    <div className={"p-8"}>
                      <div className={"uppercase tracking-wide text-sm text-indigo-500 font-semibold"}>Weight loss</div>
                      <button className={"block mt-1 text-lg leading-tight font-medium text-black hover:underline"}>The
                        Benefits of Hydration for Weight Loss</button>
                      <p className={"mt-2 text-gray-500"}>Discover how staying hydrated can support your weight loss
                        goals and improve overall health.</p>
                    </div>
                  </div>
                  <div className={"border-t-2 border-gray-200 px-4 py-4 sm:px-6"}>
                    <div className={"flex space-x-3"}>
                      <div className={"flex-shrink-0"}>
                        <img className={"h-10 w-10 rounded-full"} src={"girl.jpg"} alt={"An image"}/>
                      </div>
                      <div className={"min-w-0 flex-1"}>
                        <p className={"text-sm font-medium text-gray-900"}>
                          <a href="#" className={"hover:underline"}>Killian Lucas</a>
                        </p>
                        <p className={"text-sm text-gray-500"}>
                          <a href="#" className={"hover:underline"}>23 May 2023</a>
                        </p>
                      </div>
                      <div className={"flex-shrink-0 self-center"}>
                        <svg className={"h-5 w-5 text-gray-400"} fill="currentColor" viewBox="0 0 20 20"
                             aria-hidden="true">
                          <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z"
                                clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"section4 mt-28"} id={"mission"}>
            <div>
              <div className={"flex flex-col justify-center items-center gap-2"}>
                <div className={"font-bold text-4xl"}>
                  Our Mission
                </div>
                <div>
                  Our Mission primarily focuses on educating people about the importance of health and <br/> wellness in today’s busy life.
                  And aims to serve our clients with possible best holistic approach!
                </div>
                <div>
                  430+ happy customers
                </div>
                <div>
                  healthy lifestyle
                </div>
              </div>
            </div>
          </div>
          <div className={"section5 mt-28"} id={"testimonials"}>
            <div>
              <div className={"flex flex-col justify-center items-center gap-2"}>
                <div className={"font-bold text-4xl"}>
                  Our Testimonials
                </div>
                <div>
                  Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
                </div>
              </div>
              <div className={"flex justify-center items-center mt-4"}>
                {/*testimonal section*/}
                <Carousel className="w-full max-w-5xl">
                  <CarouselPrevious />
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className={"basis-1/3"}>
                          <div className="p-1 w-80">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <div className={"flex flex-col justify-around"}>
                                  <div className={"font-light text-sm"}>
                                    {testimonial.text}
                                  </div>
                                  <div className={"flex justify-between pt-8"}>
                                    <div>
                                      <img src={testimonial.image} className={"h-10 w-10 rounded-full"} alt={"image"}/>
                                    </div>
                                    <div className={"pt-2"}>{testimonial.name}</div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
          <div className={"section6 mt-28"}>
            <div className={"bg-lime-600 h-52 text-white"}>
  <div className={"flex justify-around pt-12"}>
    <div className={"text-2xl font-bold"}>
      Holistic Health Squad
    </div>
    <div className={"text-lg underline cursor-pointer"}>
      <a href={"#home"}>Go to top</a>
    </div>
  </div>
  <div className={"flex justify-around pt-12"}>
  <div className={"flex gap-4"}>
    <div className={"border-b-2 border-lime-500 p-2 flex items-center"}>
      <svg className={"h-5 w-5 text-white mr-2"} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 12a2 2 0 01-2-2v-1H4v1a2 2 0 01-2 2h14z" clipRule="evenodd" />
      </svg>
      nmadhusudan1633@gmail.com
    </div>
    <div className={"border-b-2 border-lime-500 p-2 flex items-center"}>
      <svg className={"h-5 w-5 text-white mr-2"} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M2 3a1 1 0 011-1h3.153a1 1 0 01.986.836l.74 4.435a4.992 4.992 0 003.386-.836L10 7l.735-1.565a4.992 4.992 0 003.386.836l.74-4.435A1 1 0 0115.847 2H19a1 1 0 011 1v1a1 1 0 01-1 1h-4.153a1 1 0 01-.986-.836l-.74-4.435a4.992 4.992 0 00-3.386.836L10 5l-.735-1.565a4.992 4.992 0 00-3.386-.836l-.74 4.435A1 1 0 012.153 5H1a1 1 0 01-1-1V3z" clipRule="evenodd" />
      </svg>
      +91 93980 36704
    </div>
    <div className={"border-b-2 border-lime-500 p-2 flex items-center"}>
      <svg className={"h-5 w-5 text-white mr-2"} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M10 2a2 2 0 00-2 2v12a2 2 0 002 2h3a2 2 0 002-2V7.414A2 2 0 0014.414 5L12 2.586A2 2 0 0010 2zm-7 6a2 2 0 012-2h3v12H5a2 2 0 01-2-2V8z" clipRule="evenodd" />
      </svg>
      HHS Telegram
    </div>
    <div className={"border-b-2 border-lime-500 p-2 flex items-center"}>
      <svg className={"h-5 w-5 text-white mr-2"} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M5 8a7 7 0 014.02-6.474 9 9 0 00-4.02 15.452A7 7 0 015 8zm2 0a5 5 0 108.708 4.132 9 9 0 01-8.708-4.132zm10.385 2.905a9 9 0 01-8.77 5.095A7 7 0 0115 8a7.002 7.002 0 012.385 2.905z" clipRule="evenodd" />
      </svg>
      Andhra Pradesh, India
    </div>
  </div>
  <div id="uniqueFooter" className={"text-sm text-center mt-2.5"}>
  © 2024 Holistic Health Squad. All rights reserved.
</div>
</div>
</div>
          </div>
        </div>
      </div>
  );
}
