import { Grid } from "@mui/material";
import SectionTitle from "../../components/titles/SectionTitle";
import AboutMe from "./AboutMe/AboutMe";
import AcademicVoyage from "./AcademicVoyage/AcademicVoyage";

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
            title: 'Education',
            component: <AcademicVoyage />,
        },
    ];

    return (
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
    );
}