export const IS_PRODUCTION = true;

export const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const TOP_LEVEL = LEVELS.length + 1;
export const LEVEL_POINTS = [
    0, 5000, 25000, 100000, 1000000, 2000000, 10000000, 50000000, 100000000,
];

export const DAILY_REWARD_LIST = [
    { point: 500, mystery_box: 0, boosts: 0 },
    { point: 1000, mystery_box: 0, boosts: 0 },
    { point: 1500, mystery_box: 0, boosts: 0 },
    { point: 2000, mystery_box: 0, boosts: 0 },
    { point: 2500, mystery_box: 0, boosts: 0 },
    { point: 3000, mystery_box: 0, boosts: 0 },
    { point: 3500, mystery_box: 0, boosts: 0 },
    { point: 4000, mystery_box: 0, boosts: 0 },
    { point: 4500, mystery_box: 0, boosts: 0 },
    { point: 5000, mystery_box: 0, boosts: 0 },
    { point: 5500, mystery_box: 0, boosts: 0 },
    { point: 6000, mystery_box: 0, boosts: 0 },
];

export const MAINNET_RPC_ENDPOINT =
    "https://rpc.shyft.to?api_key=PxS3KZVzhndyCMWb";

export const TG_CHANNEL_TASK_NAME = "tg-channel";
export const TG_CHANNEL_TASK_POINT = 5000;
export const TG_CHANNEL_LINK = "https://t.me/pupilz404";

export const CHANNEL_TASKS = [
    {
        name: "x-channel",
        point: 10000,
        link: "https://x.com/pupilz404",
        description: 'Follow Amethyst on X',
    },
];

export const INVITE_TASK_NAME = "invite-task";
export const INVITE_TASK_POINT = 25000;

export const INVITE_TASK_NAME_4 = "invite-task-4";
export const INVITE_TASK_POINT_4 = 250000;

export const AIRDROP_TASK_NAME = "airdrop-task";

export const FARMING_SECONDS = 86400;
export const POINT_PER_FARMING = 10000;

export const GAME_DATE = [
    {
        title: "Flappy Bird",
        link: "/flappy-bird",
        backgroundImage: "/images/slider/flappy_bird.png",
        overlayImagePrimary: "/images/slider/fpap_1.svg",
        overlayImagePrimaryClasses: "absolute -top-4 -left-8 w-14 h-14",
        overlayImageSecondary: "/images/slider/fpap_2.svg",
        overlayImageSecondaryClasses:
            "absolute -right-6 top-1/2 -translate-y-1/2 w-16 h-16",
        colors: {
            gradient: "bg-gradient-to-r from-green-500 via-green-600 to-green-700",
        },
    },
];

export const BACKEND_URL = IS_PRODUCTION
    ? "https://api.whyprotocol.com"
    : "https://api.whyprotocol.com"
export const FRONTEND_URL = IS_PRODUCTION
    ? "https://miniapp.whyprotocol.com"
    : "http://localhost:5173";
export const FRONTEND_DOMAIN = IS_PRODUCTION
    ? "miniapp.whyprotocol.com"
    : "localhost:5173";
