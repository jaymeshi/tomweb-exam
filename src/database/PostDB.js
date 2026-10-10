import IMGR1 from "../assets/Article Images/Reports/1.png";
import IMGR2 from "../assets/Article Images/Reports/2.png";
import IMGR3 from "../assets/Article Images/Reports/3.png";
import IMGR4 from "../assets/Article Images/Reports/4.png";
import IMGB1 from "../assets/Article Images/Blogs/1.png";
import IMGB2 from "../assets/Article Images/Blogs/2.png";
import IMGB3 from "../assets/Article Images/Blogs/3.png";
import IMGB4 from "../assets/Article Images/Blogs/4.png";
import IMGS1 from "../assets/Article Images/Sports/1.png";
import IMGS2 from "../assets/Article Images/Sports/2.png";
import IMGS3 from "../assets/Article Images/Sports/3.png";
import IMGS4 from "../assets/Article Images/Sports/4.png";

// Repressents a database where the information of each post is stored
const PostDB = [
    {
        img: IMGR1,
        date: "August 21, 2023",
        title: "Mga Tomasino humakot ng pwesto sa August 2023 MTLE; UST itinanghal na fifth top-performing school",
        sub: "367 mula sa 391 na mga Tomasinong kumuha ng pagsusulit ang nakapasa dahilan upang itanghal na pang lima ang Unibersidad sa mga top-performing schools sa August 2023 MTLE.",
        tag: "Reports",
        content: ``
    },
    {
        img: IMGR2,
        date: "August 16, 2023",
        title: "Tomasino pasok sa top 10 ng kauna-unahang food tech boards",
        sub: "Mula sa 40 na mga estudyanteng nanguna sa FTLE 2023, tanging sina Caumban at isang alumna mula sa Xavier University ang pasok sa listahan na hindi nagmula sa Unibersidad ng Pilipinas.",
        tag: "Reports",
        content: ``
    },
    {
        img: IMGR3,
        date: "August 09, 2023",
        title: "Mga Tomasino nanguna sa August 2023 BLEPP; UST tinanghal na isa sa mga Top Performing-Schools",
        sub: "Pitong Tomasino ang nakasungkit ng pwesto sa August 2023 Psychometrician licensure examination habang isa naman para sa Psychology Licensure Examination.",
        tag: "Reports",
        content: ``
    },
    {
        img: IMGR4,
        date: "August 08, 2023",
        title: "Tiongco: ‘Maging totoo sa sarili, mamayagpag’",
        sub: "ICYMI: Ayon kay Tiongco, hindi kailangang itago ang totoong sarili upang mapabilang sa paaralan dahil ang pagiging totoo pati na rin ang pagtitiwala ang bubuo ng makabuluhang koneksyon sa buhay",
        tag: "Reports",
        content: ``
    },
    {
        img: IMGB1,
        date: "August 31, 2023",
        title: "Ang Agosto 2023 ay isang mabatong daan",
        sub: "Hindi kagulat-gulat ang huminto muna at huminga ngayong Agosto dahil sa sunod-sunod na mga pangyayaring may dalang kunot ng noo, tawa, at malalim na pag-iisip.",
        tag: "Blogs",
        content: ``
    },
    {
        img: IMGB2,
        date: "August 17, 2023",
        title: "Liham para sa isang batang Tomasino",
        sub: "Hindi ko muna sasabihin sa iyo kung ano ang mangyayari, pero ito lang ang ibibigay ko sa'yo: Lahat ng pagdadaanan mo ay may dahilan.",
        tag: "Blogs",
        content: ``
    },
    {
        img: IMGB3,
        date: "August 11, 2023",
        title: "Yakapin ang bawat sandali, Tomasino!: Mga payo para sa unang taon sa kolehiyo",
        sub: "Sa pagtawid sa ilalim ng arko, dalhin ang mga payong ito para sanggain ang bawat patak ng ulan at kayanin ang unang taon sa kolehiyo.Sa pagtawid sa ilalim ng arko, dalhin ang mga payong ito para sanggain ang bawat patak ng ulan at kayanin ang unang taon sa kolehiyo.",
        tag: "Blogs",
        content: ``
    },
    {
        img: IMGB4,
        date: "July 31, 2023",
        title: "‘Barbie’ celebrates and criticizes the complexities of womanhood",
        sub: "Greta Gerwig balances the pinks and pastels of Barbie Land, and the blunt grayness of a patriarchal society in one of the most anticipated films of the year.",
        tag: "Blogs",
        content: ``
    },
    {
        img: IMGS1,
        date: "September 10, 2023",
        title: "Tiger Spikers jolt Blue Eagles for V-League top seat",
        sub: "The Tiger Spikers now hold a 5-1 win-loss card while the Blue Eagles dropped to 4-1 as the V-League semi-finals nears.",
        tag: "Sports",
        content: [`The UST Tiger Spikers extended their winning streak to five games after snapping the Ateneo Blue Eagles’ unbeaten run, 25-20, 25-23, 22-25, 25-15, to hold the top seat in the V-League Collegiate Challenge, September 10, at Paco Arena in Manila.`,`
Josh Ybanez eked out another outstanding performance for his third Player of the Game nod in the tournament as he notched 23 points off 18 excellent attacks, four blocks, and one service ace, lifting the Tiger Spikers to another win.`,`
The Tiger Spikers now hold a 5-1 win-loss card while the Blue Eagles dropped to 4-1 as the semi-finals nears.`,`
UST failed to fend off Ateneo in the third set as the Blue Eagles found momentum off emphatic attacks from its front lines to force an extension.`,`
It was all Tiger Spikers from there, dominating the Blue Eagles with its crisp ball distribution and fast attacks to create a separation early in the fourth set and never look back.`,`
"Out of all the teams, they were the ones we really focused on. I dedicated time to scouting them, but during the third set, we relaxed and our effort became half-hearted," said UST head coach Odjie Mamon on his team’s third-set efforts.`,`
The Blue Eagles kept things close in the first two sets, but the Tiger Spikers stepped on the gas down the last stretches of each period to take an early 2-0 set lead.`,`
Middle blocker Rainier Flor also paced the Tiger Spikers with 13 points off 11 excellent attacks, while Gboy De Vega added 12 points.`,`
Meanwhile, the 6-foot-four rookie and former basketball player, Trevor Valera, was also a revelation down the stretch, scoring four points to contribute to the blocking and attacking departments of UST late in the last two sets.`,`
The Tiger Spikers will face the San Beda University Red Lions next Friday, September 15.—with reports from R. Maglinao`]
    },
    {
        img: IMGS2,
        date: "September 09, 2023",
        title: "Ang Liga: UST settles for another draw versus UP",
        sub: "Golden Booters’ veteran winger Chris Valderama answered back and scored the lone goal for UST right before halftime.",
        tag: "Sports",
        content: ``
    },
    {
        img: IMGS3,
        date: "September 04, 2023",
        title: "EJ Obiena bounces back; takes top podium of ISTAF Berlin",
        sub: "Following a last-spot finish of 5.60m in the recent Wanda Diamond League in Zurich, Switzerland on Thursday (Friday in Manila), the Thomasian alumnus rebounded big time with a 5.92m clear in three attempts to claim the top spot of the outdoor tournament.",
        tag: "Sports",
        content: ``
    },
    {
        img: IMGS4,
        date: "September 03, 2023",
        title: "Josh Ybañez’s monster game lifts UST past FEU for fourth V-League win",
        sub: "Ybañez was virtually unstoppable in the match, posting 33 points off 29 attacks, three blocks, and one ace, punctuated by a cross-court hit that sealed the win and a semi-final berth for UST.",
        tag: "Sports",
        content: ``
    },
];

export default PostDB