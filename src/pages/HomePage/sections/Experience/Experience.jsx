import Job from "@components/Job/Job";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <motion.section
      className={styles.container}
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <SectionTitle number="02." title={t("title")} />
      <div className={styles.experiences}>
        <div className={styles.line}></div>
        <div>
          <Job
            position={t("LeadDev")}
            place={{
              name: "Doral Health & Wellness",
              website: "https://doralhw.org/",
            }}
            dates={t("LeadDevDates")}
            description={[
              "• Led the design and development of multiple enterprise-level dashboard applications for third party integrations, bringing thousands of new leads every month using the latest technologies of Node.js, Typescript, NestJS, React, Azure, Key Vault.",
              "•Designed and implemented scalable APIs and background workers to keep clinical data synchronized between multiple systems using Typescript, NestJS, Azure Event Grid and Azure Container App, handling thousands of data transfers daily.",
              "•Designed and developed automated solutions to integrate with multiple EHR and CRM systems, reducing the manual work required by 80% using Nest.js, Node.js, Typescript.",
            ]}
          />
          <Job
            position={t("FrontEndDev")}
            place={{ name: "BRINF LLC", website: "https://brinf.net/" }}
            dates={t("FrontEndDevDates")}
            description={[
              "• Developed an innovative gaming app for a client, enabling users to engage in competitions within their favorite games using the latest technology such as React, Typescript, Redux, Firebase, Push Notifications, Node.js, Express.",
              "• Converted complex UI designs into interactive and polished React applications. Using Typescript Next.js, Formik, Tailwind, and CSS modules resulting in visually stunning and user-friendly applications.",
              "• Employed performance optimizations, such as code refactoring, lazy loading, asset optimizations, and appropriate implementation of server-side rendering of several applications, elevating their Lighthouse performance scores from the 50s to the 90s.",
            ]}
          />
          <Job
            position={t("BackEndTeacher")}
            place={{ name: "ITLA", website: "https://www.itla.edu.do/" }}
            dates={t("BackEndTeacherDates")}
            description={[
              "• Develop and deliver curriculum and lesson plans that cover fundamental and advanced concepts in web development using PHP, ASP.NET, and SQL",
              "• Provide hands-on guidance and support to 20+ students in designing, developing, and deploying web applications.",
              "• Conducted pair programming sessions with students, guiding collaborative coding providing real-time feedback.",
            ]}
          />
          <Job
            position={t("WebMaster")}
            place={{
              name: t("YWAMSP"),
              website: "https://ywamsanpedro.org",
            }}
            dates="Sept 2016 - Jul 2018"
            description={[
              " • Designed and developed customized new website optimized for speed, performance, and SEO, generating 40% more traffic than prior site using Wordpress, PHP and HTML/CSS.",
              "• Developed an internal web application to store and manage geolocation pins to facilitate the access of critical information using React, Redux, Javascript, Firebase, Google Maps API.",
              "• Offer technical support to users, promptly addressing inquiries and troubleshooting issues with website functionalities to ensure a positive user experience",
            ]}
          />
        </div>
      </div>
    </motion.section>
  );
}
