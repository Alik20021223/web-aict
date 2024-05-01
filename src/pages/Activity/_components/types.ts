export type activityApp = {
    mainActivity: {
        describe: string
    },
    activityBlocks: blockActivity[],
}

export type blockActivity = {
    id: number,
    name: string,
    describe: string,
    imgBlocks?: {
        img_1: string,
        img_2: string,
        img_3: string
    },
    blockIcon?: string,
}


