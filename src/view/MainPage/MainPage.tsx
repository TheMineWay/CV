import { Grid } from "@mui/material";
import SectionTitle from "../../components/titles/SectionTitle";
import AboutMe from "./AboutMe/AboutMe";
import AcademicVoyage from "./AcademicVoyage/AcademicVoyage";
import Certifications from "./Certifications/Certifications";
import Perks from "./Perks/Perks";
import ProgrammingLanguages from "./ProgrammingLanguages/ProgrammingLanguages";
import WorkExperience from "./WorkExperience/WorkExperience";

type Section = {
    title?: string;
    component: JSX.Element;
}

export default function MainPage() {

    const parts: Section[] = [
        {
            component: <AboutMe />,
        },
        {
            title: 'Work experience',
            component: <WorkExperience />,
        },
        {
            title: 'Education',
            component: <AcademicVoyage />,
        },
        {
            title: 'Certifications',
            component: <Certifications />,
        },
        {
            title: 'Well-known',
            component: <Perks />,
        },
        {
            title: 'Programming languages',
            component: <ProgrammingLanguages />,
        },
    ];

    return (
        <>
            <Grid
                container
                spacing={4}
            >
                {
                    parts.map((part) => (
                        <Grid
                            item
                            xs={12}
                        >
                            {
                                part.title && (
                                    <SectionTitle>{part.title}</SectionTitle>
                                )
                            }
                            {part.component}
                        </Grid>
                    ))
                }
            </Grid>
            <br />
        </>
    );
}