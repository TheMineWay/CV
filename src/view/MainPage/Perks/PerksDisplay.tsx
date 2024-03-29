import { Card, CardContent, Chip, Grid } from "@mui/material";

export enum PerkLevel {
    basic = 0,
    intermediate = 1,
    advanced = 2,
}

export type Perk = {
    level: PerkLevel;
    name: string;
    description: string;
    imageSrc: string;
}

type Props = {
    perks: Perk[];
}

export default function PerksDisplay(props: Props) {

    const perks = props.perks;

    const colorByPerkLevel = (level: PerkLevel) => {
        switch (level) {
            case PerkLevel.advanced: return 'magenta';
            case PerkLevel.intermediate: return 'green';
            case PerkLevel.basic: return 'cyan';
        }
    }

    const textByPerkLevel = (level: PerkLevel) => {
        switch (level) {
            case PerkLevel.advanced: return 'advanced';
            case PerkLevel.intermediate: return 'intermediate';
            case PerkLevel.basic: return 'basic';
        }
    }

    return (
        <Grid
            container
            justifyContent='center'
            gap={[2, 2]}
        >
            {
                perks.map((perk) => {

                    return (
                        <Grid
                            item
                            xs={12}
                            sm={5.75}
                            md={2.75}
                        >
                            <Card
                                style={{
                                    height: '100%'
                                }}
                            >
                                <CardContent>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <img
                                            src={perk.imageSrc}
                                            style={{
                                                height: '7em'
                                            }}
                                            alt='Perk logo'
                                        />
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <h3>{perk.name}</h3>
                                        <Chip
                                            label={textByPerkLevel(perk.level)}
                                            style={{
                                                backgroundColor: colorByPerkLevel(perk.level),
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p
                                            style={{
                                                textAlign: 'justify',
                                            }}
                                        >{perk.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}