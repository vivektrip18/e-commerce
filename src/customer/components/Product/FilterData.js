export const color = [
    "white",
    "Black",
    "Orange",
    "Blue",
    "Pink",
    "Green",
]

export const filters = [
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white",label:"White"},
            {value:"Black",label:"Black"},
            {value:"Orange",label:"Orange"},
            {value:"Blue",label:"Blue"},
            {value:"Pink",label:"Pink"},
            {value:"Green",label:"Green"},

        ],
    },
    {
        
            id:"size",
            name:"Size",
            options:[
                {value:"8",label:"8"},
                {value:"9",label:"9"},
                {value:"10",label:"10"},
                
    
            ],
        
    },
]

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"1000-3999",label:"₹1000 to ₹3999"},
            {value:"4000-7999",label:"₹4000 to ₹7999"},
            {value:"8000-11999",label:"₹8000 to ₹11999"},
            {value:"12000-20000",label:"₹12000 to ₹20000"},
        ],
    },
    {
        id:"discount",
        name:"Discount",
        options:[
            {
                value:"10%",
                label:"10% and above",
            },
            {value:"20%",label:"20% and above"},
            {value:"30%",label:"30% and above"},
            {value:"40%",label:"40% and above"},
            {value:"50%",label:"50% and above"},
            {value:"60%",label:"60% and above"},


        ],
    },
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock",label:"In Stock"},
            {value:"out_of_stock",label:"Out of Stock"},


        ],
    },
]