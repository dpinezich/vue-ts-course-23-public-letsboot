declare const _default: {
    name: string;
    setup(): {
        adventureList: import("vue").Ref<{
            id: number;
            adventure: string;
            options: string[];
        }[]>;
        selectedAdventure: import("vue").Ref<number[]>;
        filteredCantonList: import("vue").Ref<{
            id: number;
            canton: string;
            image: string;
            description: string;
            adventures: number[];
        }[]>;
        generateFilteredCantonList: () => void;
        getRand: (value: any) => any;
    };
};
export default _default;
