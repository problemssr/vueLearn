export const mixin = {
    mounted() {
        console.log(this.name);
    },
    methods: {
        showName() {
            console.log(this.name);
        }
    }
}
export const mixin2 = {
    data() {
        return {
            name: 111,
            y: 222
        }
    },
}