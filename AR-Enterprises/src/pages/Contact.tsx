import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyT4m_mmyLpVKf-LCNcvU7eNEND9m5e22VIWtuutu9j5GoAxe3KoJ8eoxX4KwpB7TR0/exec";


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });


  const [submitting, setSubmitting] = useState(false);



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setSubmitting(true);


    try {

      await fetch(
        SCRIPT_URL,
        {
          method: "POST",
          body: JSON.stringify(formData)
        }
      );


      alert("Thank you! Your inquiry has been submitted successfully.");


      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });


    } catch(error) {

      console.error(error);

      alert("Something went wrong. Please try again.");

    }


    setSubmitting(false);

  };



  const clients = [
    "SINAI ENGINEERING (SINAI)",
    "KLEEN GREEN TECHNOLOGIES",
    "ALFA PLAST",
    "CINAI AUTOTECH PRIVATE LIMITED",
    "AQUATECH SYSTEMS",
    "KALPTECH",
  ];



  return (
    <div className="flex flex-col w-full">


      {/* Header */}

      <section className="bg-muted/30 pt-16 md:pt-20 pb-12 md:pb-16 border-b border-border">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">


          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
          >
            Start a Conversation
          </motion.h1>


          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6,delay:0.1}}
          >
            Whether you're looking to hire leadership talent or transform your HR function — we'd love to connect.
          </motion.p>


        </div>

      </section>





      {/* Form Section */}


      <section className="py-14 md:py-20">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">


          <div className="grid lg:grid-cols-2 gap-10 md:gap-14">



            {/* FORM */}


            <motion.div
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.6}}
            >


            <div className="bg-card p-5 sm:p-7 md:p-8 rounded-xl border border-border shadow-sm">


              <h2 className="text-xl sm:text-2xl font-serif font-bold mb-6">
                Send a Message
              </h2>



              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >



              {/* Name */}

              <div className="space-y-2">

              <label className="text-sm font-medium">
                Full Name
              </label>

              <input

                type="text"

                required

                value={formData.name}

                onChange={(e)=>
                  setFormData({
                    ...formData,
                    name:e.target.value
                  })
                }

                className="flex h-12 w-full rounded-md border px-3"

                placeholder="John Doe"

              />

              </div>





              {/* Email */}


              <div className="space-y-2">

              <label className="text-sm font-medium">
                Email
              </label>


              <input

                type="email"

                required

                value={formData.email}

                onChange={(e)=>
                  setFormData({
                    ...formData,
                    email:e.target.value
                  })
                }

                className="flex h-12 w-full rounded-md border px-3"

                placeholder="john@example.com"

              />


              </div>






              {/* Phone */}


              <div className="space-y-2">


              <label className="text-sm font-medium">
                Phone
              </label>
              <input
              type="tel"
              required
              value={formData.phone}

              onChange={(e)=>
              setFormData({
              ...formData,
              phone:e.target.value
              })
             }

              className="flex h-12 w-full rounded-md border px-3"

              placeholder="+91 XXXXX XXXXX"

              />

              </div>






              {/* Company */}


              <div className="space-y-2">


              <label className="text-sm font-medium">
                Company
              </label>


              <input

                type="text"

                value={formData.company}
                onChange={(e)=>
                  setFormData({
                    ...formData,
                    company:e.target.value
                  })
                }


                className="flex h-12 w-full rounded-md border px-3"

                placeholder="Organization Name"

              />


              </div>







              {/* Service */}

             <div className="space-y-2">

             <label className="text-sm font-medium">
              Service Needed
             </label>

             <select
             required
             value={formData.service}
             onChange={(e) =>
             setFormData({
             ...formData,
              service: e.target.value
             })
             }
             className="flex h-12 w-full rounded-md border px-3 bg-white text-black dark:bg-black dark:text-white dark:border-gray-700"
             >

             <option 
             value="" 
             className="bg-white text-black dark:bg-black dark:text-white"
             >
             Select an option
             </option>

             <option className="bg-white text-black dark:bg-black dark:text-white">
             Executive Search
             </option>

             <option className="bg-white text-black dark:bg-black dark:text-white">
             Board Services
             </option>

             <option className="bg-white text-black dark:bg-black dark:text-white">
             HR Advisory
             </option>

             <option className="bg-white text-black dark:bg-black dark:text-white">
             Global Talent Sourcing
             </option>

             <option className="bg-white text-black dark:bg-black dark:text-white">
              Other
             </option>

              </select>

              </div>
              {/* Message */}
              <div className="space-y-2">

              <label className="text-sm font-medium">
              Message
             </label>
             <textarea
             rows={5}
             value={formData.message}
             onChange={(e) =>
             setFormData({
             ...formData,
             message: e.target.value
             })

             }
             className="w-full rounded-md border px-3 py-3 bg-white text-black dark:bg-black dark:text-white dark:border-gray-700"
             placeholder="How can we help you?"
              />

              </div>
              <button

                type="submit"

                disabled={submitting}

                className="w-full flex items-center justify-center gap-2 rounded-sm bg-primary text-primary-foreground min-h-[52px]"

              >

              {submitting ? "Sending..." : "Send Inquiry"}

              <Send className="w-4 h-4"/>


              </button>



              </form>


            </div>


            </motion.div>


            {/* CONTACT DETAILS */}


            <motion.div

              className="flex flex-col gap-8"

              initial={{opacity:0,y:20}}

              animate={{opacity:1,y:0}}

              transition={{duration:0.6}}

            >


            <h2 className="text-xl sm:text-2xl font-serif font-bold">
              Direct Contact
            </h2>



            <div className="space-y-6">


            <div className="flex gap-4">

            <Phone/>

            <div>

            <p className="font-bold">
              Phone
            </p>

            <a href="tel:+918888833359">
              +91 88888 33359
            </a>

            </div>


            </div>





            <div className="flex gap-4">

            <Mail/>

            <div>

            <p className="font-bold">
              Email
            </p>


            <a href="mailto:sunil.kale400@gmail.com">
              sunil.kale400@gmail.com
            </a>

            </div>

            </div>






            <div className="flex gap-4">


            <MapPin/>


            <div>

            <p className="font-bold">
              Office
            </p>


            <p>
            Shop No. 4, Behind Vignaharta Medical Shop,
            <br/>
            Pimpri, Pune - 411017
            </p>


            </div>


            </div>


            </div>



            </motion.div>



          </div>

        </div>


      </section>






      {/* Clientele */}


      <section className="py-16 bg-card border-t border-border">


      <div className="container mx-auto px-4 max-w-6xl">


      <h2 className="text-3xl font-serif font-bold text-center mb-10">
        Our Esteemed Clientele
      </h2>



      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">


      {clients.map((client,index)=>(

      <div
      key={index}
      className="border rounded-lg p-6 text-center font-bold"
      >

      {client}

      </div>

      ))}


      </div>


      </div>


      </section>



    </div>
  );
}