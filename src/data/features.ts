// This section is for the landing page features

const listOfFeatures = [
    {
        title: "Daily Streaks",
        description:
            "Stay on top of the skills you want to practice on a daily basis",
        imagePath: "/svg/daily_streaks.svg",
        bentoType: "a",
    },
    {
        title: "Technical Interview",
        description:
            "Follow the NeetCode 150 guideline on. Add new questions to master key data structures and algorithms",
        imagePath: "/svg/technical_interview.svg",
        bentoType: "a",
    },
    {
        title: "Flash Cards",
        description:
            "Memorize both technical knowledge and soft skill interview questions.",
        imagePath: "/svg/flashcard.svg",
        bentoType: "a",
    },
    {
        title: "Job Tracking Dashboard",
        description:
            "Organized and dedicated dashboard. Customize and update the progress for each job status.",
        imagePath: "/svg/jobtracking.svg",
        bentoType: "b-w", // type: b wide
    },
    {
        title: "Brushing Up",
        description:
            "Brush up previous learned material within flashcards, and completed technical interview questions with a daily quiz",
        imagePath: "/svg/brushup.svg",
        bentoType: "b-s", // type: b short
    },
];

export default listOfFeatures;

// class Feature {
//     public title: string;
//     public description: string;
//     public imagePath: string;
//     public bentoType: Number;

//     constructor(
//         title: string,
//         description: string,
//         imagePath: string,
//         bentoType: Number
//     ) {
//         this.title = title;
//         this.description = description;
//         this.imagePath = imagePath;
//         this.bentoType = bentoType;
//     }
// }

// const features: Feature[] = [];

// listOfFeatures.forEach((feature) => {
//     features.push(
//         new Feature(
//             feature.title,
//             feature.description,
//             feature.imagePath,
//             feature.bentoType
//         )
//     );
// });

// export default features;
