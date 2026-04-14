import {
  ChartColumnStacked,
  CircleGauge,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { motion as Motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const viewport = { once: true, amount: 0.2 };

const EngineeringSection = () => {
  const Certainty = [
    {
      id: 1,
      icon: <ShieldCheck className="text-blue-600" />,
      title: "Zero-Trust Ready",
      description:
        "Implicit trust is a vulnerability. Our hardware enforces verification at every architectural junction.",
    },
    {
      id: 2,

      icon: <CircleGauge className="text-blue-600" />,
      title: "Line-Speed Encryption",
      description:
        "Security without compromise. Achieve 100Gbps encryption without adding a single millisecond of latency.",
    },
    {
      id: 3,
      icon: <Layers className="text-blue-600" />,
      title: "Modular Design",
      description:
        "Scale your protection as your infrastructure grows. Interlocking modules for seamless expansion.",
    },
    {
      id: 4,
      icon: <ChartColumnStacked className="text-blue-600" />,
      title: "Real-time Insight",
      description:
        "Proprietary AI chips analyze traffic patterns locally, predicting threats before they manifest.",
    },
  ];
  return (
    <section className="w-full min-h-screen bg-gray-50 flex flex-col">
      <div className="container max-w-[95%] mx-auto flex flex-col py-8 flex-1">
        {/* Header */}
        <Motion.h1
          className="text-3xl font-medium mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {" "}
          Engineering Certainty.{" "}
        </Motion.h1>

        {/* Row: flex-1 هنا بتخلي الصف يملأ باقي مساحة الـ min-h-screen */}
        <div className="flex flex-1 w-full gap-4">
          {/* Left Column (65%) */}
          {/* الـ flex بيضمن إن العمود يملأ الطول المتاح حتى لو مفيش محتوى */}
          <Motion.div
            className="w-[65%] h-fit  rounded-lg  gap-5 grid grid-cols-2 p-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {Certainty.map((cert) => (
              <Motion.div
                key={cert.id}
                variants={cardVariants}
                className=" flex flex-col shadow-xl px-5 py-8  gap-3 "
              >
                {cert.icon}
                <h1 className="text-xl font-medium">{cert.title} </h1>
                <p className="text-[16px] text-gray-400 pb-3">
                  {cert.description}
                </p>
              </Motion.div>
            ))}
          </Motion.div>

          {/* Right Column (35%) */}
          <Motion.div
            className="w-[32%] h-128 bg-[url(../../../public/Sikll.png)] text-white  justify-end items-center  bg-blend-multiply bg-blue-100 backdrop-blur-md bg-no-repeat rounded-2xl  flex flex-col p-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Motion.div
              className="w-[86%] h-[20%]  rounded-2xl flex flex-col  gap-2 bg-white/30 backdrop-blur-md "
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.4,
                delay: 0.35,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="text-[20px] font-medium ">
                "The benchmark for modern digital safety."
              </p>
              <p className="text-[18px]">— TechReview Global</p>
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
