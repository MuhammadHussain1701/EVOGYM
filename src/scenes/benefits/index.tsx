import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "laborum alias unde ut. Beatae eum, dignissimos ea deleniti voluptate illum delectus!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "laborum alias unde ut. Beatae eum, dignissimos ea deleniti voluptate illum delectus!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "laborum alias unde ut. Beatae eum, dignissimos ea deleniti voluptate illum delectus!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER  */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            debitis eligendi pariatur, vitae fugit perspiciatis enim ullam
            laudantium vero recusandae, amet magni ducimus, corporis autem
            consequuntur! Nemo impedit iusto veritatis ipsa officia, numquam quo
            cumque ipsam reiciendis sunt laborum alias unde ut. Beatae eum,
            dignissimos ea deleniti voluptate illum delectus!
          </p>
        </motion.div>

        {/* BENEFITS  */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
            {/* GRAPHICS AND DESCRIPTION  */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* graphics  */}
                <img src={BenefitsPageGraphic} alt="benefits-page-graphics" className="mx-auto"/>

                {/* desctiption  */}
                <div>
                    {/* title  */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ duration: 1 }}
                             variants={{
                               hidden: { opacity: 0, x: 100 },
                               visible: { opacity: 1, x: 0 },
                             }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBER GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* description  */}
                    <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay:0.2,duration: 1 }}
                     variants={{
                       hidden: { opacity: 0, x: 100 },
                       visible: { opacity: 1, x: 0 },
                     }}
                    >
                        <p className="my-5"> 
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus sit ut labore officiis voluptatum neque optio error, aspernatur, quidem, et libero cumque hic? Consectetur, vitae iusto porro ratione tempora voluptatum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, distinctio?
                        </p>
                        <p className="mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio aperiam asperiores illo harum expedita in veritatis. Cupiditate velit labore tempora accusantium optio. Modi quia, qui itaque ut unde ex necessitatibus harum id voluptate pariatur! Eaque voluptatem hic dignissimos perspiciatis.
                        </p>
                    </motion.div>
                    {/* button  */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>

                    </div>
                </div>
            </div>

      </motion.div>
    </section>
  );
};

export default Benefits;
