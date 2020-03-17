export default {
    props: {
        item: {
          type:Object  
        },
        render: {
            type:Function
        }
    },
    render(h) {
        return this.render(h,this.item)
    }
}