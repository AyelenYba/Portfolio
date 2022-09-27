export const variantsData = {
    generalVariants : {
        hidden: { y: 120, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    },

    headerVariants : {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
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

        offscreen: { opacity: 0, y: 60 }
    }
}
