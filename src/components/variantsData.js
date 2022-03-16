export const variantsData = {
    generalVariants : {
        hidden: { y: 120, opacity: 0 },
        visible: { y: 0, opacity: 1},
        duration: { duration: 1 }
},

    headerVariants : {
        visible: { opacity: 1},
        hidden: { opacity: 0},
        duration: { duration: 0.5 }
    },

    itemsVariants : {
        onscreen: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                type: "spring",
                bounce: 0.4,
            },
        }),

        offscreen: { opacity: 0, y: 60}
    }
}
